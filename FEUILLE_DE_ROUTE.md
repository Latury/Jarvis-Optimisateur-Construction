# 🗺️ Feuille de route - Jarvis - Optimisateur de Construction

Ce document décrit les grandes étapes prévues pour le projet, avec un niveau de détail suffisant pour suivre l'avancement comme dans un projet professionnel.

---

## 🔢 Vision globale

- **Court terme (0.x)** : construire une interface claire, un chargeur de données fiable et un premier algorithme d’optimisation.
- **Moyen terme (1.x)** : stabiliser les fonctionnalités, améliorer l’ergonomie et documenter l’outil.
- **Long terme (2.x et +)** : expérimenter des algorithmes plus avancés (IA, méta‑heuristiques), profils multiples, partage de configurations.

---

## ✅ Version 0.1.0 — « Fondations de l’interface »

**Objectif principal** : poser une base propre pour tout le projet.

- Interface en **trois colonnes** : Menu, Inventaire/Plateau, Statistiques.
- Placeholders pour :
  - Inventaire des Cogs.
  - Plateau de construction.
  - Étapes d’optimisation.
  - Statistiques avant / après.
- Système de **thèmes clair/sombre** défini au niveau CSS (`themes.css`).
- README, CHANGELOG, PATCHNOTES, FEUILLE_DE_ROUTE créés et structurés.
- Arborescence des fichiers JavaScript préparée (mais presque vide).

**Statut** : ✅ Terminé.

---

## 🎯 Version 0.2.0 — « Chargeur de données »

**Objectif principal** : pouvoir charger une sauvegarde Idleon et l’afficher.

### Fonctionnalités prévues

- Module **« Chargeur de données »** dans l’onglet Menu.
- Deux actions :
  - « Coller les données » (presse‑papiers).
  - « Charger les données » (zone de texte ou fichier).
- Validation de base :
  - Format attendu (JSON / texte brut Idleon).
  - Gestion des erreurs lisible pour l’utilisateur.
- Affichage :
  - Inventaire des Cogs rempli à partir des données.
  - Plateau rempli sans optimisation (placement brut).
- Statistiques simples :
  - Nombre total de Cogs.
  - Nombre de cases occupées sur le plateau.

**Statut** : 📝 À faire.

---

## 🧠 Version 0.3.0 — « Premier algorithme »

**Objectif principal** : fournir une première optimisation utile, même simple.

### Fonctionnalités prévues

- Implémentation d’un **algorithme d’optimisation** (heuristique ou génétique) pour le placement des Cogs.
- Paramètres de base :
  - Objectif principal (ex. : vitesse de construction).
  - Nombre d’itérations / générations.
- Affichage des **étapes de calcul** dans le panneau dédié :
  - Meilleure solution trouvée par étape.
  - Score associé.
- Comparaison **avant / après** dans le panneau statistiques :
  - Valeurs clés (construction, XP, flags…).

**Statut** : 📝 À faire.

---

## 🌗 Version 0.4.0 — « Confort & thèmes »

**Objectif principal** : améliorer l’expérience utilisateur.

### Fonctionnalités prévues

- Bascule **clair / sombre** via un bouton dans l’interface.
- Sauvegarde locale :
  - Dernière configuration chargée.
  - Préférences (thème, options d’affichage).
- Amélioration visuelle :
  - Icônes plus lisibles.
  - Meilleure hiérarchie visuelle dans les panneaux.
- Petites options QoL (Quality of Life) :
  - Raccourcis clavier utiles.
  - Boutons de réinitialisation rapide.

**Statut** : 📝 À faire.

---

## 🎯 Version 1.0.0 — « Version stable »

**Objectif principal** : proposer une version fiable et documentée.

- Algorithme principal stabilisé (tests manuels faits).
- Interface utilisable sans lire le code.
- Documentation :
  - README complet.
  - Exemples de captures d’écran.
  - FAQ basique.
- Déploiement sur **GitHub Pages**.
- Tag et release `v1.0.0` créés sur GitHub.

**Statut** : 🔭 Planifié.

---

## 🔮 Au‑delà de 1.0.0 (pistes)

Ces éléments ne sont pas obligatoires mais possibles :

- Plusieurs profils / personnages.
- Sauvegarde et chargement de **configurations personnalisées**.
- Algorithmes alternatifs (plus rapides ou plus précis).
- Export de rapports détaillés (JSON, peut‑être CSV).
