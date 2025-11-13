/* JARVIS - Gestion de l'interface v0.1.0 | Auteur: Latury */

// === VARIABLES GLOBALES ===
let pageActuelle = 1; // Page actuelle de l'inventaire
const PAGES_TOTALES = 18; // Nombre total de pages d'inventaire
const GRILLE_INVENTAIRE_COLONNES = 3;
const GRILLE_INVENTAIRE_LIGNES = 5;
const GRILLE_PLATEAU_COLONNES = 12;
const GRILLE_PLATEAU_LIGNES = 8;

// === INITIALISATION AU CHARGEMENT DE LA PAGE ===
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Jarvis - Optimisateur de Construction v0.1.0");
  console.log("✅ Interface initialisée");

  // Initialiser tous les composants
  initialiserOnglets();
  initialiserBoutonTheme();
  initialiserGrilleInventaire();
  initialiserGrillePlateau();
  initialiserPaginationInventaire();
  initialiserBoutons();

  console.log("✅ Tous les composants sont prêts");
});

// === GESTION DES ONGLETS ===
function initialiserOnglets() {
  // Récupérer tous les boutons d'onglets
  const boutonsOnglets = document.querySelectorAll(".onglet");

  // Ajouter un écouteur d'événement sur chaque onglet
  boutonsOnglets.forEach((bouton) => {
    bouton.addEventListener("click", function () {
      // Récupérer le nom de l'onglet à afficher
      const nomOnglet = this.getAttribute("data-onglet");

      // Changer d'onglet
      changerOnglet(nomOnglet);
    });
  });

  console.log("✅ Système d'onglets initialisé");
}

function changerOnglet(nomOnglet) {
  // Retirer la classe "actif" de tous les onglets
  const tousLesOnglets = document.querySelectorAll(".onglet");
  tousLesOnglets.forEach((onglet) => {
    onglet.classList.remove("actif");
  });

  // Ajouter la classe "actif" à l'onglet cliqué
  const ongletActif = document.querySelector(`[data-onglet="${nomOnglet}"]`);
  if (ongletActif) {
    ongletActif.classList.add("actif");
  }

  // Masquer toutes les pages
  const toutesLesPages = document.querySelectorAll(".page");
  toutesLesPages.forEach((page) => {
    page.classList.remove("active");
  });

  // Afficher la page correspondante
  const pageAfficher = document.getElementById(`page-${nomOnglet}`);
  if (pageAfficher) {
    pageAfficher.classList.add("active");
  }

  console.log(`📄 Onglet changé : ${nomOnglet}`);
}

// === GESTION DU THÈME CLAIR/SOMBRE ===
function initialiserBoutonTheme() {
  const boutonTheme = document.getElementById("bouton-theme");

  if (boutonTheme) {
    boutonTheme.addEventListener("click", function () {
      changerTheme();
    });
  }

  // Charger le thème sauvegardé (si disponible)
  const themeSauvegarde = localStorage.getItem("theme");
  if (themeSauvegarde) {
    document.body.className = themeSauvegarde;
  }

  console.log("✅ Système de thème initialisé");
}

function changerTheme() {
  const body = document.body;

  // Basculer entre les thèmes
  if (body.classList.contains("theme-sombre")) {
    body.classList.remove("theme-sombre");
    body.classList.add("theme-clair");
    localStorage.setItem("theme", "theme-clair");
    console.log("☀️ Thème clair activé");
  } else {
    body.classList.remove("theme-clair");
    body.classList.add("theme-sombre");
    localStorage.setItem("theme", "theme-sombre");
    console.log("🌙 Thème sombre activé");
  }
}

// === GÉNÉRATION DE LA GRILLE D'INVENTAIRE (3x5) ===
function initialiserGrilleInventaire() {
  const conteneurGrille = document.getElementById("grille-inventaire");

  if (!conteneurGrille) {
    console.warn("⚠️ Grille inventaire introuvable");
    return;
  }

  // Vider le conteneur
  conteneurGrille.innerHTML = "";

  // Créer les 15 cases (3 colonnes x 5 lignes)
  const nombreCases = GRILLE_INVENTAIRE_COLONNES * GRILLE_INVENTAIRE_LIGNES;

  for (let i = 0; i < nombreCases; i++) {
    const caseDiv = document.createElement("div");
    caseDiv.className = "case-inventaire";
    caseDiv.setAttribute("data-id", i);

    // Ajouter un événement au clic (pour plus tard)
    caseDiv.addEventListener("click", function () {
      console.log(`📦 Case inventaire cliquée : ${i}`);
    });

    conteneurGrille.appendChild(caseDiv);
  }

  console.log(`✅ Grille inventaire générée (${nombreCases} cases)`);
}

