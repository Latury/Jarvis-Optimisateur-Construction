# 🗺️ Feuille de route (Roadmap)

> **Jarvis - Optimisateur de Construction**
> Plan d'évolution détaillé du projet

---

## 📍 Où nous sommes actuellement

### ✅ Version 0.2.0 (Actuelle) - Interface complète & UX améliorée

**Date de sortie :** 28 novembre 2025

**Ce qui est terminé :**
- ✅ Interface en trois colonnes (Menu, Inventaire/Plateau, Statistiques)
- ✅ Grilles vides (inventaire 5×3 sur 8 pages, plateau 12×8)
- ✅ Système de menus déroulants intelligents avec survol
- ✅ Thèmes clair/sombre avec variables CSS personnalisables
- ✅ Console de logs interactive (pagination, recherche, export)
- ✅ Documentation intégrée (Changelog, Patchnotes, Roadmap)
- ✅ Modal de confirmation pour réinitialisation
- ✅ Liens externes vers Wiki Idleon
- ✅ Badge d'erreurs sur la console
- ✅ Gestion des événements clavier (Échap pour fermer modals)

---

## 🎯 Phases de développement

### 📦 Phase 1 : Fondations de l'interface ✅ **TERMINÉE**

**Versions : 0.1.0 → 0.2.0**

- [x] Structure HTML/CSS de base
- [x] Interface en trois colonnes
- [x] Grilles d'inventaire et plateau (placeholders)
- [x] Système de thèmes clair/sombre
- [x] Console de logs interactive
- [x] Documentation intégrée (Markdown → HTML)
- [x] Menus déroulants intelligents
- [x] Modals interactives avec confirmations

**Résultat :** Interface complète et professionnelle, prête à recevoir les données.

---

### 📦 Phase 2 : Chargeur de données 🔄 **EN COURS**

**Version cible : 0.3.0**
**Date estimée :** Décembre 2025

#### Objectifs

- [ ] **Module de chargement des données Idleon**
  - [ ] Bouton "Coller les données" (depuis presse-papier)
  - [ ] Bouton "Charger un fichier" (JSON/TXT)
  - [ ] Validation et parsing des données
  - [ ] Gestion des erreurs de format

- [ ] **Affichage de l'inventaire**
  - [ ] Parser les Cogs depuis la sauvegarde
  - [ ] Afficher les icônes dans la grille 5×3
  - [ ] Pagination fonctionnelle (8 pages)
  - [ ] Tooltip au survol (nom, stats, rareté)

- [ ] **Affichage du plateau initial**
  - [ ] Charger la disposition actuelle depuis la sauvegarde
  - [ ] Afficher les Cogs sur la grille 12×8
  - [ ] Affichage des cases vides

- [ ] **Statistiques basiques**
  - [ ] Comptage total des Cogs
  - [ ] Nombre de Cogs placés / en inventaire
  - [ ] Types et raretés (répartition)

**Résultat attendu :** Tu pourras charger ta sauvegarde et voir tes Cogs affichés correctement.

---

### 📦 Phase 3 : Premier algorithme d'optimisation 🔮 **PRÉVU**

**Version cible : 0.4.0**
**Date estimée :** Janvier 2026

#### Objectifs

- [ ] **Algorithme de base (heuristique simple)**
  - [ ] Analyse des synergies entre Cogs adjacents
  - [ ] Calcul des bonus de production
  - [ ] Placement optimisé selon un critère (production totale)

- [ ] **Affichage des étapes**
  - [ ] Log détaillé de chaque étape de l'algorithme
  - [ ] Visualisation progressive du placement
  - [ ] Navigation entre les étapes (précédent/suivant)

- [ ] **Comparaison avant/après**
  - [ ] Statistiques avant optimisation
  - [ ] Statistiques après optimisation
  - [ ] Gain en pourcentage

- [ ] **Algorithmes avancés (méta-heuristiques)**
  - [ ] Recuit simulé (Simulated Annealing)
  - [ ] Algorithme génétique
  - [ ] Recherche tabou

**Résultat attendu :** Tu pourras lancer une optimisation et voir le placement amélioré.

---

### 📦 Phase 4 : Sauvegardes & Confort d'utilisation 💾 **PRÉVU**

**Version cible : 0.5.0**
**Date estimée :** Février 2026

