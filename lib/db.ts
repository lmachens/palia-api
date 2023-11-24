import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { Node, SkillLevels, VillagerGiftHistory } from "./nodes";
import { WeeklyWants } from "./weekly-wants";

const filePath = Bun.main.replace("index.ts", "db.json");
console.log("DB file path:", filePath);
if (!existsSync(filePath)) {
  console.log("DB file does not exist, creating it");
  writeFileSync(
    filePath,
    JSON.stringify({
      timedLootPiles: {},
      villagers: {},
      players: {},
      spawnNodes: {},
    })
  );
}
const file = readFileSync(filePath, "utf8");

type Database = {
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

export let db: Database;
try {
  db = JSON.parse(file);
} catch (err) {
  db = {
    timedLootPiles: {},
    villagers: {},
    players: {},
    spawnNodes: {},
  };
}
console.log("DB file is ready");

const THROTTLE_TIME = 30000;
let timeout: Timer | null = null;
let lastWrite = Date.now();
let blocked = false;
function throttleWrite() {
  const timeGone = Date.now() - lastWrite;
  if (timeGone < THROTTLE_TIME) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(throttleWrite, THROTTLE_TIME - timeGone);
    return;
  }
  if (blocked) {
    return;
  }
  blocked = true;
  lastWrite = Date.now();
  writeFileSync(filePath, JSON.stringify(db));
  blocked = false;
}

export function getTimedLootPiles() {
  return db.timedLootPiles;
}

export function updateTimedLootPile(node: Node) {
  if (
    db.timedLootPiles[node.type] &&
    db.timedLootPiles[node.type].mapName === node.mapName &&
    db.timedLootPiles[node.type].position[0] === node.x &&
    db.timedLootPiles[node.type].position[1] === node.y &&
    db.timedLootPiles[node.type].position[2] === node.z
  ) {
    return;
  }
  db.timedLootPiles[node.type] = {
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  throttleWrite();
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
  throttleWrite();
}

export function getPlayers() {
  const players: {
    [guid: string]: {
      name: string;
      skillLevels?: SkillLevels[];
    };
  } = {};
  Object.entries(db.players).forEach(([guid, player]) => {
    players[guid] = {
      name: player.name,
      skillLevels: player.skillLevels,
    };
  });
  return players;
}

export function updatePlayer(node: Node) {
  if (!node.skillLevels || node.skillLevels.length === 0) {
    return;
  }
  db.players[node.guid!] = {
    name: node.name!,
    giftHistory: node.giftHistory!,
    skillLevels: node.skillLevels!,
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  throttleWrite();
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
  throttleWrite();
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
  throttleWrite();
  return true;
}
