/* JARVIS - Chargeur de données v0.1.0 */

// Fonction pour charger les données (sera développée plus tard)
function chargerDonnees() {
  const zoneDonnees = document.getElementById("zone-donnees");
  const messageChargement = document.getElementById("message-chargement");

  if (!zoneDonnees || !messageChargement) return;

  const donnees = zoneDonnees.value.trim();

  if (donnees === "") {
    afficherMessage("erreur", "Veuillez coller des données avant de charger");
    return;
  }

  // Pour l'instant, on simule un chargement réussi
  afficherMessage(
    "succes",
    "Données chargées avec succès (fonctionnalité à venir dans v0.2.0)"
  );

  if (window.Jarvis) {
    window.Jarvis.ajouterLog("INFO", "Tentative de chargement de données");
  }
}

function afficherMessage(type, texte) {
  const messageChargement = document.getElementById("message-chargement");
  if (!messageChargement) return;

  messageChargement.className = `message-resultat ${type}`;
  messageChargement.textContent = texte;
  messageChargement.classList.remove("masque");

  setTimeout(() => {
    messageChargement.classList.add("masque");
  }, 5000);
}

// Initialiser le bouton de chargement
document.addEventListener("DOMContentLoaded", function () {
  const boutonCharger = document.getElementById("bouton-charger-donnees");
  if (boutonCharger) {
    boutonCharger.addEventListener("click", chargerDonnees);
  }
  console.log("✅ Module chargeur initialisé");
});
