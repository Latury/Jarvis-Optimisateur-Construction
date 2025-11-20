# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### Prochaines fonctionnalités prévues
- Algorithme d'optimisation génétique complet
- Affichage des statistiques avant/après optimisation
- Mode clair/sombre complet
- Système de sauvegarde persistante

## [0.1.6] - 2025-11-20

### 🚀 Version majeure - Robustesse et nouvelles fonctionnalités

#### Ajouté
- Support complet du drag & drop pour les fichiers JSON/TXT
- Notifications visuelles en temps réel (succès, erreur, info)
- Export des données en JSON avec horodatage
- Lecture automatique du presse-papier (avec fallback manuel)
- Lazy loading des images pour meilleures performances
- Image de fallback pour les icônes manquantes
- Mode debug configurable (CONFIG.DEBUG_MODE)
- Fonction d'obtention des statistiques (inventaire et plateau)
- Fonction de réinitialisation des données
- Validation stricte de la taille des fichiers (limite 50 MB)
- Timeout de sécurité de 30 secondes pour le chargement
- Extensions de fichiers autorisées (.json, .txt uniquement)
- Messages d'erreur contextuels avec position de l'erreur
- Statistiques affichées après chargement (nombre de cogs, etc.)
- Vérification automatique de COGS_DATABASE au démarrage

#### Modifié
- Validation JSON complètement refactorisée (plus fiable)
- Parsing des données Idleon grandement amélioré
- Table de correspondance des Cogs mise à jour (12 IDs reconnus)
- Structure du code modulaire avec configuration centralisée
- Gestion d'erreurs robuste avec try/catch partout
- Messages de logs plus détaillés et informatifs
- Interface HTML améliorée avec zones de drop stylisées
- Modal de chargement enrichi avec upload de fichier intégré
- Fonction afficherInventaireCogs optimisée
- Fonction afficherPlateauCogs avec tri par position

#### Corrigé
- **BUG MAJEUR** : Validation JSON qui rejetait les données valides (accolades dans les strings)
- Parsing du plateau (CogM) maintenant fonctionnel
- Correspondance des IDs Cogs corrigée (Cog3A00, Cog3B0, etc.)
- Gestion des images manquantes (Deckered8_Ultimate → DeckeredB_Ultimate)
- Synchronisation des variables globales pageActuelle/pagesTotal
- Protection contre localStorage désactivé (navigation privée)
- Gestion des erreurs de lecture de fichier
- Gestion des Promise rejetées
- Protection contre les éléments DOM manquants

#### Sécurité
- Sanitisation basique des données (suppression de scripts dangereux)
- Validation de la structure JSON avant traitement
- Limite de taille de fichier pour éviter surcharge mémoire
- Timeout pour éviter blocage du navigateur
- Vérification des extensions de fichiers autorisées

## [0.1.5] - 2025-11-15

### 🔧 Version de stabilisation et amélioration

#### Ajouté
- Fermeture des modals au clic extérieur
- Fermeture des modals avec la touche Échap
- Navigation dans la pagination avec les flèches du clavier (←/→)
- Gestion améliorée des erreurs JavaScript avec capture des Promises
- Logs automatiques dans la console du navigateur pour faciliter le debug
- Validation des données avant chargement (JSON et données brutes)
- Messages de feedback plus clairs avec émojis pour meilleure lisibilité
- Limite de 100 logs maximum pour éviter la surcharge mémoire
- Attributs data-index sur les cases de l'inventaire et du plateau
- Préparation de la structure pour le mode clair/sombre (variable themeActuel)

#### Modifié
- Code JavaScript complètement restructuré et commenté par sections
- Amélioration de la fonction de copie des logs (formatage plus clair)
- Optimisation de la gestion des modals (code plus propre et robuste)
- Messages de logs plus informatifs et contextuels
- Amélioration de la fonction d'affichage des logs console
- Refactorisation des fonctions de pagination pour meilleure lisibilité
- Amélioration des messages d'avertissement quand limites atteintes

#### Corrigé
- Correction des bugs de validation des données dans les modals
- Protection contre les éléments DOM manquants ou null
- Gestion correcte des erreurs lors de la copie dans le presse-papier
- Correction de la gestion des Promise rejetées (unhandledrejection)
- Amélioration de la robustesse du code contre les valeurs undefined

#### Sécurité
- Validation stricte des données JSON avant parsing
- Protection contre les erreurs de presse-papier non autorisé
- Gestion sécurisée des erreurs globales JavaScript

## [0.1.0] - 2025-11-13

### 🎉 Première version - Configuration initiale

#### Ajouté
- Structure de base du projet
- Dossiers organisés pour CSS, JavaScript et ressources
- Fichiers de documentation professionnels (README, CHANGELOG, PATCHNOTES)
- Ressources graphiques importées
- Configuration Git et GitHub
- Système de versioning sémantique (SemVer)
- Structure HTML de base prévue
- Fichiers JavaScript vides préparés
- Fichiers CSS vides préparés

#### Configuration
- Dépôt GitHub créé et configuré
- License MIT ajoutée
- .gitignore configuré pour Node.js
- Préparation pour GitHub Pages

#### Documentation
- README complet avec badges, roadmap et guide d'utilisation
- CHANGELOG structuré selon Keep a Changelog
- PATCHNOTES détaillées pour les utilisateurs

## Légende des types de modifications

- **Ajouté** : Nouvelles fonctionnalités
- **Modifié** : Changements dans des fonctionnalités existantes
- **Déprécié** : Fonctionnalités bientôt supprimées
- **Supprimé** : Fonctionnalités supprimées
- **Corrigé** : Corrections de bugs
- **Sécurité** : Corrections de vulnérabilités

## Format des versions

Ce projet utilise le Semantic Versioning (SemVer) :

**MAJEUR.MINEUR.CORRECTIF**

Exemples :
- 0.1.0 : Développement initial
- 0.1.5 : Corrections et améliorations mineures
- 0.1.6 : Corrections majeures et nouvelles fonctionnalités
- 0.2.0 : Ajout de fonctionnalités (en développement)
- 1.0.0 : Première version stable

[Non publié]: https://github.com/Latury/Jarvis-Optimisateur-Construction/compare/v0.1.6...HEAD
[0.1.6]: https://github.com/Latury/Jarvis-Optimisateur-Construction/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/Latury/Jarvis-Optimisateur-Construction/compare/v0.1.0...v0.1.5
[0.1.0]: https://github.com/Latury/Jarvis-Optimisateur-Construction/releases/tag/v0.1.0
