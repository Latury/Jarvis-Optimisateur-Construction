/* ========================================
   JARVIS - Gestionnaire de Cogs
   Version 0.1.6 | Auteur: Latury
   Date: 2025-11-20
   ======================================== */

// === CONFIGURATION ===
const CONFIG = {
  COGS_PER_PAGE: 15,
  PLATEAU_SIZE: 96,
  MAX_COGS: 1000,
  DEBUG_MODE: false,
};

// === VARIABLES GLOBALES ===
let donneesIdleon = null;
let inventaireCogs = [];
let plateauCogs = [];

// === TABLE DE CORRESPONDANCE IDLEON -> BASE DE DONNÉES ===
const IDLEON_TO_DATABASE = {
  // Cogs de base
  Cog3A00: "Cog_Nooby",

  // Cogs B (Building)
  Cog3B0: "CogB_Nooby",
  Cog3B1: "CogB_Decent",

  // Cogs directionnels
  Cog3co: "Column_Superb",
  Cog3do: "Down_Decent",
  Cog3ri: "Right_Decent",
  Cog3ro: "Row_Superb",

  // Cogs spéciaux
  CogY: "Yang_Cog",
  CogZA00: "Corner_Ultimate",
  CogZA01: "Deckered8_Ultimate",
  CogZA02: "Corner_Ultimate",
  CogZA03: "Deckered8_Ultimate",
};

// === TABLE DE CORRESPONDANCE PLATEAU (type 'h') -> BASE DE DONNÉES ===
const PLATEAU_TYPE_TO_DATABASE = {
  everything: "Yang_Cog",
  around: "Adjacent_Superb",
  row: "Row_Superb",
  column: "Column_Superb",
  down: "Down_Decent",
  right: "Right_Decent",
  left: "Left_Decent",
  up: "Up_Decent",
};

// === FONCTION DE VALIDATION ===
function validerDonneesIdleon(donnees) {
  if (!donnees || typeof donnees !== "object") {
    throw new Error("Les données doivent être un objet JSON valide");
  }

  if (!donnees.CogO) {
    throw new Error("Propriété 'CogO' manquante dans les données");
  }

  if (typeof donnees.CogO !== "string") {
    throw new Error("CogO doit être une chaîne JSON");
  }

  return true;
}

// === FONCTION HELPER : OBTENIR ID COG SÉCURISÉ ===
function getCogsIdSafe(idIdleon) {
  if (IDLEON_TO_DATABASE[idIdleon]) {
    return IDLEON_TO_DATABASE[idIdleon];
  }

  if (CONFIG.DEBUG_MODE) {
    console.warn(`⚠️ Cog non mappé: ${idIdleon}`);
  }

  return null;
}

// === FONCTION HELPER : VÉRIFIER COGS_DATABASE ===
function verifierCogsDatabase() {
  if (typeof COGS_DATABASE === "undefined" || !COGS_DATABASE) {
    logConsole("error", "❌ COGS_DATABASE n'est pas chargé !");
    return false;
  }

  const nbCogs = Object.keys(COGS_DATABASE).length;
  if (nbCogs === 0) {
    logConsole("error", "❌ COGS_DATABASE est vide !");
    return false;
  }

  logConsole("info", `📚 Base de données : ${nbCogs} cogs disponibles`);
  return true;
}