// === GÉNÉRATION DE LA GRILLE DU PLATEAU (12x8) ===
function initialiserGrillePlateau() {
  const conteneurGrille = document.getElementById("grille-plateau");

  if (!conteneurGrille) {
    console.warn("⚠️ Grille plateau introuvable");
    return;
  }

  // Vider le conteneur
  conteneurGrille.innerHTML = "";

  // Créer les 96 cases (12 colonnes x 8 lignes)
  const nombreCases = GRILLE_PLATEAU_COLONNES * GRILLE_PLATEAU_LIGNES;

  for (let ligne = 0; ligne < GRILLE_PLATEAU_LIGNES; ligne++) {
    for (let colonne = 0; colonne < GRILLE_PLATEAU_COLONNES; colonne++) {
      const caseDiv = document.createElement("div");
      caseDiv.className = "case-plateau";
      caseDiv.setAttribute("data-ligne", ligne);
      caseDiv.setAttribute("data-colonne", colonne);

      // Ajouter un événement au clic (pour plus tard)
      caseDiv.addEventListener("click", function () {
        console.log(`🔧 Case plateau cliquée : [${ligne}, ${colonne}]`);
      });

      conteneurGrille.appendChild(caseDiv);
    }
  }

  console.log(`✅ Grille plateau générée (${nombreCases} cases)`);
}

// === GESTION DE LA PAGINATION DE L'INVENTAIRE ===
function initialiserPaginationInventaire() {
  const boutonPrecedent = document.getElementById("inventaire-precedent");
  const boutonSuivant = document.getElementById("inventaire-suivant");
  const affichagePageActuelle = document.getElementById("page-actuelle");
  const affichagePagesTotales = document.getElementById("pages-totales");

  // Afficher les valeurs initiales
  if (affichagePageActuelle) {
    affichagePageActuelle.textContent = pageActuelle;
  }

  if (affichagePagesTotales) {
    affichagePagesTotales.textContent = PAGES_TOTALES;
  }

  // Bouton page précédente
  if (boutonPrecedent) {
    boutonPrecedent.addEventListener("click", function () {
      if (pageActuelle > 1) {
        pageActuelle--;
        mettreAJourAffichagePage();
        console.log(`⬅️ Page précédente : ${pageActuelle}`);
      }
    });
  }

  // Bouton page suivante
  if (boutonSuivant) {
    boutonSuivant.addEventListener("click", function () {
      if (pageActuelle < PAGES_TOTALES) {
        pageActuelle++;
        mettreAJourAffichagePage();
        console.log(`➡️ Page suivante : ${pageActuelle}`);
      }
    });
  }

  // Mettre à jour l'état des boutons
  mettreAJourEtatBoutonsPagination();

  console.log("✅ Système de pagination initialisé");
}

function mettreAJourAffichagePage() {
  const affichagePageActuelle = document.getElementById("page-actuelle");

  if (affichagePageActuelle) {
    affichagePageActuelle.textContent = pageActuelle;
  }

  // Mettre à jour l'état des boutons (activer/désactiver)
  mettreAJourEtatBoutonsPagination();
}

function mettreAJourEtatBoutonsPagination() {
  const boutonPrecedent = document.getElementById("inventaire-precedent");
  const boutonSuivant = document.getElementById("inventaire-suivant");

  // Désactiver le bouton précédent si on est à la page 1
  if (boutonPrecedent) {
    boutonPrecedent.disabled = pageActuelle === 1;
  }

  // Désactiver le bouton suivant si on est à la dernière page
  if (boutonSuivant) {
    boutonSuivant.disabled = pageActuelle === PAGES_TOTALES;
  }
}

