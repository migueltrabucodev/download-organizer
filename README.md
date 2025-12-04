# 📂 Download Organizer

> **Version 1.0.0 (Stable)** | Developed by **Miguel Trabuco**

**Download Organizer** is a lightweight and efficient desktop automation tool designed to eliminate the chaos in your Downloads folder.

Forget the manual task of sorting files. The software monitors your folder in real time and automatically organizes each new downloaded file into subfolders categorized by extension, keeping everything clean and accessible.

---

## 🚀 Main Features

- **🧠 Dynamic Algorithm:** Does not depend on fixed rules. The software identifies the file extension and automatically creates the corresponding folder (e.g., `.pdf` goes to `Pdf`, `.mkv` goes to `Mkv`).
- **✨ Smart Formatting:** Folders are created using Title Case, ensuring a clean and standardized look in Windows Explorer.
- **👻 Silent Mode (Stealth):** Runs entirely in the background, with no open windows or taskbar icons to disrupt your workflow.
- **🛡️ Armored:** Automatically ignores temporary download files (`.tmp`, `.crdownload`) and has error handling to prevent interruption of operation.
- **⚡ Portable & Standalone:** A single executable file (.exe) that does not require installation of dependencies or Node.js..

---

## 📦 How to Use

### For Users (Windows)

1. Access the **[Releases](../../releases)** tab of this repository.
2. Download the latest version (v1.0.0) of the `download-organizer.exe` file.
3. Move the file to a safe location (e.g., `Documents` or `C:/Program Files/`).
4. Run the file **only once**.
   - *Note: The program will immediately start monitoring in the background.*

### For Developers (Build from Source)

If you wish to contribute or modify the code, follow the steps below:

#### Prerequisites
- Node.js (v18+)
- pnpm

#### Installation and Build

```bash
# 1. Clone the repository
git clone [https://github.com/migueltrabucodev/download-organizer.git](https://github.com/migueltrabucodev/download-organizer)

# 2. Install dependencies
pnpm install

# 3. Start in development mode
pnpm start

# 4. Generate the final executable (Build)
# This will generate the bundle and package the binary
pnpm build
```

---

## 🛠️ Tech Stack

This project demonstrates the use of modern JavaScript technologies in a Desktop environment:

- Node.js: Runtime environment.
- Chokidar: High-performance file system watcher.
- ESBuild: Ultra-fast bundler for ES Modules transpilation.
- Pkg: Packaging the project into a binary executable.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.😊