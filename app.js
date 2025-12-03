import fs from "fs/promises";
import path from "path";
import chokidar from "chokidar";
import os from "os";
import { hideWindow } from "./hideWindow.js";

hideWindow();

const userHome = os.homedir();
const downloadsDir = path.join(userHome, "Downloads");

const watcher = chokidar.watch(downloadsDir, {
  persistent: true,
  depth: 0,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100,
  },
});

watcher.on("add", async (filePath) => {
  try {
    const rawExtension = path.extname(filePath).slice(1);

    const formatedExtension =
      rawExtension.charAt(0).toUpperCase() +
      rawExtension.slice(1).toLowerCase();
    const fileName = path.basename(filePath);

    const subDir = path.join(downloadsDir, formatedExtension);
    await fs.mkdir(subDir, { recursive: true });

    const finalPath = path.join(subDir, fileName);
    await fs.rename(filePath, finalPath);
  } catch (error) {
    console.log(error);
  }
});
