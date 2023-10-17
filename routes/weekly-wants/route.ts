import { getWeeklyWants, updateWeeklyWants } from "../../lib/db";
import {
  toWeeklyWants,
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
  if (req.headers.get("content-type") !== "application/json") {
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
    const weeklyWants = toWeeklyWants(body);
    const updated = updateWeeklyWants(weeklyWants);
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
  return new Response(JSON.stringify(weeklyWants), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