// === INITIALISATION DES BOUTONS D'ACTION ===
function initialiserBoutons() {
  // Bouton "Optimiser le placement"
  const boutonOptimiser = document.getElementById("bouton-optimiser");
  if (boutonOptimiser) {
    boutonOptimiser.addEventListener("click", function () {
      console.log("🚀 Optimisation lancée");
      ajouterLog("INFO", "Optimisation du placement lancée...");
      // La fonction d'optimisation sera dans optimiseur.js
    });
  }

  // Bouton "Réinitialiser"
  const boutonReinitialiser = document.getElementById("bouton-reinitialiser");
  if (boutonReinitialiser) {
    boutonReinitialiser.addEventListener("click", function () {
      console.log("🔄 Réinitialisation du plateau");
      ajouterLog("INFO", "Plateau réinitialisé");
      reinitialiserPlateau();
    });
  }

  // Bouton "Exporter"
  const boutonExporter = document.getElementById("bouton-exporter");
  if (boutonExporter) {
    boutonExporter.addEventListener("click", function () {
      console.log("💾 Export des données");
      ajouterLog("INFO", "Export des données demandé");
    });
  }

  // Bouton "Charger les données"
  const boutonChargerDonnees = document.getElementById(
    "bouton-charger-donnees"
  );
  if (boutonChargerDonnees) {
    boutonChargerDonnees.addEventListener("click", function () {
      console.log("⬆️ Chargement des données");
      // La fonction de chargement sera dans chargeur.js
    });
  }

  // Bouton "Effacer" (zone de texte)
  const boutonEffacerDonnees = document.getElementById(
    "bouton-effacer-donnees"
  );
  if (boutonEffacerDonnees) {
    boutonEffacerDonnees.addEventListener("click", function () {
      const zoneDonnees = document.getElementById("zone-donnees");
      if (zoneDonnees) {
        zoneDonnees.value = "";
        console.log("🗑️ Zone de données effacée");
      }
    });
  }

  // Bouton "Effacer les logs"
  const boutonEffacerLogs = document.getElementById("bouton-effacer-logs");
  if (boutonEffacerLogs) {
    boutonEffacerLogs.addEventListener("click", function () {
      const zoneLogs = document.getElementById("zone-logs");
      if (zoneLogs) {
        zoneLogs.innerHTML = "";
        console.log("🗑️ Logs effacés");
      }
    });
  }

  // Bouton "Exporter les logs"
  const boutonExporterLogs = document.getElementById("bouton-exporter-logs");
  if (boutonExporterLogs) {
    boutonExporterLogs.addEventListener("click", function () {
      console.log("💾 Export des logs");
      exporterLogs();
    });
  }

  console.log("✅ Boutons d'action initialisés");
}

// === FONCTIONS UTILITAIRES ===

// Réinitialiser le plateau
function reinitialiserPlateau() {
  const cases = document.querySelectorAll(".case-plateau");
  cases.forEach((caseDiv) => {
    caseDiv.innerHTML = "";
    caseDiv.classList.remove("occupe");
  });
}

// Ajouter un log dans la zone de logs
function ajouterLog(type, message) {
  const zoneLogs = document.getElementById("zone-logs");

  if (!zoneLogs) {
    return;
  }

  // Créer l'entrée de log
  const logEntree = document.createElement("p");
  logEntree.className = "log-entree";

  // Horodatage
  const maintenant = new Date();
  const heures = String(maintenant.getHours()).padStart(2, "0");
  const minutes = String(maintenant.getMinutes()).padStart(2, "0");
  const secondes = String(maintenant.getSeconds()).padStart(2, "0");
  const horodatage = `[${heures}:${minutes}:${secondes}]`;

  // Type de log
  const typeSpan = document.createElement("span");
  typeSpan.className = `type ${type.toLowerCase()}`;
  typeSpan.textContent = type;

  // Message
  const messageTexte = document.createTextNode(` ${message}`);

  // Assembler
  const timestampSpan = document.createElement("span");
  timestampSpan.className = "timestamp";
  timestampSpan.textContent = horodatage;

  logEntree.appendChild(timestampSpan);
  logEntree.appendChild(document.createTextNode(" "));
  logEntree.appendChild(typeSpan);
  logEntree.appendChild(messageTexte);

  // Ajouter à la zone de logs
  zoneLogs.appendChild(logEntree);

  // Scroller automatiquement vers le bas
  zoneLogs.scrollTop = zoneLogs.scrollHeight;
}

// Exporter les logs
function exporterLogs() {
  const zoneLogs = document.getElementById("zone-logs");

  if (!zoneLogs) {
    return;
  }

  // Récupérer le texte des logs
  const texteLogs = zoneLogs.innerText;

  // Créer un blob (fichier en mémoire)
  const blob = new Blob([texteLogs], { type: "text/plain" });

  // Créer un lien de téléchargement
  const lien = document.createElement("a");
  lien.href = URL.createObjectURL(blob);
  lien.download = `jarvis-logs-${Date.now()}.txt`;

  // Déclencher le téléchargement
  lien.click();

  console.log("💾 Logs exportés");
  ajouterLog("INFO", "Logs exportés avec succès");
}

// Exposer certaines fonctions globalement pour les autres fichiers JS
window.Jarvis = {
  ajouterLog: ajouterLog,
  changerOnglet: changerOnglet,
  pageActuelle: pageActuelle,
};
