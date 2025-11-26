const fs = require("fs");
const path = require("path");

// -- CONFIG --
const ROOT_DIR = ".";
const BACKUP_DIR = "./_backups";
const EXCLUDE = ["node_modules", "_backups", ".git"];

function getTimestamp() {
  const d = new Date();
  return (
    d.getFullYear().toString() +
    String(d.getMonth() + 1).padStart(2, "0") +
    String(d.getDate()).padStart(2, "0") +
    "-" +
    String(d.getHours()).padStart(2, "0") +
    String(d.getMinutes()).padStart(2, "0") +
    String(d.getSeconds()).padStart(2, "0")
  );
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src).forEach((item) => {
    if (EXCLUDE.includes(item)) return;
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// -- DEMANDE MODIFICATIONS/CORRECTIONS A L'UTILISATEUR --
function askCorrections(callback) {
  process.stdout.write(
    "\nNote les modifications et corrections pour cette sauvegarde (finis par Entrée) :\n"
  );
  process.stdin.setEncoding("utf-8");
  process.stdin.once("data", (data) => {
    callback(data.trim());
  });
}

// SCRIPT PRINCIPAL
function main() {
  const stamp = getTimestamp();
  const backupTarget = path.join(BACKUP_DIR, "backup_" + stamp);

  if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR);

  askCorrections((message) => {
    copyRecursive(ROOT_DIR, backupTarget);

    fs.writeFileSync(
      path.join(backupTarget, "CORRECTIONS.txt"),
      `Backup réalisée le ${stamp}\n\nModifications et corrections :\n${message}\n`
    );

    console.log(`✅ Sauvegarde terminée dans : ${backupTarget}`);
    process.exit(0);
  });
}

main();
