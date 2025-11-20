/* ========================================
   JARVIS - Gestion de l'interface
   Version 0.1.5 | Auteur: Latury
   ======================================== */

// === VARIABLES GLOBALES ===
let pageActuelle = 1;
let pagesTotal = 1;
let etapeActuelle = 0;
let etapes = [];
let consoleLogs = [];
let themeActuel = "theme-sombre";

// Exposer les variables globalement pour synchronisation
window.pageActuelle = pageActuelle;
window.pagesTotal = pagesTotal;

// === SYSTÈME DE LOGS (DOIT ÊTRE DÉFINI EN PREMIER) ===
function logConsole(type, message) {
  const time = new Date().toLocaleTimeString("fr-FR");
  consoleLogs.push({ time, type, message });
  if (consoleLogs.length > 100) consoleLogs.shift();

  // Affiche dans la console navigateur avec couleurs
  const styles = {
    success: "color: #3ec486; font-weight: bold;",
    error: "color: #fc424a; font-weight: bold;",
    warn: "color: #fdcb51; font-weight: bold;",
    info: "color: #00adb5; font-weight: bold;",
  };
  console.log(
    `%c[${type.toUpperCase()}] ${time}`,
    styles[type] || styles.info,
    message
  );
}

// === CRÉATION DES GRILLES ===
function creerGrilles() {
  // Grille inventaire (3x5 = 15 cases)
  const inventaireDiv = document.getElementById("inventaire");
  if (inventaireDiv) {
    inventaireDiv.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      const caseDiv = document.createElement("div");
      caseDiv.className = "case";
      caseDiv.setAttribute("data-index", i);
      inventaireDiv.appendChild(caseDiv);
    }
    logConsole("success", "✅ Grille inventaire créée (15 cases)");
  }

  // Grille plateau (8x12 = 96 cases)
  const plateauDiv = document.getElementById("plateau");
  if (plateauDiv) {
    plateauDiv.innerHTML = "";
    for (let i = 0; i < 96; i++) {
      const caseDiv = document.createElement("div");
      caseDiv.className = "case";
      caseDiv.setAttribute("data-index", i);
      plateauDiv.appendChild(caseDiv);
    }
    logConsole("success", "✅ Grille plateau créée (96 cases)");
  }
}

// === GESTION DE LA PAGINATION ===
function updateInfoPage() {
  const elt = document.getElementById("info-page");
  if (elt) {
    // Synchroniser avec les valeurs globales
    pageActuelle = window.pageActuelle || pageActuelle;
    pagesTotal = window.pagesTotal || pagesTotal;
    elt.textContent = `Page ${pageActuelle} / ${pagesTotal}`;
  }
}

function pagePrecedente() {
  if (pageActuelle > 1) {
    pageActuelle--;
    window.pageActuelle = pageActuelle; // Sync global
    updateInfoPage();
    logConsole("info", `📄 Navigation vers la page ${pageActuelle}`);
  } else {
    logConsole("warn", "⚠️ Déjà à la première page");
  }
}

function pageSuivante() {
  if (pageActuelle < pagesTotal) {
    pageActuelle++;
    window.pageActuelle = pageActuelle; // Sync global
    updateInfoPage();
    logConsole("info", `📄 Navigation vers la page ${pageActuelle}`);
  } else {
    logConsole("warn", "⚠️ Déjà à la dernière page");
  }
}

function allerAPage(numPage) {
  if (numPage >= 1 && numPage <= pagesTotal) {
    pageActuelle = numPage;
    window.pageActuelle = pageActuelle; // Sync global
    updateInfoPage();
    logConsole("info", `📄 Saut vers la page ${pageActuelle}`);
  }
}

// Fonction centrale pour les boutons de pagination
function changerPage(direction) {
  if (direction === -1) {
    pagePrecedente();
  } else if (direction === 1) {
    pageSuivante();
  }
  // Rafraîchir l'inventaire après changement
  if (
    typeof CogsManager !== "undefined" &&
    typeof CogsManager.afficherInventaireCogs === "function"
  ) {
    CogsManager.afficherInventaireCogs();
  }
}

// === GESTION DES ÉTAPES D'OPTIMISATION ===
function afficherEtape() {
  const span = document.getElementById("etape-infos");
  if (!span) return;
  if (etapes.length === 0) {
    span.textContent = "Étape 0 / 0 — En attente d'optimisation...";
  } else {
    span.textContent = `Étape ${etapeActuelle} / ${etapes.length} — ${
      etapes[etapeActuelle - 1]
    }`;
  }
}

