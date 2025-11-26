# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est inspiré de **Keep a Changelog**
et ce projet suit le **Semantic Versioning (SemVer)** : MAJEUR.MINEUR.CORRECTIF.

---

## [Non publié]

### Prévu

- Module « Chargeur de données » (coller / charger un fichier).
- Affichage détaillé de l’inventaire et du plateau à partir d’une sauvegarde Idleon.
- Premier algorithme d’optimisation pour le placement des Cogs.
- Sauvegarde locale et amélioration de l’ergonomie.

---

## [0.1.0] - 2025-11-23

### 🎉 Première version — « Fondations de l’interface »

#### Ajouté

- Interface principale en **trois colonnes** :
  - Menu à gauche (avec section « Chargeur de données » à venir).
  - Inventaire + plateau de construction au centre.
  - Étapes d’optimisation et statistiques avant / après à droite.
- Grille d’inventaire prête à recevoir les Cogs.
- Grille de plateau de construction prête pour l’optimisation.
- Panneaux placeholders pour :
  - Étapes détaillées de l’algorithme.
  - Statistiques avant / après optimisation.
- Système de **thèmes clair/sombre** défini dans `themes.css`.
- Fichiers de documentation :
  - `README.md` (présentation du projet).
  - `CHANGELOG.md` (ce fichier).
  - `PATCHNOTES.md` (notes orientées utilisateur).
  - `FEUILLE_DE_ROUTE.md` (plan d’évolution).

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
- `0.2.0` : ajout du chargeur de données.
- `0.3.0` : premier algorithme d’optimisation.
- `1.0.0` : première version stable publique.
