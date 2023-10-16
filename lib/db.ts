import { Node } from "./actors";

const file = Bun.file(import.meta.dir + "/../db.json");
if (!(await file.exists())) {
  await Bun.write(
    file,
    JSON.stringify({
      spawnNodes: {},
    })
  );
}
export const db = (await file.json()) as {
  spawnNodes: Record<string, Node[]>;
};

export function getSpawnNodes() {
  return db.spawnNodes;
}

export function insertNode(node: Node) {
  db.spawnNodes[node.type] = db.spawnNodes[node.type] || [];
  db.spawnNodes[node.type].push(node);
  debounceWrite();
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
