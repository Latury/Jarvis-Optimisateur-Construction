# 📝 Notes de Version (Patch Notes)

Notes de mise à jour pour **Jarvis - Optimisateur de Construction**.

---

## 🚀 Version 0.1.5 — « Interface avancée + Outils développeur »

**Date de sortie** : 26 novembre 2025
**Statut** : Interface enrichie avec outils de debug et confort développeur.

### 🎨 Ce qui change

- **Console de logs professionnelle** 🪵 :
  - Tous tes logs JavaScript sont capturés automatiquement (`console.log`, `warn`, `error`, `debug`)
  - Pagination intelligente (35 logs par page)
  - Recherche instantanée dans les logs
  - Export vers fichier texte (.txt)
  - Copie rapide vers presse-papier
  - Indicateur visuel (pulse) pour logs en temps réel

- **Documentation intégrée** 📄 :
  - Changelog, Patchnotes et Roadmap accessibles directement dans l'application
  - Chargement dynamique depuis fichiers Markdown
  - Conversion automatique Markdown → HTML avec Showdown
  - Affichage propre dans des modals dédiées

- **Expérience utilisateur améliorée** ✨ :
  - Thème clair/sombre entièrement fonctionnel (bouton actif)
  - Menus déroulants fluides et réactifs
  - Fermeture des modals avec touche `Échap`
  - Scrollbars modernes et élégantes (Firefox + Chrome/Edge/Safari)

### 🔍 Ce qui est déjà prêt

- L'interface est maintenant **complètement interactive**
- Tu peux déboguer facilement avec la console intégrée
- La documentation est accessible en un clic depuis le menu Aide
- Le code est mieux commenté pour faciliter les futures modifications
- Licence MIT ajoutée pour protection du projet

### ⚠️ Limitations actuelles

- Tu **ne peux pas encore charger** ta sauvegarde Idleon
- Tu **ne peux pas encore lancer** d'optimisation
- Les panneaux « Étapes » et « Statistiques » affichent toujours des messages explicatifs

---

## 🚀 Version 0.1.0 — « Fondations de l'interface »

**Date de sortie** : 23 novembre 2025
**Statut** : Première version d'interface (aucun calcul d'optimisation pour le moment).

### 🎨 Ce qui change

- Nouvelle interface en **trois zones principales** :
  - **Gauche** : Menu avec l'emplacement du futur « Chargeur de données ».
  - **Centre** : Inventaire des Cogs + plateau de construction.
  - **Droite** : Panneau des **étapes** et panneau des **statistiques**.
- Mise en place d'un **style sombre** propre :
  - Arrière‑plans contrastés.
  - Cartes pour l'inventaire, le plateau et les statistiques.
- Préparation des **thèmes clair/sombre** (les couleurs sont déjà définies dans le CSS).

### 🔍 Ce qui est déjà prêt

- L'interface ressemble à un véritable outil d'optimisation :
  - Tu peux voir où seront affichés tes Cogs.
  - Tu peux voir où le plateau sera dessiné.
  - Tu peux voir les zones réservées aux statistiques avant / après.
- La structure du projet est propre :
  - Dossiers organisés (`css`, `js`, `ressources/icones`…).
  - Fichiers de documentation prêts pour les futures versions.

### ⚠️ Limitations actuelles

- Tu **ne peux pas encore charger** ta sauvegarde Idleon.
- Tu **ne peux pas encore lancer** d'optimisation.
- Les panneaux « Étapes » et « Statistiques » affichent seulement des messages explicatifs.

---

## 🎯 Prochaine étape (version 0.2.0)

Objectif : rendre l'interface réellement utile.

- Ajouter un **Chargeur de données** :
  - Bouton « Coller les données ».
  - Bouton « Charger les données ».
- Afficher les Cogs de ta sauvegarde dans :
  - L'inventaire (grille 5×3 sur 8 pages).
  - Le plateau (grille 12×8 sans optimisation au début).
- Commencer à afficher des **statistiques réelles** (comptage des Cogs, cases occupées, etc.).

---

## 📢 Liens utiles

- [Repo GitHub](https://github.com/Latury/Jarvis-Optimisateur-Construction)
- [Wiki Idleon](https://idleon.wiki/wiki/Main_Page)
- [Wiki Idleon - Cog](https://idleon.wiki/wiki/Construction#Cogs)

---

<div align="center">
Fait avec ❤️ pour la communauté Idleon
</div>
