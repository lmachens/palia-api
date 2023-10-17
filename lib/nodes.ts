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
  mapName: string | null;
  timestamp: number;
};

const mapBounds = {
  fairgrounds: {
    topLeft: {
      x: 70000,
      y: 15000,
    },
    bottomRight: {
      x: 92000,
      y: 46000,
    },
  },
  "kilima-valley": {
    topLeft: {
      x: -54000,
      y: -44000,
    },
    bottomRight: {
      x: 56000,
      y: 46000,
    },
  },
  "bahari-bay": {
    topLeft: {
      x: 31138.41368584759,
      y: -130401.24416796268,
    },
    bottomRight: {
      x: 191947.1228615863,
      y: 30407.46500777605,
    },
  },
  housing: {
    topLeft: {
      x: -400000,
      y: -4000000,
    },
    bottomRight: {
      x: 700000,
      y: -10000,
    },
  },
} as const;

export function getMapFromCoords(coords: { x: number; y: number }) {
  for (const mapName in mapBounds) {
    const bounds = mapBounds[mapName as keyof typeof mapBounds];
    if (
      coords.x >= bounds.topLeft.x &&
      coords.x <= bounds.bottomRight.x &&
      coords.y >= bounds.topLeft.y &&
      coords.y <= bounds.bottomRight.y
    ) {
      return mapName;
    }
  }
  return null; // Coordinates do not belong to any known map
}

export function toNode(actor: Actor): Node {
  const type = actor.className.split(" ")[0];
  return {
    type,
    x: actor.x,
    y: actor.y,
    z: actor.z,
    mapName: getMapFromCoords({ x: actor.x, y: actor.y }),
    timestamp: Date.now(),
  };
}

export const MIN_DISTANCE_MOVING = 1500;
export const MIN_DISTANCE = 100;

export function getMinDistance(group: string) {
  return ["insects", "hunting"].includes(group)
    ? MIN_DISTANCE_MOVING
    : MIN_DISTANCE;
}

export function calculateDistance(node1: Node, node2: Node) {
  const dx = node1.x - node2.x;
  const dy = node1.y - node2.y;
  return Math.sqrt(dx * dx + dy * dy);
}
