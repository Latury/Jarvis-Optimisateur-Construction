/* ==========================================
   JARVIS - OPTIMISATEUR DE CONSTRUCTION
   Fichier: interface.js
   Gestion de l'interface utilisateur
   ========================================== */

// ========================================
// 🔔 BADGE D'ALERTE POUR LES ERREURS
// ========================================

let nombreErreurs = 0;
let logsCaptures = [];

function mettreAJourBadgeErreurs() {
  const badge = document.getElementById("badge-erreurs");
  if (!badge) return;

  if (nombreErreurs > 0) {
    badge.textContent = nombreErreurs;
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
}

const originalLog = console.log;
console.log = function (...args) {
  const message = args.join(" ");

  logsCaptures.push({
    type: "info",
    message: message,
    timestamp: new Date().toLocaleString("fr-FR"),
  });

  if (message.includes("[ERROR]") || message.includes("❌")) {
    nombreErreurs++;
    mettreAJourBadgeErreurs();
  }

  originalLog.apply(console, args);
};

function afficherLogsConsole() {
  const contenuConsole = document.getElementById("contenu-console");
  if (!contenuConsole) return;

  contenuConsole.textContent = "";

  logsCaptures.forEach((log) => {
    const ligne = `[${log.timestamp}] ${log.message}\n`;
    contenuConsole.textContent += ligne;
  });

  contenuConsole.scrollTop = contenuConsole.scrollHeight;
}

// ========================================
// 📦 GRILLE D'INVENTAIRE
// ========================================

function afficherGrilleInventaireVide() {
  const inventaire = document.getElementById("inventaire-grille");
  if (!inventaire) return;

  let html = "";
  const NB_PAGES = 8;
  const LIGNES = 5;
  const COLONNES = 3;

  for (let page = 0; page < NB_PAGES; page++) {
    html += `<div class="inventaire-page" data-page="${page}" style="display:${
      page === 0 ? "block" : "none"
    };">`;

    for (let y = 0; y < LIGNES; y++) {
      html += '<div class="inventaire-row">';
      for (let x = 0; x < COLONNES; x++) {
        html += `<div class="case-inventaire case-vide" data-page="${page}" data-x="${x}" data-y="${y}"></div>`;
      }
      html += "</div>";
    }

    html += "</div>";
  }

  inventaire.innerHTML = html;
  console.log("[Jarvis] ✅ Grille d'inventaire (5×3 sur 8 pages) affichée");
}

// ========================================
// 📄 PAGINATION INVENTAIRE
// ========================================

let pageActuelle = 0;
const NB_PAGES_INVENTAIRE = 8;

function afficherPageInventaire(numeroPage) {
  if (numeroPage < 0 || numeroPage >= NB_PAGES_INVENTAIRE) return;

  pageActuelle = numeroPage;

  const pages = document.querySelectorAll(".inventaire-page");
  pages.forEach((page) => (page.style.display = "none"));

  const pageVisible = document.querySelector(
    `.inventaire-page[data-page="${numeroPage}"]`
  );
  if (pageVisible) {
    pageVisible.style.display = "block";
  }

  const textePagination = document.getElementById("texte-pagination");
  if (textePagination) {
    textePagination.textContent = `Page ${
      numeroPage + 1
    } / ${NB_PAGES_INVENTAIRE}`;
  }
}

// ========================================
// 🏗️ GRILLE DU PLATEAU
// ========================================

function afficherPlateauVide() {
  const plateau = document.getElementById("plateau-grille");
  if (!plateau) return;

  let html = "";
  const LIGNES = 8;
  const COLONNES = 12;

  for (let y = 0; y < LIGNES; y++) {
    html += '<div class="plateau-row">';
    for (let x = 0; x < COLONNES; x++) {
      html += `<div class="case-plateau case-vide" data-x="${x}" data-y="${y}"></div>`;
    }
    html += "</div>";
  }

  plateau.innerHTML = html;
  console.log("[Jarvis] ✅ Plateau de construction (8×12) affiché");
}

// ========================================
// 📋 GESTION INTELLIGENTE DES MENUS DÉROULANTS
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".menu-dropdown");
  let menuActif = null;
  let timeoutFermeture = null;

  menus.forEach((menu) => {
    const bouton = menu.querySelector(".btn-header");
    const contenu = menu.querySelector(".dropdown-contenu");

    if (!bouton || !contenu) return;

    // Quand on entre sur un bouton de menu
    bouton.addEventListener("mouseenter", function () {
      // Annule le timeout de fermeture si on change de menu rapidement
      if (timeoutFermeture) {
        clearTimeout(timeoutFermeture);
        timeoutFermeture = null;
      }

      // Si un autre menu était ouvert, le ferme immédiatement
      if (menuActif && menuActif !== menu) {
        menuActif.classList.remove("menu-ouvert");
      }

      // Ouvre le menu actuel
      menu.classList.add("menu-ouvert");
      menuActif = menu;
    });

    // Quand on entre dans le sous-menu
    contenu.addEventListener("mouseenter", function () {
      if (timeoutFermeture) {
        clearTimeout(timeoutFermeture);
        timeoutFermeture = null;
      }
    });

    // Quand on quitte le menu (bouton + sous-menu)
    menu.addEventListener("mouseleave", function () {
      // Délai de 400ms avant de fermer (confort)
      timeoutFermeture = setTimeout(() => {
        menu.classList.remove("menu-ouvert");
        if (menuActif === menu) {
          menuActif = null;
        }
      }, 400);
    });
  });
});

