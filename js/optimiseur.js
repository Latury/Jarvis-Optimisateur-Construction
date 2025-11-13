/* JARVIS - Optimiseur v0.1.0 */

// Fonction d'optimisation (sera développée plus tard avec algorithme génétique)
function optimiserPlacement() {
    console.log('🚀 Optimisation lancée');

    if (window.Jarvis) {
        window.Jarvis.ajouterLog('INFO', 'Optimisation en cours...');
    }

    // Simuler une optimisation
    setTimeout(() => {
        console.log('✅ Optimisation terminée (simulation)');

        if (window.Jarvis) {
            window.Jarvis.ajouterLog('INFO', 'Optimisation terminée (fonctionnalité à venir dans v0.3.0)');
        }

        // Afficher des statistiques fictives pour tester l'affichage
        if (window.JarvisApp) {
            window.JarvisApp.mettreAJourStatistiques(
                { construction: 100, xp: 50, flags: 25, score: 175 },
                { construction: 150, xp: 75, flags: 35, score: 260 }
            );
        }
    }, 1000);
}

// Initialiser le bouton d'optimisation
document.addEventListener('DOMContentLoaded', function() {
    const boutonOptimiser = document.getElementById('bouton-optimiser');
    if (boutonOptimiser) {
        boutonOptimiser.addEventListener('click', optimiserPlacement);
    }
    console.log('✅ Module optimiseur initialisé');
});
