"use strict";

/**
 * ======================================
 * JARVIS - OPTIMISATEUR DE CONSTRUCTION
 * ======================================
 * Point d'entrée principal de l'application.
 * Gère l'initialisation générale et la version affichée.
 */

/**
 * Version actuelle de l'application.
 * À synchroniser manuellement avec :
 * - README.md
 * - PATCHNOTES.md
 * - CHANGELOG.md
 * - <meta name="application-version"> dans index.html
 */
const VERSION_APPLICATION = "0.1.0";

/**
 * Fonction principale appelée au chargement de la page.
 * Initialise l'application et met à jour l'affichage de la version.
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    `[Jarvis] Application initialisée (version ${VERSION_APPLICATION})`
  );

  // Met à jour les éléments de l'interface affichant la version
  mettreAJourAffichageVersion();

  // Plus tard, on pourra appeler ici :
  // - initialiserChargeurDeDonnees();
  // - initialiserGestionCogs();
  // - initialiserOptimisation();
});

/**
 * Met à jour l'affichage de la version dans le header et le footer.
 */
function mettreAJourAffichageVersion() {
  // Élément dans le header
  const spanVersionApp = document.getElementById("version-app");
  if (spanVersionApp) {
    spanVersionApp.textContent = VERSION_APPLICATION;
  }

  // Élément dans le footer
  const spanVersionFooter = document.getElementById("version-footer");
  if (spanVersionFooter) {
    spanVersionFooter.textContent = VERSION_APPLICATION;
  }
}
