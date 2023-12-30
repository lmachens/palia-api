import { getDB } from "./db";
import { Node, SkillLevels } from "./nodes";

type Players = {
  [guid: string]: {
    name: string;
    lastKnownPrimaryHousingPlotValue?: number;
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
      lastKnownPrimaryHousingPlotValue?: number;
    };
  } = {};
  Object.entries(db).forEach(([guid, player]) => {
    players[guid] = {
      name: player.name,
      skillLevels: player.skillLevels,
      lastKnownPrimaryHousingPlotValue: player.lastKnownPrimaryHousingPlotValue,
    };
  });
  return players;
}

export function updatePlayer(node: Node) {
  if (!node.skillLevels || node.skillLevels.length === 0) {
    return false;
  }

  const previousLevel = getLevel(db[node.guid!]?.skillLevels);
  const newLevel = getLevel(node.skillLevels);
  const isChanged = previousLevel !== newLevel;

  db[node.guid!] = {
    name: node.name!,
    lastKnownPrimaryHousingPlotValue: node.lastKnownPrimaryHousingPlotValue,
    skillLevels: node.skillLevels!,
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  write();

  return isChanged;
}

export function getLevel(skillLevels?: SkillLevels[]) {
  return skillLevels?.reduce((acc, skill) => acc + skill.level, 0) ?? 0;
}

export function getRank(level: number) {
  const players = getPlayers();
  const sorted = Object.values(players)
    .map((player) => getLevel(player.skillLevels))
    .sort((a, b) => b - a);
  return sorted.indexOf(level) + 1;
}
