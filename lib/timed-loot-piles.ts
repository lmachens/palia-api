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

export function updateTimedLootPile(node: Node) {
  if (
    db[node.type] &&
    db[node.type].mapName === node.mapName &&
    db[node.type].position[0] === node.x &&
    db[node.type].position[1] === node.y &&
    db[node.type].position[2] === node.z
  ) {
    return;
  }
  db[node.type] = {
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  write();
}
