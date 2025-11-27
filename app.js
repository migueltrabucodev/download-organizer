import fs from "fs/promises";
import path from "path";
import chokidar from "chokidar";
import os from "os";

const userHome = os.homedir();
const downloadsDir = path.join(userHome, "Downloads");
const staticSubDirs = ["Pdf", "Zip", "Exe", "Outros"];

staticSubDirs.forEach((staticSubDir) => {
  const subDir = path.join(downloadsDir, staticSubDir);

  try {
    fs.mkdir(subDir, { recursive: true });
  } catch (error) {
    console.log(error);
  }
});
