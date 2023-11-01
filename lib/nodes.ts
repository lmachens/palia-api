import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv();
export type Actor = {
  className: string;
  x: number;
  y: number;
  z: number;
  r: number;
};

export const actorsSchema: JSONSchemaType<Actor[]> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      className: { type: "string" },
      x: { type: "number" },
      y: { type: "number" },
      z: { type: "number" },
      r: { type: "number" },
    },
    required: ["className", "x", "y", "z", "r"],
    additionalProperties: false,
  },
};

export const validateActors = ajv.compile(actorsSchema);

export type Node = {
  type: string;
  x: number;
  y: number;
  z: number;
  mapName: string;
  timestamp: number;
};

/*
housing / bahari bay muss angepasst werden, siehe mapName
{"type":"BP_HousingPlotUnlockDebrisActor_C","x":265200,"y":-87600,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":265200,"y":-86300,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":265200,"y":-85000,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":265200,"y":-83700,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":265200,"y":-82400,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":189800,"y":-87600,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":189800,"y":-86300,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":189800,"y":-85000,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":189800,"y":-83700,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":189800,"y":-82400,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":191100,"y":-87600,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":191100,"y":-86300,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":191100,"y":-85000,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":191100,"y":-83700,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":191100,"y":-82400,"z":5000,"mapName":"bahari-bay","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":192400,"y":-87600,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":192400,"y":-86300,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":192400,"y":-85000,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":192400,"y":-83700,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":192400,"y":-82400,"z":5000,"mapName":"housing","timestamp":1697573646290},{"type":"BP_HousingPlotUnlockDebrisActor_C","x":193700,"y":-87600,"z":5000,"mapName":"housing","timestamp":1697573646290},
 */

export function getMapFromActor(actor: Actor) {
  if (actor.className.includes("Village")) {
    return "kilima-valley";
  }
  if (actor.className.includes("AZ1")) {
    return "bahari-bay";
  }
  if (actor.className.includes("HousingMaps")) {
    return "housing";
  }

  return "unknown";
}

export function toNode(actor: Actor): Node {
  const type = actor.className.split(" ")[0];
  return {
    type,
    x: actor.x,
    y: actor.y,
    z: actor.z,
    mapName: getMapFromActor(actor),
    timestamp: Date.now(),
  };
}

export function getMinDistance(category: string) {
  let minDistance = 200;
  if (["bugCatching", "hunting"].includes(category)) {
    minDistance = Math.max(minDistance, 3000);
  }

  return minDistance;
}

export function calculateDistance(
  node1: Node,
  coords: [number, number, number]
) {
  const dx = node1.x - coords[0];
  const dy = node1.y - coords[1];
  return Math.sqrt(dx * dx + dy * dy);
}
