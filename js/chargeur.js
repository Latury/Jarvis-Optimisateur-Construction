/* ========================================
   JARVIS - Chargeur de données
   Version 0.1.6 | Auteur: Latury
   Date: 2025-11-20
   ======================================== */

// === CONFIGURATION ===
const CHARGEUR_CONFIG = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50 MB
  MIN_JSON_LENGTH: 50,
  ALLOWED_EXTENSIONS: [".json", ".txt"],
  TIMEOUT_MS: 30000, // 30 secondes
};

// === VALIDATION DU FORMAT JSON (CORRIGÉE) ===
function validerFormatJSON(data) {
  if (!data || typeof data !== "string") {
    throw new Error("Les données doivent être une chaîne de caractères");
  }

  // Vérifier la longueur minimale
  if (data.length < CHARGEUR_CONFIG.MIN_JSON_LENGTH) {
    throw new Error(
      `Données trop courtes (minimum ${CHARGEUR_CONFIG.MIN_JSON_LENGTH} caractères)`
    );
  }

  // Vérifier que ça commence par { ou [
  const trimmedData = data.trim();
  if (!trimmedData.startsWith("{") && !trimmedData.startsWith("[")) {
    throw new Error("Format invalide : doit commencer par { ou [");
  }

  // Validation par parsing direct (plus fiable)
  try {
    JSON.parse(trimmedData);
    return true;
  } catch (e) {
    // Message d'erreur plus explicite
    const match = e.message.match(/position (\d+)/);
    if (match) {
      const pos = parseInt(match[1]);
      const start = Math.max(0, pos - 20);
      const end = Math.min(trimmedData.length, pos + 20);
      const context = trimmedData.substring(start, end);
      throw new Error(`JSON invalide (position ${pos}): ...${context}...`);
    }
    throw new Error(`JSON invalide : ${e.message}`);
  }
}

// === SANITISER LES DONNÉES (SÉCURITÉ BASIQUE) ===
function sanitiserJSON(jsonString) {
  // Supprimer les scripts potentiellement dangereux
  let sanitized = jsonString
    .replace(/<script[^>]*>.*?<\/script>/gi, "")
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
    .replace(/javascript:/gi, "");

  return sanitized;
}

// === VÉRIFIER LA VALIDITÉ DU JSON ===
function verifierJSONValide(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
}

// === AFFICHER UNE NOTIFICATION ===
function afficherNotification(message, type = "info") {
  // Créer une notification visuelle temporaire
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: ${
      type === "error" ? "#fc424a" : type === "success" ? "#3ec486" : "#00adb5"
    };
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    max-width: 400px;
  `;

  document.body.appendChild(notification);

  // Retirer après 5 secondes
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// === CHARGER DONNÉES DEPUIS TEXTAREA ===
function chargerDonnees() {
  const zoneDonnees = document.getElementById("zone-donnees");

  if (!zoneDonnees) {
    logConsole("error", "❌ Zone de texte introuvable");
    afficherNotification("Erreur : zone de texte introuvable", "error");
    return;
  }

  const data = zoneDonnees.value.trim();

  if (!data) {
    logConsole("error", "❌ Aucune donnée à charger");
    afficherNotification("Veuillez coller vos données Idleon", "error");
    return;
  }

  try {
    // Afficher un indicateur de chargement
    logConsole("info", "🔄 Chargement en cours...");

    // Validation du format
    validerFormatJSON(data);

    // Sanitisation
    const dataSanitized = sanitiserJSON(data);

    // Vérification JSON valide
    if (!verifierJSONValide(dataSanitized)) {
      throw new Error("JSON invalide : erreur de syntaxe");
    }

    // Afficher des stats avant chargement
    const tailleMo = (data.length / 1024 / 1024).toFixed(2);
    logConsole("info", `📊 Taille des données : ${tailleMo} MB`);

    // Charger les données
    const ok = CogsManager.chargerDonneesIdleon(dataSanitized);

    if (ok) {
      CogsManager.afficherInventaireCogs();
      CogsManager.afficherPlateauCogs();

      if (typeof updateInfoPage === "function") {
        updateInfoPage();
      }

      logConsole("success", "✅ Données Idleon traitées et affichées");
      afficherNotification("Données chargées avec succès !", "success");

      // Afficher les statistiques
      const stats = CogsManager.obtenirStatistiques();
      logConsole(
        "info",
        `📈 ${stats.inventaire.total} cogs dans l'inventaire, ${stats.plateau.places} sur le plateau`
      );
    } else {
      logConsole("error", "❌ Erreur de traitement des données");
      afficherNotification("Erreur lors du traitement des données", "error");
    }

    fermerModalDonnees();
  } catch (error) {
    logConsole("error", `❌ Erreur : ${error.message}`);
    afficherNotification(`Erreur : ${error.message}`, "error");
  }
}

