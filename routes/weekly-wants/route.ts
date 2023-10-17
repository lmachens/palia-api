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
  return new Response("Method not allowed", { status: 405 });
}

async function handlePOST(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  if (req.headers.get("content-type") !== "application/json") {
    return new Response("Bad request", { status: 400 });
  }
  try {
    const body = await req.json();
    if (!body) {
      return new Response("Bad request", { status: 400 });
    }
    if (!validateCurrentGiftPreferences(body)) {
      const message = validateCurrentGiftPreferences
        .errors!.map((error) => error.message)
        .join("\n");
      return new Response(`Invalid current gift preferences: ${message}`, {
        status: 400,
      });
    }
    const weeklyWants = toWeeklyWants(body);
    const updated = updateWeeklyWants(weeklyWants);
    return new Response(updated ? "Updated" : "Not updated");
  } catch (e) {
    if (e instanceof SyntaxError) {
      return new Response("Bad request", { status: 400 });
    }
    throw e;
  }
}

async function handleGET(_req: Request) {
  const weeklyWants = getWeeklyWants();
  return new Response(JSON.stringify(weeklyWants));
}
