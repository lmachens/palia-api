import { Node } from "./nodes";
import { WeeklyWants } from "./weekly-wants";

const filePath = import.meta.dir + `/../db.json`;
console.log("DB file path:", filePath);
let file = Bun.file(filePath);
try {
  if (!(await file.exists())) {
    console.log("DB file does not exist, creating it");
    await Bun.write(
      file,
      JSON.stringify({
        spawnNodes: {},
      })
    );
    file = Bun.file(filePath);
  }
} catch (e) {
  console.error(e);
}
console.log("DB file is ready");
export const db = (await file.json()) as {
  spawnNodes: Record<string, Node[]>;
  weeklyWants?: WeeklyWants;
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
