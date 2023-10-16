import {
  calculateDistance,
  getMinDistance,
  toNode,
  validateActors,
} from "../../lib/actors";
import { getSpawnNodes, insertNode } from "../../lib/db";

export async function fetchNodes(req: Request) {
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
    if (!validateActors(body)) {
      const message = validateActors
        .errors!.map((error) => error.message)
        .join("\n");
      return new Response(`Invalid actor: ${message}`, { status: 400 });
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

    return new Response(`Inserted ${count} nodes`);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return new Response("Bad request", { status: 400 });
    }
    throw e;
  }
}
