import { spawn } from "child_process";

export function hideWindow() {
  if (!process.argv.includes("--hidden")) {
    const subprocess = spawn(
      process.argv[0],
      [...process.argv.slice(1), "--hidden"],
      {
        detached: true,
        stdio: "ignore",
        windowsHide: true,
      }
    );

    subprocess.unref();
    process.exit();
  }
}
