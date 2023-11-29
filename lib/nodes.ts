import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv();
export type Actor = {
  className: string;
  x: number;
  y: number;
  z: number;
  r?: number;
  name?: string;
  guid?: string;
  giftHistory?: VillagerGiftHistory[];
  skillLevels?: SkillLevels[];
};

export type VillagerGiftHistory = {
  villagerCoreId: number;
  itemPersistId: number;
  lastGiftedMs: number;
  associatedPreferenceVersion: number;
};

export type SkillLevels = {
  type: string;
  level: number;
  xpGainedThisLevel: number;
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
      r: { type: "number", nullable: true },
      guid: { type: "string", nullable: true },
      name: { type: "string", nullable: true },
      giftHistory: {
        type: "array",
        nullable: true,
        items: {
          type: "object",
          properties: {
            villagerCoreId: { type: "number" },
            itemPersistId: { type: "number" },
            lastGiftedMs: { type: "number" },
            associatedPreferenceVersion: { type: "number" },
          },
          required: [
            "villagerCoreId",
            "itemPersistId",
            "lastGiftedMs",
            "associatedPreferenceVersion",
          ],
          additionalProperties: false,
        },
      },
      skillLevels: {
        type: "array",
        nullable: true,
        items: {
          type: "object",
          properties: {
            type: { type: "string" },
            level: { type: "number", minimum: 1 },
            xpGainedThisLevel: { type: "number", minimum: 0 },
          },
          required: ["type", "level", "xpGainedThisLevel"],
          additionalProperties: false,
        },
      },
    },
    required: ["className", "x", "y", "z"],
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
  name?: string;
  guid?: string;
  giftHistory?: VillagerGiftHistory[];
  skillLevels?: SkillLevels[];
};

const HOUSING_MOD = 65000;
export function modHousingCoords(coords: { x: number; y: number; z: number }) {
  let x = coords.x % HOUSING_MOD;
  if (x < 0) {
    x += HOUSING_MOD;
  }
  let y = coords.y % HOUSING_MOD;
  if (y < 0) {
    y += HOUSING_MOD;
  }
  return { x, y, z: coords.z };
}

export function getMapFromActor(actor: Actor) {
  if (actor.className.includes("Maps/Village")) {
    return "kilima-valley";
  }
  if (actor.className.includes("Maps/AZ1")) {
    return "bahari-bay";
  }
  if (actor.className.includes("Maps/HousingMaps")) {
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
    guid: actor.guid,
    name: actor.name,
    giftHistory: actor.giftHistory,
    skillLevels: actor.skillLevels,
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