function etapePrecedente() {
  if (etapes.length > 0 && etapeActuelle > 1) {
    etapeActuelle--;
    afficherEtape();
    logConsole("info", `⏮️ Étape précédente : ${etapeActuelle}`);
  } else {
    logConsole("warn", "⚠️ Aucune étape précédente disponible");
  }
}

function etapeSuivante() {
  if (etapes.length > 0 && etapeActuelle < etapes.length) {
    etapeActuelle++;
    afficherEtape();
    logConsole("info", `⏭️ Étape suivante : ${etapeActuelle}`);
  } else {
    logConsole("warn", "⚠️ Aucune étape suivante disponible");
  }
}

function startOptimisationEtapes() {
  etapes = [
    "🔍 Analyse du plateau...",
    "🧮 Calcul des positions optimales...",
    "✅ Application des modifications",
  ];
  etapeActuelle = 1;
  afficherEtape();

  const etapesContenu = document.getElementById("etapes-contenu");
  if (etapesContenu) {
    etapesContenu.innerHTML = etapes
      .map(
        (e, i) =>
          `<div style="color: #00adb5; padding: 8px 0;">⏳ Étape ${
            i + 1
          } : ${e}</div>`
      )
      .join("");
  }

  logConsole("success", "🚀 Optimisation démarrée");
}

function resetOptimisationEtapes() {
  etapes = [];
  etapeActuelle = 0;
  afficherEtape();
  const etapesContenu = document.getElementById("etapes-contenu");
  if (etapesContenu) {
    etapesContenu.innerHTML = "<p>⏳ En attente d'optimisation...</p>";
  }
  logConsole("info", "🔄 Étapes d'optimisation réinitialisées");
}

// === GESTION DES MODALS ===
function ouvrirModalDonnees() {
  const modal = document.getElementById("modal-donnees");
  if (modal) {
    modal.classList.add("actif");
    logConsole("info", "📂 Modal de chargement des données ouvert");
  }
}

function fermerModalDonnees() {
  const modal = document.getElementById("modal-donnees");
  if (modal) {
    modal.classList.remove("actif");
    logConsole("info", "❌ Modal de chargement des données fermé");
  }
}

function ouvrirModalJSON() {
  const modal = document.getElementById("modal-json");
  if (modal) {
    modal.classList.add("actif");
    logConsole("info", "📋 Modal JSON ouvert");
  }
}

function fermerModalJSON() {
  const modal = document.getElementById("modal-json");
  if (modal) {
    modal.classList.remove("actif");
    logConsole("info", "❌ Modal JSON fermé");
  }
}

function afficherAPropos() {
  const modal = document.getElementById("modal-apropos");
  if (modal) {
    modal.classList.add("actif");
    logConsole("info", "ℹ️ Modal À propos ouvert");
  }
}

function fermerAPropos() {
  const modal = document.getElementById("modal-apropos");
  if (modal) {
    modal.classList.remove("actif");
    logConsole("info", "❌ Modal À propos fermé");
  }
}

function afficherLogsConsole() {
  const consoleDiv = document.getElementById("console-logs");
  if (!consoleDiv) return;

  if (consoleLogs.length === 0) {
    consoleDiv.innerHTML =
      '<p style="color: #a8b2d1; text-align: center; padding: 20px;">📭 Aucun log disponible</p>';
  } else {
    consoleDiv.innerHTML = consoleLogs
      .map(
        (log) =>
          `<div class="console-log-ligne">
        <span class="console-log-time">${log.time}</span>
        <span class="console-log-type ${
          log.type
        }">[${log.type.toUpperCase()}]</span>
        <span class="console-log-message">${log.message}</span>
      </div>`
      )
      .join("");
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
  }
  const modal = document.getElementById("modal-console");
  if (modal) {
    modal.classList.add("actif");
  }
}

function copierLogs() {
  const logs = consoleLogs
    .map((log) => `[${log.time}] [${log.type.toUpperCase()}] ${log.message}`)
    .join("\n");

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(logs)
      .then(() => {
        logConsole("success", "📋 Logs copiés dans le presse-papier");
        afficherLogsConsole();
      })
      .catch(() => {
        logConsole("error", "❌ Erreur lors de la copie des logs");
      });
  } else {
    logConsole("error", "❌ API clipboard non supportée");
  }
}

function rafraichirConsole() {
  logConsole("info", "🔄 Console rafraîchie");
  afficherLogsConsole();
}

function effacerLogsConsole() {
  consoleLogs = [];
  logConsole("info", "🧹 Console effacée");
  afficherLogsConsole();
}

function fermerModalConsole() {
  const modal = document.getElementById("modal-console");
  if (modal) {
    modal.classList.remove("actif");
    logConsole("info", "❌ Console fermée");
  }
}

