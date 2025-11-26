# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est inspiré de **Keep a Changelog**
et ce projet suit le **Semantic Versioning (SemVer)** : MAJEUR.MINEUR.CORRECTIF.

---

## [Non publié]

### Prévu

- Module « Chargeur de données » (coller / charger un fichier).
- Affichage détaillé de l'inventaire et du plateau à partir d'une sauvegarde Idleon.
- Premier algorithme d'optimisation pour le placement des Cogs.
- Sauvegarde locale et amélioration de l'ergonomie.

---

## [0.1.5] - 2025-11-26

### ✨ Interface avancée + Outils développeur

#### Ajouté

- **Console de logs interactive** :
  - Capture automatique de tous les logs JavaScript (`console.log`, `warn`, `error`, `debug`).
  - Système de pagination (35 logs par page).
  - Filtre de recherche en temps réel.
  - Export des logs vers fichier `.txt`.
  - Copie des logs vers presse-papier.
  - Animation pulse pour logs en temps réel.
- **Système de documentation dynamique** :
  - Chargement automatique des fichiers Markdown (Changelog, Patchnotes, Roadmap).
  - Conversion Markdown → HTML avec bibliothèque Showdown.
  - Affichage dans des modals dédiées.
- **Améliorations interface utilisateur** :
  - Thème clair/sombre entièrement fonctionnel avec bouton de bascule.
  - Menus déroulants interactifs avec fermeture automatique.
  - Gestion des modals avec touche `Échap`.
  - Scrollbars modernes et stylisées (Firefox + Chrome/Edge/Safari).

#### Modifié

- Amélioration des commentaires dans `interface.js` et `principal.js`.
- Optimisation de l'affichage console avec `requestAnimationFrame`.
- Gestion propre des événements (fermeture menus au clic extérieur).

#### Documentation

- Ajout de la licence **MIT**.
- Mise à jour du README avec badges (Version, Statut, License).
- Ajout section "Auteur" avec mention de la licence.
- Préparation structure pour publication GitHub.

---

## [0.1.0] - 2025-11-23

### 🎉 Première version — « Fondations de l'interface »

#### Ajouté

- Interface principale en **trois colonnes** :
  - Menu à gauche (avec section « Chargeur de données » à venir).
  - Inventaire + plateau de construction au centre.
  - Étapes d'optimisation et statistiques avant / après à droite.
- Grille d'inventaire prête à recevoir les Cogs.
- Grille de plateau de construction prête pour l'optimisation.
- Panneaux placeholders pour :
  - Étapes détaillées de l'algorithme.
  - Statistiques avant / après optimisation.
- Système de **thèmes clair/sombre** défini dans `themes.css`.
- Fichiers de documentation :
  - `README.md` (présentation du projet).
  - `CHANGELOG.md` (ce fichier).
  - `PATCHNOTES.md` (notes orientées utilisateur).
  - `FEUILLE_DE_ROUTE.md` (plan d'évolution).

---

## Légende des types de modifications

- **Ajouté** : Nouvelles fonctionnalités.
- **Modifié** : Changements dans des fonctionnalités existantes.
- **Corrigé** : Bugs corrigés.
- **Supprimé** : Fonctionnalités retirées.
- **Sécurité** : Changements liés à la sécurité.

---

## Format des versions

Ce projet utilise le versionnage **SemVer** :

- `MAJEUR` : changements incompatibles avec les versions précédentes.
- `MINEUR` : nouvelles fonctionnalités rétro‑compatibles.
- `CORRECTIF` : corrections de bugs rétro‑compatibles.

Exemples :

- `0.1.0` : interface de base.
- `0.1.5` : outils développeur et console interactive.
- `0.2.0` : ajout du chargeur de données.
- `0.3.0` : premier algorithme d'optimisation.
- `1.0.0` : première version stable publique.
