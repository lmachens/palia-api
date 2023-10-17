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
      if (
        [
          "DefaultPhysicsVolume",
          "BP_EnvironmentManager",
          "GameplayHUD",
          "BP_HousingPlotUnlockDebrisActor",
          "VAL_",
          "LimitedEventManagerBase",
          "BlueprintGeneratedClass",
          "BP_LimitedEventManager",
          "BP_Env_",
          "BP_AudioPool_",
          "BP_MajiMarket_",
          "BP_Palcat_",
          "BP_Bobber_",
          "BP_QuestItem_",
          "BP_Villager",
          "BP_ValeriaPlayerController_",
          "BP_ValeriaCharacter_",
          "BP_ValeriaGameState_",
          "BP_vfx",
          "BP_Decor_",
          "BP_BackpackUpgrade",
          "BP_Axe_",
          "BP_Dummy",
          "BP_CharacterPreview",
          "BP_Garden",
          "BP_MainHouse",
          "BP_Master_",
        ].some((i) => node.type.toLowerCase().startsWith(i.toLowerCase())) ||
        ["EquipView", "MirrorImage", "Arrow", "Glider"].some((i) =>
          node.type.toLowerCase().includes(i.toLowerCase())
        )
      ) {
        return;
      }

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
  const spawnNodes = getSpawnNodes();
  return new Response(JSON.stringify(spawnNodes), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