// === CHARGER DEPUIS UN FICHIER ===
function chargerFichier(event) {
  const fichier = event.target.files[0];

  if (!fichier) {
    logConsole("warn", "⚠️ Aucun fichier sélectionné");
    return;
  }

  // Vérifier l'extension
  const extension = fichier.name
    .substring(fichier.name.lastIndexOf("."))
    .toLowerCase();
  if (!CHARGEUR_CONFIG.ALLOWED_EXTENSIONS.includes(extension)) {
    const msg = `Extension non supportée : ${extension}. Utilisez .json ou .txt`;
    logConsole("error", `❌ ${msg}`);
    afficherNotification(msg, "error");
    return;
  }

  // Vérifier la taille
  if (fichier.size > CHARGEUR_CONFIG.MAX_FILE_SIZE) {
    const tailleMB = (fichier.size / 1024 / 1024).toFixed(2);
    const maxMB = (CHARGEUR_CONFIG.MAX_FILE_SIZE / 1024 / 1024).toFixed(0);
    const msg = `Fichier trop volumineux : ${tailleMB} MB (maximum : ${maxMB} MB)`;
    logConsole("error", `❌ ${msg}`);
    afficherNotification(msg, "error");
    return;
  }

  logConsole(
    "info",
    `📁 Chargement du fichier : ${fichier.name} (${(
      fichier.size / 1024
    ).toFixed(2)} KB)`
  );

  const lecteur = new FileReader();

  // Timeout de sécurité
  const timeoutId = setTimeout(() => {
    lecteur.abort();
    logConsole("error", "❌ Timeout : le chargement a pris trop de temps");
    afficherNotification("Timeout : fichier trop long à charger", "error");
  }, CHARGEUR_CONFIG.TIMEOUT_MS);

  lecteur.onload = function (e) {
    clearTimeout(timeoutId);

    try {
      const contenu = e.target.result;

      // Validation
      validerFormatJSON(contenu);

      // Sanitisation
      const contenuSanitized = sanitiserJSON(contenu);

      // Vérification JSON
      if (!verifierJSONValide(contenuSanitized)) {
        throw new Error("JSON invalide dans le fichier");
      }

      // Charger les données
      const ok = CogsManager.chargerDonneesIdleon(contenuSanitized);

      if (ok) {
        CogsManager.afficherInventaireCogs();
        CogsManager.afficherPlateauCogs();

        if (typeof updateInfoPage === "function") {
          updateInfoPage();
        }

        logConsole("success", `✅ Fichier ${fichier.name} chargé avec succès`);
        afficherNotification(`Fichier chargé : ${fichier.name}`, "success");

        // Stats
        const stats = CogsManager.obtenirStatistiques();
        logConsole(
          "info",
          `📈 ${stats.inventaire.total} cogs, ${stats.plateau.places} sur le plateau`
        );
      } else {
        logConsole("error", "❌ Erreur de traitement du fichier");
        afficherNotification("Erreur lors du traitement du fichier", "error");
      }

      fermerModalDonnees();
    } catch (error) {
      logConsole("error", `❌ Erreur fichier : ${error.message}`);
      afficherNotification(`Erreur : ${error.message}`, "error");
    }
  };

  lecteur.onerror = function () {
    clearTimeout(timeoutId);
    logConsole("error", "❌ Erreur de lecture du fichier");
    afficherNotification("Impossible de lire le fichier", "error");
  };

  lecteur.readAsText(fichier);
}

