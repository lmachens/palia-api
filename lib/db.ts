import { existsSync, readFileSync, writeFileSync } from "node:fs";

function getFilePath(name: string) {
  return Bun.main.replace("index.ts", `db/${name}.json`);
}

function createDBWrite<T>(name: string, db: T, throttleTime: number) {
  let timeout: Timer | null = null;
  let lastWrite = Date.now();
  let blocked = false;
  function throttleWrite() {
    const timeGone = Date.now() - lastWrite;
    if (timeGone < throttleTime) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(throttleWrite, throttleTime - timeGone);
      return;
    }
    if (blocked) {
      return;
    }
    blocked = true;
    lastWrite = Date.now();
    const filePath = getFilePath(name);
    writeFileSync(filePath, JSON.stringify(db));
    blocked = false;
  }
  return throttleWrite;
}

export function getDB<T>(name: string, initialData: T, throttleTime: number) {
  const filePath = getFilePath(name);
  console.log("DB file path:", filePath);
  if (!existsSync(filePath)) {
    console.log("DB file does not exist, creating it");
    writeFileSync(filePath, JSON.stringify(initialData));
  }
  const file = readFileSync(filePath, "utf8");
  let db: T;
  try {
    db = JSON.parse(file);
  } catch (err) {
    db = initialData;
  }
  const write = createDBWrite(name, db, throttleTime);
  console.log("DB file is ready");
  return [db, write] as const;
}