// === GESTION DES MODALS AU CLIC EXTÉRIEUR ===
document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("modal") &&
    event.target.classList.contains("actif")
  ) {
    event.target.classList.remove("actif");
    logConsole("info", "❌ Modal fermé (clic extérieur)");
  }
});

// === GESTION DES TOUCHES CLAVIER ===
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modalsActifs = document.querySelectorAll(".modal.actif");
    modalsActifs.forEach((modal) => {
      modal.classList.remove("actif");
      logConsole("info", "❌ Modal fermé (touche Échap)");
    });
  }

  if (event.key === "ArrowLeft") {
    changerPage(-1);
  } else if (event.key === "ArrowRight") {
    changerPage(1);
  }
});

// === GESTION DU THÈME SOMBRE/CLAIR ===
function toggleTheme() {
  const body = document.body;

  if (themeActuel === "theme-sombre") {
    body.classList.remove("theme-sombre");
    body.classList.add("theme-clair");
    themeActuel = "theme-clair";
    localStorage.setItem("theme", "theme-clair");
    logConsole("success", "☀️ Thème clair activé");
  } else {
    body.classList.remove("theme-clair");
    body.classList.add("theme-sombre");
    themeActuel = "theme-sombre";
    localStorage.setItem("theme", "theme-sombre");
    logConsole("success", "🌙 Thème sombre activé");
  }

  actualiseIconeTheme();
}

function actualiseIconeTheme() {
  const icone = document.getElementById("theme-icon");
  if (icone) {
    icone.textContent = themeActuel === "theme-sombre" ? "☀️" : "🌙";
  }
}

// === FONCTIONS UTILITAIRES ===
function popupIndisponible() {
  alert("Cette fonctionnalité sera disponible dans une prochaine version !");
  logConsole("info", "ℹ️ Fonctionnalité non disponible");
}

function optimiser() {
  logConsole("warn", "⚠️ Fonction optimiser à implémenter");
  startOptimisationEtapes();
}

function reinitialiser() {
  logConsole("info", "🔄 Réinitialisation...");
  resetOptimisationEtapes();
}

function sauvegarder() {
  logConsole("warn", "⚠️ Fonction sauvegarder à implémenter");
}

function exporterDonnees() {
  logConsole("warn", "⚠️ Fonction exporterDonnees à implémenter");
}

function supprimerSauvegarde() {
  logConsole("warn", "⚠️ Fonction supprimerSauvegarde à implémenter");
}

function chargerJSON() {
  logConsole("warn", "⚠️ Fonction chargerJSON à implémenter");
}

function copierJSON() {
  logConsole("warn", "⚠️ Fonction copierJSON à implémenter");
}

function effacerJSON() {
  const zoneJSON = document.getElementById("zone-json");
  if (zoneJSON) {
    zoneJSON.value = "";
    logConsole("info", "🧹 Zone JSON effacée");
  }
}

function effacerDonnees() {
  const zoneDonnees = document.getElementById("zone-donnees");
  if (zoneDonnees) {
    zoneDonnees.value = "";
    logConsole("info", "🧹 Zone de données effacée");
  }
}

function collerDonnees() {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .readText()
      .then(function (text) {
        document.getElementById("zone-donnees").value = text;
        logConsole("success", "✅ Données collées depuis le presse-papier");
      })
      .catch(function (e) {
        logConsole("error", "❌ Impossible de lire le presse-papier");
        alert(
          "Impossible de lire le presse-papier. Autorisez l'accès ou utilisez Ctrl+V."
        );
      });
  } else {
    alert(
      "Votre navigateur ne permet pas le collage automatique.\nUtilisez Ctrl+V."
    );
    logConsole("warn", "⚠️ Collage automatique non supporté");
  }
}

// === INITIALISATION AU CHARGEMENT ===
window.onload = function () {
  logConsole("info", "🚀 Initialisation de Jarvis v0.1.5...");

  // Récupérer le thème sauvegardé
  const themeSauvegarde = localStorage.getItem("theme") || "theme-sombre";
  document.body.classList.add(themeSauvegarde);
  themeActuel = themeSauvegarde;
  actualiseIconeTheme();

  // Initialisation des composants
  creerGrilles();
  resetOptimisationEtapes();
  updateInfoPage();

  // NE PAS charger les données de test au démarrage
  // if (typeof CogsManager !== "undefined" && typeof CogsManager.chargerDonneesTest === "function") {
  //   CogsManager.chargerDonneesTest();
  // }

  logConsole("success", "✅ Jarvis initialisé avec succès !");
  logConsole("info", "ℹ️ Bienvenue sur Jarvis - Optimisateur de Construction");

  // Ouvrir automatiquement le modal de chargement des données
  setTimeout(ouvrirModalDonnees, 500);
};
