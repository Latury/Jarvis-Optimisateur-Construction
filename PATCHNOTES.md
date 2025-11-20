# 📝 Notes de Version (Patch Notes)

Notes de mise à jour détaillées pour Jarvis - Optimisateur de Construction.

---

## 🚀 Version 0.1.6 - "Robustesse et Innovation"
**Date de sortie** : 20 novembre 2025
**Statut** : Phase de développement - Améliorations majeures

### Objectif
Corriger les bugs critiques, améliorer la robustesse du système de chargement et ajouter des fonctionnalités modernes pour une meilleure expérience utilisateur.

---

### ✨ Nouveautés majeures

#### 📂 Drag & Drop de fichiers
- **Glissez-déposez** vos fichiers JSON/TXT directement dans la zone de texte
- Interface visuelle améliorée avec effet de survol
- Support des fichiers jusqu'à **50 MB**

#### 🔔 Notifications en temps réel
- Notifications visuelles élégantes (succès, erreur, info)
- Animations fluides (slide in/out)
- Disparition automatique après 5 secondes

#### 💾 Export des données
- **Nouveau bouton** dans le menu : 📤 Exporter
- Export au format JSON avec horodatage
- Inclut l'inventaire, le plateau et les statistiques

#### 📋 Presse-papier intelligent
- Lecture automatique du presse-papier
- Fallback manuel si API non disponible
- Compatible tous navigateurs modernes

#### ⚡ Performances optimisées
- **Lazy loading** des images (chargement différé)
- Images de **fallback** pour icônes manquantes
- Timeout de sécurité (30 secondes)

---

### 🐛 Corrections de bugs critiques

#### Validation JSON
- ✅ **BUG MAJEUR CORRIGÉ** : Les données Idleon valides n'étaient plus rejetées
- ✅ Validation simplifiée et plus fiable
- ✅ Messages d'erreur contextuels avec position

#### Parsing des données
- ✅ **Plateau (CogM)** maintenant fonctionnel
- ✅ **Inventaire (CogO)** correctement parsé
- ✅ Table de correspondance des Cogs mise à jour
- ✅ Gestion des IDs non reconnus

#### Images manquantes
- ✅ Correction du nom `Deckered8_Ultimate.png` → `DeckeredB_Ultimate.png`
- ✅ Image de fallback automatique si manquante
- ✅ Logs des images introuvables

---

### 🎨 Améliorations de l'interface

#### Modal de chargement enrichi
- Zone de dépôt de fichiers stylisée
- Upload de fichier intégré
- Bouton "Coller depuis presse-papier"
- Statistiques affichées après chargement

#### Affichage des données
- Cases mieux centrées (flexbox)
- Bordure bleue sur les cogs placés au plateau
- Tooltips détaillés (nom, description, ID)
- Tri par position sur le plateau

---

### ⚙️ Améliorations techniques

#### Gestion d'erreurs robuste
- Try/catch partout dans le code
- Messages d'erreur explicites
- Protection contre valeurs null/undefined
- Gestion des Promise rejetées

#### Configuration centralisée
const CONFIG = {
COGS_PER_PAGE: 15,
PLATEAU_SIZE: 96,
MAX_COGS: 1000,
DEBUG_MODE: false
};


#### Sécurité renforcée
- Sanitisation des données (suppression scripts dangereux)
- Validation stricte des extensions (.json, .txt)
- Limite de taille de fichier
- Vérification de COGS_DATABASE au démarrage

---

### 📊 Statistiques

#### Nouvelles fonctions
- `obtenirStatistiques()` : Retourne stats inventaire/plateau
- `reinitialiserDonnees()` : Réinitialise tout proprement
- `exporterDonnees()` : Export JSON complet
- `chargerDepuisPressePapier()` : Lecture presse-papier

#### Logs améliorés
- 📚 Base de données : 61 cogs disponibles
- 📦 Inventaire : X cogs affichés (Page Y/Z)
- 🏗️ Plateau : X cogs placés
- 📈 Statistiques détaillées après chargement

---

### 🎯 Prochaine version (0.2.0)
- Interface avec onglets de navigation
- Mode clair/sombre complet
- Algorithme d'optimisation génétique
- Sauvegarde persistante (localStorage)
- Gestion avancée des configurations

---

### 📢 Liens utiles
- [GitHub repo](https://github.com/Latury/Jarvis-Optimisateur-Construction)
- [Demo en ligne](https://latury.github.io/Jarvis-Optimisateur-Construction/)
- [Wiki Idleon](https://idleon.wiki/wiki/Construction)

---

### 👤 Auteur
Latury — [latury57@gmail.com](mailto:latury57@gmail.com)

---

## 🔧 Version 0.1.5 - "Stabilisation"
**Date de sortie** : 15 novembre 2025

### ✨ Nouveautés
- ⌨️ Contrôles clavier (Échap, flèches)
- 🖱️ Fermeture modals au clic extérieur
- 🐛 Corrections de bugs
- ⚡ Optimisations du code

### 🐞 Bugs corrigés
- ✅ Erreurs de chargement de données
- ✅ Problèmes de modals
- ✅ Validation JSON manquante

---

## 🚀 Version 0.1.0 - "Fondations"
**Date de sortie** : 13 novembre 2025

### ✨ Nouveautés
- 📁 Structure du projet complète
- 🎨 Ressources graphiques importées
- 📚 Documentation professionnelle
- ⚙️ Configuration GitHub

---

<div align="center">
**Fait avec ❤️ pour la communauté Idleon**
</div>