// === PARSER PRINCIPAL ===
function chargerDonneesIdleon(jsonText) {
  try {
    // Vérifier que COGS_DATABASE est chargé
    if (!verifierCogsDatabase()) {
      return false;
    }

    // Validation de la chaîne JSON
    if (!jsonText || typeof jsonText !== "string") {
      logConsole("error", "❌ Données invalides : doit être une chaîne JSON");
      return false;
    }

    if (jsonText.length < 10) {
      logConsole("error", "❌ Données trop courtes pour être valides");
      return false;
    }

    // Parsing du JSON principal
    const donnees = JSON.parse(jsonText);

    // Validation de la structure
    validerDonneesIdleon(donnees);

    let cogOData = null;
    let cogMData = null;
    let success = false;

    // === PARSER INVENTAIRE (CogO) ===
    if (donnees.CogO && typeof donnees.CogO === "string") {
      try {
        cogOData = JSON.parse(donnees.CogO);

        // Vérifier que c'est bien un tableau
        if (!Array.isArray(cogOData)) {
          logConsole("error", "❌ CogO n'est pas un tableau valide");
          cogOData = null;
        } else {
          logConsole("info", `📦 CogO parsé : ${cogOData.length} entrées`);
        }
      } catch (e) {
        logConsole("error", `❌ Erreur parsing CogO : ${e.message}`);
        cogOData = null;
      }
    } else {
      logConsole("warn", "⚠️ CogO absent ou format incorrect");
    }

    // === PARSER PLATEAU (CogM) ===
    if (donnees.CogM) {
      if (typeof donnees.CogM === "string") {
        try {
          cogMData = JSON.parse(donnees.CogM);
          logConsole("info", "🏗️ CogM parsé depuis chaîne JSON");
        } catch (e) {
          logConsole("error", `❌ Erreur parsing CogM : ${e.message}`);
          cogMData = null;
        }
      } else if (typeof donnees.CogM === "object") {
        cogMData = donnees.CogM;
        logConsole("info", "🏗️ CogM est déjà un objet");
      }
    }

    // === TRAITER INVENTAIRE ===
    if (cogOData && Array.isArray(cogOData)) {
      if (parserInventaire(cogOData)) {
        success = true;
      }
    } else {
      logConsole("warn", "⚠️ Aucune donnée d'inventaire à traiter");
    }

    // === TRAITER PLATEAU ===
    if (cogMData && typeof cogMData === "object") {
      parserPlateau(cogMData);
    } else {
      logConsole("info", "ℹ️ Aucune donnée de plateau à traiter");
      // Afficher un plateau vide
      afficherPlateauCogs();
    }

    return success;
  } catch (error) {
    logConsole("error", `❌ Erreur critique : ${error.message}`);

    if (CONFIG.DEBUG_MODE) {
      console.error("Stack trace:", error.stack);
    }

    return false;
  }
}

// === PARSER INVENTAIRE (CogO) ===
function parserInventaire(cogOData) {
  try {
    logConsole(
      "info",
      `📦 Analyse de ${cogOData.length} entrées d'inventaire...`
    );

    // Vérifier le nombre maximum
    if (cogOData.length > CONFIG.MAX_COGS) {
      logConsole(
        "warn",
        `⚠️ Nombre de cogs excessif (${cogOData.length}), limitation à ${CONFIG.MAX_COGS}`
      );
      cogOData = cogOData.slice(0, CONFIG.MAX_COGS);
    }

    const cogsTrouves = [];
    const cogsNonReconnus = new Set();
    const cogsIgnores = ["Blank", "Player_"];

    cogOData.forEach((idIdleon, index) => {
      // Ignorer les entrées vides et les joueurs
      if (!idIdleon || idIdleon === "Blank" || idIdleon.startsWith("Player_")) {
        return;
      }

      // Chercher la correspondance
      const idDatabase = getCogsIdSafe(idIdleon);

      if (idDatabase && COGS_DATABASE[idDatabase]) {
        // Cog reconnu
        cogsTrouves.push({
          id: idDatabase,
          idIdleon: idIdleon,
          indexOriginal: index,
          ...COGS_DATABASE[idDatabase],
        });
      } else {
        // Cog non reconnu
        cogsNonReconnus.add(idIdleon);
      }
    });

    // Mettre à jour l'inventaire global
    inventaireCogs = cogsTrouves;

    // Calculer le nombre de pages
    const nouvellesPagesTotal =
      Math.ceil(inventaireCogs.length / CONFIG.COGS_PER_PAGE) || 1;
    window.pagesTotal = nouvellesPagesTotal;
    window.pageActuelle = 1;

    // Afficher l'inventaire
    afficherInventaireCogs();

    // Mettre à jour l'affichage des pages
    if (typeof updateInfoPage === "function") {
      updateInfoPage();
    }

    // Logs de résultat
    logConsole(
      "success",
      `✅ ${cogsTrouves.length} Cogs chargés (${nouvellesPagesTotal} page${
        nouvellesPagesTotal > 1 ? "s" : ""
      })`
    );

    if (cogsNonReconnus.size > 0) {
      const liste = Array.from(cogsNonReconnus).slice(0, 5);
      logConsole(
        "warn",
        `⚠️ ${cogsNonReconnus.size} ID${
          cogsNonReconnus.size > 1 ? "s" : ""
        } non reconnu${cogsNonReconnus.size > 1 ? "s" : ""}: ${liste.join(
          ", "
        )}${cogsNonReconnus.size > 5 ? "..." : ""}`
      );

      if (CONFIG.DEBUG_MODE) {
        console.log("IDs non reconnus complets:", Array.from(cogsNonReconnus));
      }
    }

    return cogsTrouves.length > 0;
  } catch (error) {
    logConsole(
      "error",
      `❌ Erreur lors du parsing de l'inventaire : ${error.message}`
    );
    return false;
  }
}

