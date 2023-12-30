import { postToDiscord } from "../../lib/discord";
import { WEEKLY_WANTS_TAG, revalidateByTag } from "../../lib/revalidate";
import { isValidVersion } from "../../lib/version";
import { villagers } from "../../lib/villagers";
import {
  getWeeklyWants,
  isPlausibleCurrentGiftPreferences,
  toWeeklyWants,
  updateWeeklyWants,
  validateCurrentGiftPreferences,
} from "../../lib/weekly-wants";

export async function fetchWeeklyWants(req: Request) {
  if (req.method === "POST") {
    return handlePOST(req);
  }
  if (req.method === "GET") {
    return handleGET(req);
  }
  if (req.method === "OPTIONS") {
    return new Response("", {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Allow: "OPTIONS, GET, POST",
      },
    });
  }
  return new Response("Method not allowed", {
    status: 405,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

async function handlePOST(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }
  if (
    !isValidVersion(req.headers.get("app-version")) ||
    req.headers.get("content-type") !== "application/json"
  ) {
    return new Response("Bad request", {
      status: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }
  try {
    const body = await req.json();
    if (!body) {
      return new Response("Bad request", {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }
    if (!validateCurrentGiftPreferences(body)) {
      const message = validateCurrentGiftPreferences
        .errors!.map((error) => error.message)
        .join("\n");
      return new Response(`Invalid current gift preferences: ${message}`, {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }
    if (!isPlausibleCurrentGiftPreferences(body)) {
      return new Response(`Implausible current gift preferences`, {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }
    const weeklyWants = toWeeklyWants(body);
    const updated = updateWeeklyWants(weeklyWants);
    if (updated) {
      await revalidateByTag(WEEKLY_WANTS_TAG);
      await postToDiscord(`Weekly wants updated`);
      postToDiscord(
        `The Weekly Wants has been updated! Check out [PALIA.th.gl](https://palia.th.gl) or the tracker.`
      );
    }
    return new Response(updated ? "Updated" : "Not updated", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });
  } catch (e) {
    if (e instanceof SyntaxError) {
      return new Response("Bad request", {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }
    throw e;
  }
}

async function handleGET(_req: Request) {
  const weeklyWants = getWeeklyWants();
  if (!weeklyWants) {
    return new Response("Not found", { status: 404 });
  }
  const preferences = weeklyWants.currentPreferenceData.reduce((acc, curr) => {
    const villager = villagers.find(
      (villager) => villager.persistId === curr.villagerCoreId
    );
    if (!villager) {
      return acc;
    }
    const gifts = curr.currentGiftPreferences.map((giftId) =>
      villager?.gifts.find((gift) => gift.persistId === giftId)
    );
    acc[villager?.configId] = gifts;
    return acc;
  }, {} as Record<string, any>);

  const result = {
    version: weeklyWants.preferenceDataVersionNumber,
    timestamp: weeklyWants.timestamp,
    preferences,
  };

  return new Response(JSON.stringify(result), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
