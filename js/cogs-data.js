/* ========================================
   JARVIS - Base de données des Cogs
   Version 0.1.5 | Auteur: Latury
   ======================================== */

const COGS_DATABASE = {
  // === ADJACENT COGS ===
  Adjacent_Decent: {
    nom: "Adjacent Cog (Decent)",
    type: "Adjacent",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Adjacent_Decent.png",
    description: "Affecte les cases adjacentes",
  },
  Adjacent_Nooby: {
    nom: "Adjacent Cog (Nooby)",
    type: "Adjacent",
    qualite: "Nooby",
    rareté: 0,
    icone: "ressources/icones/engrenages/Adjacent_Nooby.png",
    description: "Affecte les cases adjacentes",
  },
  Adjacent_Superb: {
    nom: "Adjacent Cog (Superb)",
    type: "Adjacent",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Adjacent_Superb.png",
    description: "Affecte les cases adjacentes",
  },

  // === AVERAGE COGS ===
  Average_Decent: {
    nom: "Average Cog (Decent)",
    type: "Average",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Average_Decent.png",
    description: "Cog standard moyen",
  },
  Average_Nooby: {
    nom: "Average Cog (Nooby)",
    type: "Average",
    qualite: "Nooby",
    rareté: 0,
    icone: "ressources/icones/engrenages/Average_Nooby.png",
    description: "Cog standard moyen",
  },
  Average_Superb: {
    nom: "Average Cog (Superb)",
    type: "Average",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Average_Superb.png",
    description: "Cog standard moyen",
  },
  Average_Ultimate: {
    nom: "Average Cog (Ultimate)",
    type: "Average",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Average_Ultimate.png",
    description: "Cog standard moyen",
  },

  // === STANDARD COGS ===
  Cog_Decent: {
    nom: "Cog (Decent)",
    type: "Cog",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Cog_Decent.png",
    description: "Cog standard",
  },
  Cog_Nooby: {
    nom: "Cog (Nooby)",
    type: "Cog",
    qualite: "Nooby",
    rareté: 0,
    icone: "ressources/icones/engrenages/Cog_Nooby.png",
    description: "Cog standard",
  },
  Cog_Superb: {
    nom: "Cog (Superb)",
    type: "Cog",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Cog_Superb.png",
    description: "Cog standard",
  },
  Cog_Ultimate: {
    nom: "Cog (Ultimate)",
    type: "Cog",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Cog_Ultimate.png",
    description: "Cog standard",
  },

  // === COGB (Building Cogs) ===
  CogB_Decent: {
    nom: "Building Cog (Decent)",
    type: "CogB",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/CogB_Decent.png",
    description: "Cog de construction",
  },
  CogB_Nooby: {
    nom: "Building Cog (Nooby)",
    type: "CogB",
    qualite: "Nooby",
    rareté: 0,
    icone: "ressources/icones/engrenages/CogB_Nooby.png",
    description: "Cog de construction",
  },
  CogB_Superb: {
    nom: "Building Cog (Superb)",
    type: "CogB",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/CogB_Superb.png",
    description: "Cog de construction",
  },
  CogB_Ultimate: {
    nom: "Building Cog (Ultimate)",
    type: "CogB",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/CogB_Ultimate.png",
    description: "Cog de construction",
  },

  // === COLUMN COGS ===
  Column_Superb: {
    nom: "Column Cog (Superb)",
    type: "Column",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Column_Superb.png",
    description: "Affecte toute la colonne",
  },
  Column_Ultimate: {
    nom: "Column Cog (Ultimate)",
    type: "Column",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Column_Ultimate.png",
    description: "Affecte toute la colonne",
  },

  // === CORNER COG ===
  Corner_Ultimate: {
    nom: "Corner Cog (Ultimate)",
    type: "Corner",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Corner_Ultimate.png",
    description: "Cog spécial de coin",
  },

  // === DECKERED8 (Special) ===
  Deckered8_Ultimate: {
    nom: "Deckered8 (Ultimate)",
    type: "Special",
    qualite: "Ultimate",
    rareté: 4,
    icone: "ressources/icones/engrenages/DeckeredB_Ultimate.png", // ✅ CORRIGÉ : B au lieu de 8
    description: "Cog spécial Deckered8",
  },

  // === DIAGONAL COGS ===
  Diagonal_Decent: {
    nom: "Diagonal Cog (Decent)",
    type: "Diagonal",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Diagonal_Decent.png",
    description: "Affecte les diagonales",
  },
  Diagonal_Nooby: {
    nom: "Diagonal Cog (Nooby)",
    type: "Diagonal",
    qualite: "Nooby",
    rareté: 0,
    icone: "ressources/icones/engrenages/Diagonal_Nooby.png",
    description: "Affecte les diagonales",
  },
  Diagonal_Superb: {
    nom: "Diagonal Cog (Superb)",
    type: "Diagonal",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Diagonal_Superb.png",
    description: "Affecte les diagonales",
  },

  // === DOUBLE COGS ===
  Double_Decent: {
    nom: "Double Cog (Decent)",
    type: "Double",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Double_Decent.png",
    description: "Double effet",
  },
  Double_Nooby: {
    nom: "Double Cog (Nooby)",
    type: "Double",
    qualite: "Nooby",
    rareté: 0,
    icone: "ressources/icones/engrenages/Double_Nooby.png",
    description: "Double effet",
  },
  Double_Superb: {
    nom: "Double Cog (Superb)",
    type: "Double",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Double_Superb.png",
    description: "Double effet",
  },
  Double_Ultimate: {
    nom: "Double Cog (Ultimate)",
    type: "Double",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Double_Ultimate.png",
    description: "Double effet",
  },

  // === DOWN COGS ===
  Down_Decent: {
    nom: "Down Cog (Decent)",
    type: "Down",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Down_Decent.png",
    description: "Affecte vers le bas",
  },
  Down_Superb: {
    nom: "Down Cog (Superb)",
    type: "Down",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Down_Superb.png",
    description: "Affecte vers le bas",
  },
  Down_Ultimate: {
    nom: "Down Cog (Ultimate)",
    type: "Down",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Down_Ultimate.png",
    description: "Affecte vers le bas",
  },

  // === LEFT COGS ===
  Left_Decent: {
    nom: "Left Cog (Decent)",
    type: "Left",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Left_Decent.png",
    description: "Affecte vers la gauche",
  },
  Left_Superb: {
    nom: "Left Cog (Superb)",
    type: "Left",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Left_Superb.png",
    description: "Affecte vers la gauche",
  },
  Left_Ultimate: {
    nom: "Left Cog (Ultimate)",
    type: "Left",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Left_Ultimate.png",
    description: "Affecte vers la gauche",
  },

  // === PENTA COG ===
  Penta_Ultimate: {
    nom: "Penta Cog (Ultimate)",
    type: "Penta",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Penta_Ultimate.png",
    description: "Cog à 5 effets",
  },

  // === QUAD COGS ===
  Quad_Superb: {
    nom: "Quad Cog (Superb)",
    type: "Quad",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Quad_Superb.png",
    description: "Cog à 4 effets",
  },
  Quad_Ultimate: {
    nom: "Quad Cog (Ultimate)",
    type: "Quad",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Quad_Ultimate.png",
    description: "Cog à 4 effets",
  },

  // === RIGHT COGS ===
  Right_Decent: {
    nom: "Right Cog (Decent)",
    type: "Right",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Right_Decent.png",
    description: "Affecte vers la droite",
  },
  Right_Superb: {
    nom: "Right Cog (Superb)",
    type: "Right",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Right_Superb.png",
    description: "Affecte vers la droite",
  },
  Right_Ultimate: {
    nom: "Right Cog (Ultimate)",
    type: "Right",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Right_Ultimate.png",
    description: "Affecte vers la droite",
  },

  // === ROW COGS ===
  Row_Superb: {
    nom: "Row Cog (Superb)",
    type: "Row",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Row_Superb.png",
    description: "Affecte toute la ligne",
  },
  Row_Ultimate: {
    nom: "Row Cog (Ultimate)",
    type: "Row",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Row_Ultimate.png",
    description: "Affecte toute la ligne",
  },

  // === SPUR COGS ===
  Spur_Decent: {
    nom: "Spur Cog (Decent)",
    type: "Spur",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Spur_Decent.png",
    description: "Cog d'éperon",
  },
  Spur_Superb: {
    nom: "Spur Cog (Superb)",
    type: "Spur",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Spur_Superb.png",
    description: "Cog d'éperon",
  },
  Spur_Ultimate: {
    nom: "Spur Cog (Ultimate)",
    type: "Spur",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Spur_Ultimate.png",
    description: "Cog d'éperon",
  },

  // === STACKED COGS ===
  Stacked_Superb: {
    nom: "Stacked Cog (Superb)",
    type: "Stacked",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Stacked_Superb.png",
    description: "Cog empilé",
  },
  Stacked_Ultimate: {
    nom: "Stacked Cog (Ultimate)",
    type: "Stacked",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Stacked_Ultimate.png",
    description: "Cog empilé",
  },

  // === TRABBLE COGS ===
  Trabble_Decent: {
    nom: "Trabble Cog (Decent)",
    type: "Trabble",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Trabble_Decent.png",
    description: "Triple effet",
  },
  Trabble_Superb: {
    nom: "Trabble Cog (Superb)",
    type: "Trabble",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Trabble_Superb.png",
    description: "Triple effet",
  },
  Trabble_Ultimate: {
    nom: "Trabble Cog (Ultimate)",
    type: "Trabble",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Trabble_Ultimate.png",
    description: "Triple effet",
  },

  // === TRIPS COGS ===
  Trips_Decent: {
    nom: "Trips Cog (Decent)",
    type: "Trips",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Trips_Decent.png",
    description: "Cog de voyage",
  },
  Trips_Nooby: {
    nom: "Trips Cog (Nooby)",
    type: "Trips",
    qualite: "Nooby",
    rareté: 0,
    icone: "ressources/icones/engrenages/Trips_Nooby.png",
    description: "Cog de voyage",
  },
  Trips_Superb: {
    nom: "Trips Cog (Superb)",
    type: "Trips",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Trips_Superb.png",
    description: "Cog de voyage",
  },
  Trips_Ultimate: {
    nom: "Trips Cog (Ultimate)",
    type: "Trips",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Trips_Ultimate.png",
    description: "Cog de voyage",
  },

  // === UP COGS ===
  Up_Decent: {
    nom: "Up Cog (Decent)",
    type: "Up",
    qualite: "Decent",
    rareté: 1,
    icone: "ressources/icones/engrenages/Up_Decent.png",
    description: "Affecte vers le haut",
  },
  Up_Superb: {
    nom: "Up Cog (Superb)",
    type: "Up",
    qualite: "Superb",
    rareté: 2,
    icone: "ressources/icones/engrenages/Up_Superb.png",
    description: "Affecte vers le haut",
  },
  Up_Ultimate: {
    nom: "Up Cog (Ultimate)",
    type: "Up",
    qualite: "Ultimate",
    rareté: 3,
    icone: "ressources/icones/engrenages/Up_Ultimate.png",
    description: "Affecte vers le haut",
  },

  // === YANG COG ===
  Yang_Cog: {
    nom: "Yang Cog",
    type: "Special",
    qualite: "Legendary",
    rareté: 4,
    icone: "ressources/icones/engrenages/Yang_Cog.png",
    description: "Cog spécial Yang",
  },

  // === YIN COGS (Special corners) ===
  Yin_Bottom_Left_Cog: {
    nom: "Yin Bottom Left Cog",
    type: "Special",
    qualite: "Legendary",
    rareté: 4,
    icone: "ressources/icones/engrenages/Yin_Bottom_Left_Cog.png",
    description: "Cog spécial Yin (bas-gauche)",
  },
  Yin_Bottom_Right_Cog: {
    nom: "Yin Bottom Right Cog",
    type: "Special",
    qualite: "Legendary",
    rareté: 4,
    icone: "ressources/icones/engrenages/Yin_Bottom_Right_Cog.png",
    description: "Cog spécial Yin (bas-droite)",
  },
  Yin_Top_Left_Cog: {
    nom: "Yin Top Left Cog",
    type: "Special",
    qualite: "Legendary",
    rareté: 4,
    icone: "ressources/icones/engrenages/Yin_Top_Left_Cog.png",
    description: "Cog spécial Yin (haut-gauche)",
  },
  Yin_Top_Right_Cog: {
    nom: "Yin Top Right Cog",
    type: "Special",
    qualite: "Legendary",
    rareté: 4,
    icone: "ressources/icones/engrenages/Yin_Top_Right_Cog.png",
    description: "Cog spécial Yin (haut-droite)",
  },

  // === FLAG (Construction flag) ===
  flag: {
    nom: "Construction Flag",
    type: "Flag",
    qualite: "Special",
    rareté: 5,
    icone: "ressources/icones/engrenages/flag.png",
    description: "Drapeau de construction",
  },
};

// Fonction helper pour obtenir un Cog par son ID
function getCogById(cogId) {
  return COGS_DATABASE[cogId] || null;
}

// Fonction helper pour obtenir tous les Cogs d'un type
function getCogsByType(type) {
  return Object.entries(COGS_DATABASE)
    .filter(([id, cog]) => cog.type === type)
    .map(([id, cog]) => ({ id, ...cog }));
}

// Fonction helper pour obtenir tous les Cogs d'une qualité
function getCogsByQuality(qualite) {
  return Object.entries(COGS_DATABASE)
    .filter(([id, cog]) => cog.qualite === qualite)
    .map(([id, cog]) => ({ id, ...cog }));
}