// ========================================
// 🪟 GESTION DES MODALES
// ========================================

function ouvrirModal(idModal) {
  const modal = document.getElementById(idModal);
  if (modal) {
    modal.classList.add("actif");
    console.log(`[Jarvis] Modal ${idModal} ouverte`);
  } else {
    console.log(`[ERROR] Modal ${idModal} introuvable`);
  }
}

function fermerModal(idModal) {
  const modal = document.getElementById(idModal);
  if (modal) {
    modal.classList.remove("actif");
  }
}

// ========================================
// 📄 CHARGEMENT DES DOCUMENTS MARKDOWN
// ========================================

const MARKDOWN_PATHS = {
  changelog: "changelog.md",
  patchnotes: "patchnotes.md",
  roadmap: "FEUILLE_DE_ROUTE.md",
};

async function chargerMarkdown(fichier, idConteneur) {
  const conteneur = document.getElementById(idConteneur);
  if (!conteneur) return;

  try {
    const response = await fetch(fichier);
    const texte = await response.text();
    conteneur.innerHTML = `<pre>${texte}</pre>`;
    console.log(`[setupDocBtn] Markdown reçu (${texte.length} caractères)`);
  } catch (erreur) {
    conteneur.innerHTML = `<p style="color: #ff6b6b;">❌ Impossible de charger le fichier ${fichier}</p>`;
    console.log(`[ERROR] Chargement Markdown échoué : ${erreur.message}`);
  }
}

