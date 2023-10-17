import { Node } from "./nodes";
import { CurrentGiftPreferences } from "./weekly-wants";

let file = Bun.file(import.meta.dir + "/../db.json");
if (!(await file.exists())) {
  await Bun.write(
    file,
    JSON.stringify({
      spawnNodes: {},
    })
  );
  file = Bun.file(import.meta.dir + "/../db.json");
}
export const db = (await file.json()) as {
  spawnNodes: Record<string, Node[]>;
  weeklyWants?: CurrentGiftPreferences;
};

export function getSpawnNodes() {
  return db.spawnNodes;
}

export function insertNode(node: Node) {
  db.spawnNodes[node.type] = db.spawnNodes[node.type] || [];
  db.spawnNodes[node.type].push(node);
  debounceWrite();
}

export function getWeeklyWants() {
  return db.weeklyWants;
}

export function updateWeeklyWants(weeklyWants: CurrentGiftPreferences) {
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
