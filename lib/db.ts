import { Node } from "./nodes";
import { WeeklyWants } from "./weekly-wants";

export const db = {
  spawnNodes: {},
} as {
  spawnNodes: {
    [type: string]: {
      [mapName: string]: [number, number][];
    };
  };
  weeklyWants?: WeeklyWants;
};

export function getSpawnNodes() {
  return db.spawnNodes;
}

export function insertNode(node: Node) {
  if (!db.spawnNodes[node.type]) {
    db.spawnNodes[node.type] = {};
  }
  if (!db.spawnNodes[node.type][node.mapName]) {
    db.spawnNodes[node.type][node.mapName] = [];
  }
  db.spawnNodes[node.type][node.mapName].push([node.x, node.y]);
}

export function getWeeklyWants() {
  return db.weeklyWants;
}

export function updateWeeklyWants(weeklyWants: WeeklyWants) {
  if (db.weeklyWants) {
    if (
      db.weeklyWants.preferenceDataVersionNumber >=
      weeklyWants.preferenceDataVersionNumber
    ) {
      return false;
    }
  }
  db.weeklyWants = weeklyWants;
  return true;
}
