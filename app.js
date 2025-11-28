import fs from "fs/promises";
import path from "path";
import chokidar from "chokidar";
import os from "os";

const userHome = os.homedir();
const downloadsDir = path.join(userHome, "Downloads");
const subDirNames = ["Pdf", "Zip", "Exe", "Outros"];

try {
  for (const subDirName of subDirNames) {
    const subDir = path.join(downloadsDir, subDirName);
    fs.mkdir(subDir, { recursive: true });
  }
} catch (error) {
  console.log(error);
}

const watcher = chokidar.watch(downloadsDir, {
  persistent: true,
  depth: 0,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100,
  },
});

watcher.on("add", (filePath) => {
  const extension = path.extname(filePath);
  const fileName = path.basename(filePath);

  switch (extension) {
    case ".pdf":
      var destinyPath = path.join(downloadsDir, "Pdf");
      var finalPath = path.join(destinyPath, fileName);
      fs.rename(filePath, finalPath);
      break;

    case ".exe" || ".msi":
      var destinyPath = path.join(downloadsDir, "Exe");
      var finalPath = path.join(destinyPath, fileName);
      fs.rename(filePath, finalPath);
      break;

    case ".zip" || ".rar" || ".7z":
      var destinyPath = path.join(downloadsDir, "Zip");
      var finalPath = path.join(destinyPath, fileName);
      fs.rename(filePath, finalPath);
      break;

    default:
      var destinyPath = path.join(downloadsDir, "Outros");
      var finalPath = path.join(destinyPath, fileName);
      fs.rename(filePath, finalPath);
  }
});
