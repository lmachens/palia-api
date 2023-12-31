import { getDB } from "./db";
import { Node } from "./nodes";

type TimedLootPiles = {
  [type: string]: {
    mapName: string;
    position: [number, number, number];
    timestamp: number;
  };
};

const [db, write] = getDB<TimedLootPiles>("timed-loot-piles", {}, 1);

export function getTimedLootPiles() {
  return db;
}

const MIN_TIME_LEFT = 30 * 60 * 1000; // Thirty Minutes
let lastUpdateAt = 0;
export function updateTimedLootPile(node: Node) {
  if (
    db[node.type] &&
    db[node.type].mapName === node.mapName &&
    db[node.type].position[0] === node.x &&
    db[node.type].position[1] === node.y &&
    db[node.type].position[2] === node.z
  ) {
    return false;
  }
  if (Date.now() - lastUpdateAt < MIN_TIME_LEFT) {
    return false;
  }
  lastUpdateAt = Date.now();
  db[node.type] = {
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  write();
  return true;
}
