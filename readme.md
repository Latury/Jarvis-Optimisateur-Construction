<div align="center">

# 🤖 Jarvis - Optimisateur de Construction

**Optimiseur de placement de Cogs pour Legend of Idleon**

![Version](https://img.shields.io/badge/version-0.2.0-blue)
![Statut](https://img.shields.io/badge/statut-interface%20complète-green)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

</div>

---

## 📖 Description

**Jarvis** est un outil web destiné à aider les joueurs de **Legend of Idleon (Monde 3)** à organiser et optimiser le placement de leurs **Cogs** sur le plateau de **Construction**.

Cette version **0.2.0** propose une **interface complète et interactive** avec système de menus intelligents, thèmes clair/sombre, et outils de développement intégrés. Aucun algorithme d'optimisation n'est encore actif.

---

## ✨ Fonctionnalités - version 0.2.0

### Interface utilisateur
- **Interface en trois colonnes** : Menu, Inventaire/Plateau, Statistiques
- **Grille d'inventaire** des Cogs (5×3 sur 8 pages) prête à recevoir les données
- **Grille de plateau** de construction (12×8) pour visualiser un futur placement optimisé
- **Panneau "Étapes de l'optimisation"** (placeholder pour les logs d'algorithme)
- **Panneau "Statistiques avant / après"** (placeholder pour les comparaisons)

### Système de menus
- **Menus déroulants intelligents** avec survol et délai de confort
- Fermeture automatique lors du passage à un autre menu
- Gestion JavaScript complète des états

### Thèmes & Apparence
- **Système de thèmes clair/sombre** avec bouton de bascule
- Thème clair "doux" avec teintes beige/crème
- Variables CSS personnalisables pour les couleurs
- Scrollbars modernes et stylisées

### Outils de développement
- **Console de logs interactive** avec pagination, recherche et export
- **Badge d'erreurs** sur le bouton Console
- **Documentation intégrée** : Changelog, Patchnotes, Roadmap (chargés dynamiquement)

### Sécurité
- **Modal de confirmation** pour la réinitialisation
- Bouton rouge "danger" avec avertissement clair
- Pas d'erreur dans les logs lors de l'annulation

### Liens externes
- Accès direct au **Wiki Idleon** (page principale)
- Accès direct au **Wiki Engrenages** (section Construction/Cogs)
- Ouverture dans nouvel onglet

---

## 🚀 Démarrage rapide

### Accès direct en ligne

🌐 **[Lancer Jarvis - Optimisateur de Construction](https://latury.github.io/Jarvis-Optimisateur-Construction/)**

Aucune installation requise ! L'application est accessible directement depuis ton navigateur.

---

## 🛠️ Technologies

- **HTML5** pour la structure de la page
- **CSS3** avec variables CSS pour les couleurs et la mise en page (thèmes clair/sombre)
- **JavaScript ES6** pour la gestion de l'interface, du chargeur et des algorithmes
- **Showdown** pour la conversion Markdown → HTML
- **GitHub Pages** pour l'hébergement en ligne

---

## 📂 Structure du projet

```
Jarvis-Optimisateur-Construction/
├── index.html # Page principale (interface complète)
├── css/
│ ├── style.css # Styles généraux (3 colonnes, inventaire, plateau, stats)
│ └── themes.css # Thèmes clair/sombre (via data-theme)
├── js/
│ ├── principal.js # Point d'entrée JS (initialisation générale)
│ ├── chargeur.js # (Futur) Chargeur des données de sauvegarde
│ ├── interface.js # Gestion de l'interface (onglets, états, messages)
│ ├── optimiseur.js # (Futur) Algorithme d'optimisation
│ ├── engrenages-donnees.js # Base de données (définition des Cogs)
│ └── engrenages-gestionnaire.js # Gestion de l'inventaire et du plateau
├── ressources/
│ └── icones/
│ ├── engrenages/ # Icônes des Cogs (tous les types et qualités)
│ ├── chapeaux/ # Icônes des chapeaux de personnages
│ ├── grue_cogs.png # Icône principale (logo)
│ └── favicon.ico # Favicon du site
├── README.md # Documentation principale du projet
├── CHANGELOG.md # Historique technique des versions
├── patchnotes.md # Notes de version orientées utilisateur
├── FEUILLE_DE_ROUTE.md # Roadmap détaillée des futures versions
├── LICENSE # Licence MIT
└── .gitignore # Fichiers et dossiers à exclure de Git
```


---

## 🎮 Utilisation

### Contrôles et interface (v0.2.0)

- **Navigation** dans les menus déroulants (Menu, Options, Aide)
- **Visualisation** de la grille d'inventaire et du plateau de construction
- **Lecture** des messages d'information dans les panneaux "Étapes" et "Statistiques"
- **Accès** à la console de logs via le bouton en haut à droite
- **Consultation** de la documentation (Changelog, Patchnotes, Roadmap) via le menu Aide
- **Bascule** entre thème clair/sombre via le menu Options
- **Réinitialisation** avec confirmation via le menu Menu

> **Note :** Pour cette version, le chargeur et l'algorithme ne sont pas encore actifs — l'interface est prête à les accueillir.

### Fonctionnalités à venir

- Coller ou charger une sauvegarde Idleon
- Afficher les Cogs dans l'inventaire (5×3 sur 8 pages) et sur le plateau (12×8)
- Lancer une optimisation et parcourir les différentes étapes

---

## 🗺️ Roadmap

- **v0.1.0** : Interface de base (structure HTML/CSS, panneaux, thèmes)
- **v0.1.5** : Console interactive, documentation intégrée, thème fonctionnel
- **v0.2.0** : Interface complète, menus intelligents, modal de confirmation ✅ **Actuel**
- **v0.3.0** : Chargeur de données (coller / fichier, affichage simple inventaire + plateau)
- **v0.4.0** : Premier algorithme d'optimisation (heuristique / méta-heuristique)
- **v0.5.0** : Sauvegardes locales, confort d'utilisation
- **v1.0.0** : Version stable complète avec documentation et déploiement GitHub Pages

---

## 🔗 Liens utiles

- **[Application en ligne](https://latury.github.io/Jarvis-Optimisateur-Construction/)**
- [Repo GitHub](https://github.com/Latury/Jarvis-Optimisateur-Construction)
- [Wiki Idleon - Construction](https://idleon.wiki/wiki/Construction)
- [Projet Cogtimizer par Monoblos](https://github.com/Monoblos/cogtimizer) *(source d'inspiration)*

---

## 👤 Auteur

**Latury**
📧 latury57@gmail.com

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- Projet **Cogtimizer** de **Monoblos** (source d'inspiration)
- Communauté **Legend of Idleon**

---

<div align="center">

**Fait avec ❤️ pour la communauté Idleon**

</div>