#### Objectifs

- [ ] **Sauvegarde locale (LocalStorage)**
  - [ ] Sauvegarder plusieurs configurations
  - [ ] Charger une sauvegarde existante
  - [ ] Exporter vers fichier JSON

- [ ] **Améliorations UX**
  - [ ] Drag & Drop des Cogs (inventaire ↔ plateau)
  - [ ] Undo/Redo pour les modifications manuelles
  - [ ] Mode comparaison (2 plateaux côte à côte)

- [ ] **Paramètres avancés**
  - [ ] Choix de l'algorithme d'optimisation
  - [ ] Critères d'optimisation personnalisables
  - [ ] Contraintes utilisateur (Cogs à ne pas déplacer)

**Résultat attendu :** Application complète et agréable à utiliser au quotidien.

---

### 📦 Phase 5 : Version stable publique 🚀 **OBJECTIF FINAL**

**Version cible : 1.0.0**
**Date estimée :** Mars 2026

#### Objectifs

- [ ] **Documentation complète**
  - [ ] Guide utilisateur illustré
  - [ ] FAQ (questions fréquentes)
  - [ ] Tutoriel vidéo

- [ ] **Optimisations techniques**
  - [ ] Performance (gros inventaires)
  - [ ] Responsive design (mobile/tablette)
  - [ ] Compatibilité navigateurs

- [ ] **Déploiement GitHub Pages**
  - [ ] URL stable et publique
  - [ ] Intégration continue (CI/CD)
  - [ ] Versionnage automatique

- [ ] **Communauté**
  - [ ] Création d'un Discord (optionnel)
  - [ ] Publication sur Reddit r/idleon
  - [ ] Partenariat avec le Wiki Idleon

**Résultat attendu :** Version publique 1.0 stable et prête pour la communauté.

---

## 🔮 Idées pour le futur (post-1.0)

### Fonctionnalités bonus
- 🎨 **Éditeur de thèmes personnalisés**
- 📊 **Graphiques de progression** (production au fil du temps)
- 🤝 **Partage de configurations** (URL/code de partage)
- 🧩 **Suggestions intelligentes** (IA/ML pour proposer des placements)
- 🌐 **Multi-langue** (EN, FR, ES, DE)
- 📱 **Application mobile** (PWA - Progressive Web App)

### Intégrations
- 🔗 **Import automatique** depuis le jeu (si API disponible)
- 💬 **Bot Discord** pour partager ses optimisations
- 📈 **Comparateur communautaire** (meilleur placement global)

---

## 📊 Tableau récapitulatif

| Version | Nom | Statut | Date estimée | Fonctionnalités principales |
|---------|-----|--------|--------------|----------------------------|
| 0.1.0 | Fondations | ✅ Terminée | Nov 2025 | Interface de base |
| 0.1.5 | Outils dev | ✅ Terminée | Nov 2025 | Console, docs intégrées |
| 0.2.0 | UX complète | ✅ Terminée | Nov 2025 | Menus, thèmes, confirmations |
| 0.3.0 | Chargeur | 🔄 En cours | Déc 2025 | Import données, affichage Cogs |
| 0.4.0 | Optimisation | 🔮 Prévu | Jan 2026 | Algorithmes, comparaison |
| 0.5.0 | Confort | 🔮 Prévu | Fév 2026 | Sauvegardes, drag & drop |
| 1.0.0 | Stable | 🚀 Objectif | Mar 2026 | Version publique complète |

---

## 💡 Comment contribuer

Le projet est actuellement en développement solo, mais les contributions seront les bienvenues à partir de la **version 0.4.0** !

**Ce qui sera utile :**
- 🐛 Signaler des bugs
- 💡 Proposer des idées d'amélioration
- 📖 Améliorer la documentation
- 🧪 Tester sur différents navigateurs
- 🎨 Proposer de nouveaux thèmes

---

## 🔗 Liens utiles

- **[Application en ligne](https://latury.github.io/Jarvis-Optimisateur-Construction/)**
- [Repo GitHub](https://github.com/Latury/Jarvis-Optimisateur-Construction)
- [Wiki Idleon - Construction](https://idleon.wiki/wiki/Construction)

---

<div align="center">

**Merci de suivre l'évolution de Jarvis ! 🤖❤️**

</div>