// === PARSER PLATEAU (CogM) ===
function parserPlateau(cogMData) {
  try {
    const cogsPlaces = [];
    const typesNonReconnus = new Set();

    Object.entries(cogMData).forEach(([position, cogData]) => {
      // Vérifier si c'est un cog (possède la propriété 'h')
      if (cogData && cogData.h) {
        const typeCog = cogData.h;
        const idDatabase = PLATEAU_TYPE_TO_DATABASE[typeCog];

        if (idDatabase && COGS_DATABASE[idDatabase]) {
          cogsPlaces.push({
            position: parseInt(position),
            type: typeCog,
            id: idDatabase,
            stats: cogData,
            ...COGS_DATABASE[idDatabase],
          });
        } else {
          typesNonReconnus.add(typeCog);
        }
      }
    });

    // Trier par position
    cogsPlaces.sort((a, b) => a.position - b.position);

    // Mettre à jour le plateau global
    plateauCogs = cogsPlaces;

    // Afficher le plateau
    afficherPlateauCogs();

    // Logs de résultat
    if (cogsPlaces.length > 0) {
      logConsole(
        "success",
        `✅ ${cogsPlaces.length} Cog${cogsPlaces.length > 1 ? "s" : ""} trouvé${
          cogsPlaces.length > 1 ? "s" : ""
        } sur le plateau`
      );
    } else {
      logConsole("info", "ℹ️ Plateau vide (aucun Cog placé)");
    }

    if (typesNonReconnus.size > 0) {
      logConsole(
        "warn",
        `⚠️ Types plateau non reconnus : ${Array.from(typesNonReconnus).join(
          ", "
        )}`
      );
    }
  } catch (error) {
    logConsole(
      "error",
      `❌ Erreur lors du parsing du plateau : ${error.message}`
    );
  }
}