// === CHARGER DEPUIS LE PRESSE-PAPIER ===
async function chargerDepuisPressePapier() {
  try {
    if (!navigator.clipboard) {
      throw new Error("API Clipboard non supportée par ce navigateur");
    }

    logConsole("info", "📋 Lecture du presse-papier...");

    const texte = await navigator.clipboard.readText();

    if (!texte || texte.trim().length === 0) {
      throw new Error("Presse-papier vide");
    }

    // Injecter dans la zone de texte
    const zoneDonnees = document.getElementById("zone-donnees");
    if (zoneDonnees) {
      zoneDonnees.value = texte;
      logConsole("success", "✅ Données collées depuis le presse-papier");
      afficherNotification("Données collées avec succès", "success");
    }
  } catch (error) {
    logConsole("error", `❌ Erreur presse-papier : ${error.message}`);
    afficherNotification("Impossible de lire le presse-papier", "error");

    // Fallback : demander de coller manuellement
    const zoneDonnees = document.getElementById("zone-donnees");
    if (zoneDonnees) {
      zoneDonnees.focus();
      afficherNotification("Utilisez Ctrl+V pour coller", "info");
    }
  }
}

// === VIDER LA ZONE DE DONNÉES ===
function viderZoneDonnees() {
  const zoneDonnees = document.getElementById("zone-donnees");
  if (zoneDonnees) {
    zoneDonnees.value = "";
    logConsole("info", "🗑️ Zone de données vidée");
  }
}

// === DRAG & DROP SUPPORT ===
function initialiserDragDrop() {
  const dropZone = document.getElementById("zone-donnees");

  if (!dropZone) return;

  // Empêcher le comportement par défaut
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Effet visuel au survol
  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => {
        dropZone.classList.add("drag-over");
      },
      false
    );
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => {
        dropZone.classList.remove("drag-over");
      },
      false
    );
  });

  // Gérer le drop
  dropZone.addEventListener("drop", handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const fichiers = dt.files;

    if (fichiers.length > 0) {
      const fichier = fichiers[0];

      // Créer un événement fictif pour réutiliser chargerFichier
      const fakeEvent = {
        target: {
          files: [fichier],
        },
      };

      chargerFichier(fakeEvent);
    }
  }
}

// === EXPORT DES DONNÉES ===
function exporterDonnees() {
  try {
    const stats = CogsManager.obtenirStatistiques();
    const data = {
      timestamp: new Date().toISOString(),
      version: "0.1.6",
      inventaire: CogsManager.inventaire,
      plateau: CogsManager.plateau,
      stats: stats,
    };

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `jarvis-export-${Date.now()}.json`;
    a.click();

    URL.revokeObjectURL(url);

    logConsole("success", "✅ Données exportées");
    afficherNotification("Export réussi", "success");
  } catch (error) {
    logConsole("error", `❌ Erreur d'export : ${error.message}`);
    afficherNotification("Erreur lors de l'export", "error");
  }
}

// === INITIALISATION AU CHARGEMENT ===
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    initialiserDragDrop();
    logConsole("info", "📂 Chargeur initialisé (drag & drop activé)");
  });
}

// === EXPOSITION GLOBALE ===
window.ChargeurJarvis = {
  chargerDonnees,
  chargerFichier,
  chargerDepuisPressePapier,
  viderZoneDonnees,
  exporterDonnees,
};
