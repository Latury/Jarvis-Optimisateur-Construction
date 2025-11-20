// ========================================
// Jarvis - Optimisateur de Construction
// Version 0.1.5
// ========================================

const VERSION_APP = "0.1.0";
const NOM_APP = "Jarvis - Optimisateur de Construction";

const EtatApplication = {
  donneesChargees: false,
  optimisationEnCours: false,
  plateauCourant: null,
  inventaireCourant: null,
  statistiques: {
    avant: { construction: 0, xp: 0, flags: 0, score: 0 },
    apres: { construction: 0, xp: 0, flags: 0, score: 0 },
  },
};

console.log(
  `%c${NOM_APP}`,
  "color: #00adb5; font-size: 20px; font-weight: bold;"
);
console.log(`%cVersion ${VERSION_APP}`, "color: #00adb5;");

document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Démarrage...");
  if (window.Jarvis) {
    window.Jarvis.ajouterLog("INFO", "Application initialisée");
    window.Jarvis.ajouterLog("INFO", `Version ${VERSION_APP}`);
  }
  console.log("✅ Prêt");
});

function creerPlateauVide() {
  const plateau = [];
  for (let i = 0; i < 8; i++) {
    plateau[i] = [];
    for (let j = 0; j < 12; j++) {
      plateau[i][j] = null;
    }
  }
  return plateau;
}

function mettreAJourStatistiques(avant, apres) {
  EtatApplication.statistiques.avant = avant;
  EtatApplication.statistiques.apres = apres;

  document.getElementById("stat-avant-construction").textContent =
    avant.construction;
  document.getElementById("stat-avant-xp").textContent = avant.xp;
  document.getElementById("stat-avant-flags").textContent = avant.flags;
  document.getElementById("stat-avant-score").textContent = avant.score;

  document.getElementById("stat-apres-construction").textContent =
    apres.construction;
  document.getElementById("stat-apres-xp").textContent = apres.xp;
  document.getElementById("stat-apres-flags").textContent = apres.flags;
  document.getElementById("stat-apres-score").textContent = apres.score;

  if (avant.score > 0) {
    const amelioration = (
      ((apres.score - avant.score) / avant.score) *
      100
    ).toFixed(1);
    document.getElementById(
      "pourcentage-amelioration"
    ).textContent = `+${amelioration}%`;
  }
}

window.JarvisApp = {
  version: VERSION_APP,
  etat: EtatApplication,
  mettreAJourStatistiques: mettreAJourStatistiques,
};