// === AFFICHER INVENTAIRE ===
function afficherInventaireCogs() {
  const inventaireDiv = document.getElementById("inventaire");
  if (!inventaireDiv) {
    logConsole("error", "❌ Élément #inventaire introuvable");
    return;
  }

  const pageActuelle = window.pageActuelle || 1;
  const indexDebut = (pageActuelle - 1) * CONFIG.COGS_PER_PAGE;
  const indexFin = indexDebut + CONFIG.COGS_PER_PAGE;
  const cogsPage = inventaireCogs.slice(indexDebut, indexFin);

  inventaireDiv.innerHTML = "";

  for (let i = 0; i < CONFIG.COGS_PER_PAGE; i++) {
    const caseDiv = document.createElement("div");
    caseDiv.className = "case";
    caseDiv.setAttribute("data-index", i);

    if (i < cogsPage.length) {
      const cog = cogsPage[i];
      const img = document.createElement("img");
      img.src = cog.icone;
      img.alt = cog.nom;
      img.loading = "lazy"; // Lazy loading pour performance
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";

      // Gestion d'erreur de chargement d'image
      img.onerror = function () {
        this.src = "ressources/icones/engrenages/placeholder.png"; // Image de fallback
        logConsole("warn", `⚠️ Image manquante : ${cog.icone}`);
      };

      caseDiv.title = `${cog.nom}\n${cog.description}\n\nID Idleon: ${cog.idIdleon}\nRareté: ${cog.rareté}`;

      caseDiv.addEventListener("click", () => {
        logConsole("info", `📦 Cog sélectionné : ${cog.nom} (${cog.idIdleon})`);
      });

      caseDiv.appendChild(img);
    }

    inventaireDiv.appendChild(caseDiv);
  }

  logConsole(
    "info",
    `📦 Inventaire : ${cogsPage.length} cog${
      cogsPage.length > 1 ? "s" : ""
    } affiché${cogsPage.length > 1 ? "s" : ""} (Page ${pageActuelle}/${
      window.pagesTotal || 1
    })`
  );
}

// === AFFICHER PLATEAU ===
function afficherPlateauCogs() {
  const plateauDiv = document.getElementById("plateau");
  if (!plateauDiv) {
    logConsole("error", "❌ Élément #plateau introuvable");
    return;
  }

  plateauDiv.innerHTML = "";

  for (let i = 0; i < CONFIG.PLATEAU_SIZE; i++) {
    const caseDiv = document.createElement("div");
    caseDiv.className = "case";
    caseDiv.setAttribute("data-index", i);

    // Chercher si un cog est placé à cette position
    const cogPlace = plateauCogs.find((c) => c.position === i);

    if (cogPlace) {
      const img = document.createElement("img");
      img.src = cogPlace.icone;
      img.alt = cogPlace.nom;
      img.loading = "lazy";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";

      // Gestion d'erreur de chargement d'image
      img.onerror = function () {
        this.src = "ressources/icones/engrenages/placeholder.png";
      };

      caseDiv.title = `${cogPlace.nom}\nPosition: ${i}\nType: ${cogPlace.type}`;
      caseDiv.style.border = "2px solid #00adb5";
      caseDiv.appendChild(img);
    }

    plateauDiv.appendChild(caseDiv);
  }

  const nbCogs = plateauCogs.length;
  logConsole(
    "info",
    `🏗️ Plateau : ${nbCogs} cog${nbCogs > 1 ? "s" : ""} placé${
      nbCogs > 1 ? "s" : ""
    }`
  );
}

// === RÉINITIALISER LES DONNÉES ===
function reinitialiserDonnees() {
  inventaireCogs = [];
  plateauCogs = [];
  window.pageActuelle = 1;
  window.pagesTotal = 1;

  afficherInventaireCogs();
  afficherPlateauCogs();

  if (typeof updateInfoPage === "function") {
    updateInfoPage();
  }

  logConsole("info", "🔄 Données réinitialisées");
}

// === OBTENIR STATISTIQUES ===
function obtenirStatistiques() {
  return {
    inventaire: {
      total: inventaireCogs.length,
      pages: Math.ceil(inventaireCogs.length / CONFIG.COGS_PER_PAGE),
    },
    plateau: {
      places: plateauCogs.length,
      vides: CONFIG.PLATEAU_SIZE - plateauCogs.length,
    },
  };
}

// === EXPOSITION GLOBALE ===
window.CogsManager = {
  chargerDonneesIdleon,
  afficherInventaireCogs,
  afficherPlateauCogs,
  reinitialiserDonnees,
  obtenirStatistiques,

  // Accès aux données (lecture seule)
  get inventaire() {
    return [...inventaireCogs];
  },
  get plateau() {
    return [...plateauCogs];
  },
};

// === INITIALISATION AU CHARGEMENT ===
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    verifierCogsDatabase();
  });
}
