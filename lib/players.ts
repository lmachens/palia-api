import { getDB } from "./db";
import { Node, SkillLevels } from "./nodes";

type Players = {
  [guid: string]: {
    name: string;
    skillLevels?: SkillLevels[];
    mapName: string;
    position: [number, number, number];
    timestamp: number;
  };
};

const [db, write] = getDB<Players>("players", {}, 10000);

export function getPlayers() {
  const players: {
    [guid: string]: {
      name: string;
      skillLevels?: SkillLevels[];
    };
  } = {};
  Object.entries(db).forEach(([guid, player]) => {
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
  db[node.guid!] = {
    name: node.name!,
    skillLevels: node.skillLevels!,
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  write();
}
