import { getSpawnNodes, insertNode } from "../../lib/db";
import {
  calculateDistance,
  getMinDistance,
  toNode,
  validateActors,
} from "../../lib/nodes";

export async function fetchNodes(req: Request) {
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
        Allow: "OPTIONS, GET, POST",
      },
    });
  }
  return new Response("Method not allowed", {
    status: 405,
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}

async function handlePOST(req: Request) {
  if (req.headers.get("content-type") !== "application/json") {
    return new Response("Bad request", {
      status: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }
  try {
    const body = await req.json();
    if (!body) {
      return new Response("Bad request", {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }
    if (!validateActors(body)) {
      const message = validateActors
        .errors!.map((error) => error.message)
        .join("\n");
      return new Response(`Invalid actor: ${message}`, {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    const nodes = body.map(toNode);

    let count = 0;
    nodes.forEach((node) => {
      const spawnNodes = getSpawnNodes();
      if (spawnNodes[node.type]) {
        const isTooClose = spawnNodes[node.type].some((spawnNode) => {
          const distance = calculateDistance(node, spawnNode);
          const minDistance = getMinDistance(node.type);
          return distance < minDistance;
        });
        if (isTooClose) {
          return;
        }
      }
      insertNode(node);
      count++;
    });

    return new Response(`Inserted ${count} nodes`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (e) {
    if (e instanceof SyntaxError) {
      return new Response("Bad request", {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }
    throw e;
  }
}

async function handleGET(_req: Request) {
  const spawnNodes = getSpawnNodes();
  return new Response(JSON.stringify(spawnNodes), {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
