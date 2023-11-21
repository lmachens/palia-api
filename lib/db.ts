import { Node, SkillLevels, VillagerGiftHistory } from "./nodes";
import { WeeklyWants } from "./weekly-wants";

const filePath = Bun.main.replace("index.ts", "db.json");
console.log("DB file path:", filePath);
let file = Bun.file(filePath);
try {
  if (!(await file.exists())) {
    console.log("DB file does not exist, creating it");
    await Bun.write(
      filePath,
      JSON.stringify({
        timedLootPiles: {},
        villagers: {},
        players: {},
        spawnNodes: {},
      })
    );
    file = Bun.file(filePath);
  }
} catch (e) {
  console.error(e);
}

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
export const db: Database = await file.json();
console.log("DB file is ready");

const DEBOUNCE_TIME = 10000;
let timeout: Timer | null = null;
function debounceWrite() {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(async () => {
    await Bun.write(file, JSON.stringify(db));
  }, DEBOUNCE_TIME);
}

export function getTimedLootPiles() {
  return db.timedLootPiles;
}

export function updateTimedLootPile(node: Node) {
  db.timedLootPiles[node.type] = {
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  debounceWrite();
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
  debounceWrite();
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
  debounceWrite();
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
  debounceWrite();
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
  debounceWrite();
  return true;
}
