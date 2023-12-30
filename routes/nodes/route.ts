import { postToDiscord } from "../../lib/discord";
import {
  allGatherables,
  gatherables,
  getSpawnNodes,
  insertNode,
} from "../../lib/gatherables";
import {
  calculateDistance,
  getMinDistance,
  modHousingCoords,
  toNode,
  validateActors,
} from "../../lib/nodes";
import { getLevel, getPlayers, getRank, updatePlayer } from "../../lib/players";
import {
  LEADERBOARD_TAG,
  RUMMAGE_PILE_TAG,
  revalidateByTag,
} from "../../lib/revalidate";
import {
  getTimedLootPiles,
  updateTimedLootPile,
} from "../../lib/timed-loot-piles";
import { isValidVersion } from "../../lib/version";
import { getVillagers, updateVillager } from "../../lib/villagers";

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
    if (!validateActors(body)) {
      const message = validateActors
        .errors!.map((error) => error.message)
        .join("\n");
      return new Response(`Invalid actor: ${message}`, {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }

    const nodes = body.map(toNode);

    let count = 0;
    nodes.forEach((node) => {
      if (node.mapName === "housing") {
        const position = modHousingCoords(node);
        node.x = position.x;
        node.y = position.y;
        node.z = position.z;
      }

      const normalized = node.type.replace(/_C$/, "");
      if (normalized.startsWith("BP_ValeriaCharacter")) {
        const isChanged = updatePlayer(node);
        if (isChanged) {
          const rank = getRank(getLevel(node.skillLevels));
          if (rank <= 100) {
            revalidateByTag(LEADERBOARD_TAG);
          }
        }
        return;
      }
      if (normalized.startsWith("BP_Villager")) {
        updateVillager(node);
        return;
      }
      if (normalized.startsWith("BP_ChapaaPile")) {
        const isChanged = updateTimedLootPile(node);
        if (isChanged) {
          revalidateByTag(RUMMAGE_PILE_TAG);
          postToDiscord(
            `The Rummage Pile spawned! Check out [PALIA.th.gl](https://palia.th.gl/en/rummage-pile) for the exact location.`
          );
        }
      }
      if (!allGatherables.includes(normalized) || node.x === 0) {
        return;
      }
      const category =
        Object.entries(gatherables).find(([, v]) =>
          v.some((b) => b.toLowerCase() === normalized.toLowerCase())
        )?.[0] ?? "other";

      const spawnNodes = getSpawnNodes();
      if (spawnNodes[node.type]) {
        const isTooClose = spawnNodes[node.type]?.[node.mapName]?.some(
          (coords) => {
            const distance = calculateDistance(node, coords);
            const minDistance = getMinDistance(category);
            return distance < minDistance;
          }
        );
        if (isTooClose) {
          return;
        }
      }
      insertNode(node);
      count++;
    });

    return new Response(`Inserted ${count} nodes`, {
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

async function handleGET(req: Request) {
  const query = new URL(req.url).searchParams;
  const type = query.get("type");
  let result;
  switch (type) {
    case "spawnNodes":
      result = getSpawnNodes();
      break;
    case "timedLootPiles":
      result = getTimedLootPiles();
      break;
    case "players":
      result = getPlayers();
      break;
    case "villagers":
      result = getVillagers();
      break;
    default:
      return new Response("Bad request", {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      });
  }
  return new Response(JSON.stringify(result), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
