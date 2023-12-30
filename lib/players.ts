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
  let isChanged = false;
  if (!db[node.guid!]) {
    isChanged = true;
  } else if (
    db[node.guid!].lastKnownPrimaryHousingPlotValue !==
    node.lastKnownPrimaryHousingPlotValue
  ) {
    isChanged = true;
  } else if (
    node.skillLevels.some(
      (skillLevel) =>
        !db[node.guid!].skillLevels?.some((skill) => {
          return (
            skill.type === skillLevel.type && skill.level === skillLevel.level
          );
        })
    )
  ) {
    isChanged = true;
  }

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