// ========================================
// 🎬 INITIALISATION
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Live reload enabled.");
  console.log("[Jarvis] Application initialisée (version 0.2.0)");

  afficherGrilleInventaireVide();
  afficherPlateauVide();

  // ✅ OUVRE LE MODAL CHARGEUR AU DÉMARRAGE
  ouvrirModal("modal-chargeur");

  // Pagination inventaire
  const btnPagePrec = document.getElementById("btn-page-prec");
  const btnPageSuiv = document.getElementById("btn-page-suiv");

  if (btnPagePrec) {
    btnPagePrec.addEventListener("click", function () {
      if (pageActuelle > 0) {
        afficherPageInventaire(pageActuelle - 1);
      }
    });
  }

  if (btnPageSuiv) {
    btnPageSuiv.addEventListener("click", function () {
      if (pageActuelle < NB_PAGES_INVENTAIRE - 1) {
        afficherPageInventaire(pageActuelle + 1);
      }
    });
  }

  afficherPageInventaire(0);

  // ========================================
  // 🔗 BOUTONS AVEC LIENS EXTERNES
  // ========================================

  // Wiki Idleon (page principale)
  const btnAideWiki = document.getElementById("btn-aide-wiki");
  if (btnAideWiki) {
    btnAideWiki.addEventListener("click", function () {
      window.open("https://idleon.wiki/wiki/Main_Page", "_blank");
      console.log("[Jarvis] Ouverture Wiki Idleon");
    });
  }

  // Wiki Engrenages (Cogs)
  const btnAideWikiCogs = document.getElementById("btn-aide-wiki-cogs");
  if (btnAideWikiCogs) {
    btnAideWikiCogs.addEventListener("click", function () {
      window.open("https://idleon.wiki/wiki/Construction#Cogs", "_blank");
      console.log("[Jarvis] Ouverture Wiki Engrenages");
    });
  }

  // ========================================
  // 🎨 BOUTON CHANGEMENT DE THÈME
  // ========================================

  const btnTheme = document.getElementById("btn-theme");
  if (btnTheme) {
    btnTheme.addEventListener("click", function () {
      const themeActuel = document.body.getAttribute("data-theme") || "sombre";
      const nouveauTheme = themeActuel === "clair" ? "sombre" : "clair";
      document.body.setAttribute("data-theme", nouveauTheme);
      console.log(`[Jarvis] Thème basculé : ${nouveauTheme}`);
    });
  }

  // ========================================
  // 🪵 BOUTON À PROPOS (CORRIGÉ)
  // ========================================

  const btnAPropos = document.getElementById("btn-a-propos");
  if (btnAPropos) {
    btnAPropos.addEventListener("click", function () {
      ouvrirModal("modal-a-propos");
    });
  } else {
    console.log("[ERROR] Bouton btn-a-propos introuvable");
  }

  // Bouton Chargeur de données
  const btnChargerDonnees = document.getElementById("btn-charger-donnees");
  if (btnChargerDonnees) {
    btnChargerDonnees.addEventListener("click", function () {
      ouvrirModal("modal-chargeur");
    });
  }

  // Boutons documentation
  const btnAideChangelog = document.getElementById("btn-aide-changelog");
  if (btnAideChangelog) {
    btnAideChangelog.addEventListener("click", function () {
      ouvrirModal("modal-changelog");
      chargerMarkdown(MARKDOWN_PATHS.changelog, "contenu-changelog");
    });
  }

  const btnAidePatchnotes = document.getElementById("btn-aide-patchnotes");
  if (btnAidePatchnotes) {
    btnAidePatchnotes.addEventListener("click", function () {
      ouvrirModal("modal-patchnotes");
      chargerMarkdown(MARKDOWN_PATHS.patchnotes, "contenu-patchnotes");
    });
  }

  const btnAideRoadmap = document.getElementById("btn-aide-roadmap");
  if (btnAideRoadmap) {
    btnAideRoadmap.addEventListener("click", function () {
      ouvrirModal("modal-roadmap");
      chargerMarkdown(MARKDOWN_PATHS.roadmap, "contenu-roadmap");
    });
  }

  // Console des logs
  const btnConsoleLogs = document.getElementById("btn-console-logs");
  if (btnConsoleLogs) {
    btnConsoleLogs.addEventListener("click", function () {
      ouvrirModal("modal-console");
      afficherLogsConsole();
      nombreErreurs = 0;
      mettreAJourBadgeErreurs();
    });
  }

  const btnConsoleClear = document.getElementById("btn-console-clear");
  if (btnConsoleClear) {
    btnConsoleClear.addEventListener("click", function () {
      logsCaptures = [];
      afficherLogsConsole();
      nombreErreurs = 0;
      mettreAJourBadgeErreurs();
      console.log("[Jarvis] 🧹 Console effacée");
    });
  }

  // Fermeture des modales
  document.querySelectorAll(".modal-fermer").forEach((croix) => {
    croix.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal) {
        modal.classList.remove("actif");
      }
    });
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("actif");
      }
    });
  });

  console.log("[Jarvis] ✅ Tous les événements initialisés");
});

// ========================================
// 🔄 BOUTON RÉINITIALISER (avec modale personnalisée)
// ========================================

const btnReset = document.getElementById("btn-menu-reset");
const modalReset = document.getElementById("modal-confirmation-reset");
const btnConfirmerReset = document.getElementById("btn-confirmer-reset");
const btnAnnulerReset = document.getElementById("btn-annuler-reset");
const fermerModalReset = document.getElementById("fermer-modal-reset");

if (btnReset && modalReset) {
  // Ouvre la modale de confirmation
  btnReset.addEventListener("click", function () {
    ouvrirModal("modal-confirmation-reset");
    console.log("[Jarvis] Demande de réinitialisation ouverte");
  });

  // Confirme et réinitialise
  if (btnConfirmerReset) {
    btnConfirmerReset.addEventListener("click", function () {
      console.log(
        "[Jarvis] 🔄 Réinitialisation confirmée - Rechargement de l'application"
      );
      window.location.reload(true);
    });
  }

  // Annule la réinitialisation (PAS d'erreur dans les logs)
  if (btnAnnulerReset) {
    btnAnnulerReset.addEventListener("click", function () {
      fermerModal("modal-confirmation-reset");
      console.log("[Jarvis] Réinitialisation annulée par l'utilisateur");
    });
  }

  // Fermeture par la croix
  if (fermerModalReset) {
    fermerModalReset.addEventListener("click", function () {
      fermerModal("modal-confirmation-reset");
      console.log("[Jarvis] Réinitialisation annulée");
    });
  }

  // Fermeture en cliquant en dehors
  if (modalReset) {
    modalReset.addEventListener("click", function (e) {
      if (e.target === modalReset) {
        fermerModal("modal-confirmation-reset");
        console.log("[Jarvis] Réinitialisation annulée");
      }
    });
  }
}
