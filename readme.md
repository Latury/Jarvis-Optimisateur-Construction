<div align="center">

# 🔧 Jarvis - Optimisateur de Construction
### Optimiseur de placement de Cogs pour Legend of Idleon

[![Version](https://img.shields.io/badge/version-0.1.5-blue.svg)](https://github.com/Latury/Jarvis-Optimisateur-Construction/releases)
[![Statut](https://img.shields.io/badge/statut-en%20développement-yellow.svg)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/demo-à%20venir-lightgrey.svg)]()

</div>

---

## 📋 Description

Jarvis est un outil web destiné à aider les joueurs de Legend of Idleon (Monde 3) à organiser et optimiser le placement de leurs Cogs sur le plateau de Construction.
Cette version (0.1.5) propose une interface complète et interactive avec des outils de développement intégrés : aucun algorithme d'optimisation n'est encore actif.

---

## ✨ Fonctionnalités - version 0.1.5

- ✅ Interface en **trois colonnes** : Menu, Inventaire/Plateau, Statistiques.
- ✅ Grille d'**inventaire des Cogs** prête à recevoir les données de sauvegarde.
- ✅ Grille de **plateau de construction** pour visualiser un futur placement optimisé.
- ✅ Panneau « Étapes de l'optimisation » (placeholder pour les logs d'algorithme).
- ✅ Panneau « Statistiques avant / après » (placeholder pour les comparaisons).
- ✅ Système de **thèmes clair/sombre** défini en CSS (`themes.css`) avec bouton interactif.
- ✅ **Console de logs interactive** avec pagination, recherche et export.
- ✅ **Documentation intégrée** (Changelog, Patchnotes, Roadmap chargés dynamiquement).
- ✅ **Menus et modals interactifs** avec gestion clavier (Échap).
- ✅ Structure de projet préparée pour accueillir chargeur, gestion des Cogs et algorithmes.

---

## 🚀 Démarrage rapide

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Git installé (pour le développement et les mises à jour)

### Installation locale

git clone https://github.com/Latury/Jarvis-Optimisateur-Construction.git
cd Jarvis-Optimisateur-Construction


Puis ouvrir simplement le fichier `index.html` dans un navigateur moderne
(ou utiliser l'extension **Live Server** de Visual Studio Code).

### Version en ligne

L'instance GitHub Pages sera configurée plus tard, une fois une première version jouable prête.

---

## 🛠️ Technologies

- **HTML5** pour la structure de la page.
- **CSS3** avec variables CSS pour les couleurs et la mise en page (thèmes clair/sombre).
- **JavaScript ES6+** pour la gestion de l'interface, du chargeur et des algorithmes.
- **Showdown** pour la conversion Markdown → HTML.
- **Git & GitHub** pour le versionnage, les sauvegardes et le déploiement GitHub Pages.

---

## 📂 Structure du projet

```
Jarvis-Optimisateur-Construction/
│
├── index.html # Page principale (interface complète)
├── css/
│ ├── style.css # Styles généraux (3 colonnes, inventaire, plateau, stats)
│ └── themes.css # Thèmes clair/sombre via data-theme
├── js/
│ ├── principal.js # Point d'entrée JS (initialisation générale)
│ ├── chargeur.js # Futur chargeur des données de sauvegarde
│ ├── interface.js # Gestion de l'interface (onglets, états, messages)
│ ├── optimiseur.js # Futur algorithme d'optimisation
│ ├── engrenages-donnees.js # Base de données / définition des Cogs
│ └── engrenages-gestionnaire.js # Gestion de l'inventaire et du plateau
├── ressources/icones/
│ ├── engrenages/ # Icônes des Cogs (tous les types et qualités)
│ ├── chapeaux/ # Icônes des chapeaux de personnages
│ └── tete/ # Icône principale (tête Idleon / logo)
├── README.md # Documentation principale du projet
├── CHANGELOG.md # Historique technique des versions
├── PATCHNOTES.md # Notes de version orientées utilisateur
├── FEUILLE_DE_ROUTE.md # Roadmap détaillée des futures versions
├── LICENSE # Licence MIT
└── .gitignore # Fichiers et dossiers à exclure de Git
```

---

## 🎮 Utilisation

### Contrôles et interface (v0.1.5)

- Navigation dans les **onglets du menu** à gauche.
- Visualisation de la **grille d'inventaire** et du **plateau de construction** au centre.
- Lecture des messages d'information dans les panneaux **Étapes** et **Statistiques** à droite.
- Accès à la **console de logs** via le bouton en haut à droite.
- Consultation de la **documentation** (Changelog, Patchnotes, Roadmap) via le menu Aide.
- Bascule entre **thème clair/sombre** via le menu Options.

> Pour cette version, le chargeur et l'algorithme ne sont pas encore actifs : l'interface est prête à les accueillir.

### Fonctionnalités à venir

- Coller ou charger une sauvegarde Idleon.
- Afficher les Cogs dans l'inventaire (5×3 sur 8 pages) et sur le plateau (12×8).
- Lancer une optimisation et parcourir les différentes étapes.

---

## 📝 Roadmap

- ✅ **v0.1.0** : Interface de base (structure HTML/CSS, panneaux, thèmes).
- ✅ **v0.1.5** : Console interactive, documentation intégrée, thème fonctionnel.
- 📦 **v0.2.0** : Chargeur de données (coller / fichier), affichage simple inventaire + plateau.
- 🧠 **v0.3.0** : Premier algorithme d'optimisation (heuristique / méta-heuristique).
- 🌗 **v0.4.0** : Sauvegardes locales, confort d'utilisation.
- 🎯 **v1.0.0** : Version stable complète avec documentation et déploiement GitHub Pages.

---

## 📢 Liens utiles

- [Repo GitHub](https://github.com/Latury/Jarvis-Optimisateur-Construction)
- [Wiki Idleon – Construction](https://idleon.wiki/wiki/Construction)
- [Projet Cogtimizer par Monoblos](https://github.com/Monoblos/cogtimizer)

---

## 👤 Auteur

**Latury** — [latury57@gmail.com](mailto:latury57@gmail.com)

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- Projet **Cogtimizer** de Monoblos (source d'inspiration).
- Communauté **Legend of Idleon**.

---

<div align="center">
Fait avec ❤️ pour la communauté Idleon
</div>
