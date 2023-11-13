import { Node, SkillLevels, VillagerGiftHistory } from "./nodes";
import { WeeklyWants } from "./weekly-wants";

export const db = {
  timedLootPiles: {},
  villagers: {},
  players: {},
  spawnNodes: {},
} as {
  timedLootPiles: {
    [type: string]: {
      mapName: string;
      position: [number, number, number];
      timestamp: number;
    };
  };
  villagers: {
    [type: string]: {
      mapName: string;
      position: [number, number, number];
      timestamp: number;
    };
  };
  players: {
    [guid: string]: {
      name: string;
      giftHistory?: VillagerGiftHistory[];
      skillLevels?: SkillLevels[];
      mapName: string;
      position: [number, number, number];
      timestamp: number;
    };
  };
  spawnNodes: {
    [type: string]: {
      [mapName: string]: [number, number, number][];
    };
  };
  weeklyWants?: WeeklyWants;
};

export function getTimedLootPiles() {
  return db.timedLootPiles;
}

export function updateTimedLootPile(node: Node) {
  db.timedLootPiles[node.type] = {
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
}

export function getVillagers() {
  return db.villagers;
}

export function updateVillager(node: Node) {
  db.villagers[node.type] = {
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
}

export function getPlayers() {
  return db.players;
}

export function updatePlayer(node: Node) {
  db.players[node.guid!] = {
    name: node.name!,
    giftHistory: node.giftHistory!,
    skillLevels: node.skillLevels!,
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
}

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
  db.spawnNodes[node.type][node.mapName].push([node.x, node.y, node.z]);
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
