export const siteConfig = {
  name: "L'Entrepôtes",
  tagline: "Bar à pizzas & Karaoké à Quimper",
  description: "Bar festif à Quimper : pizzas personnalisables 26cm et karaoké à la demande. Ambiance conviviale garantie !",
  
  contact: {
    address: "3 bis rue Jean Jaurès, 29000 Quimper",
    phone: "06 28 21 10 48",
    email: "thierryfalcher@gmail.com",
    location: {
      lat: 47.993499756,
      lng: -4.096469879
    }
  },

  social: {
    facebook: "https://www.facebook.com/people/Lentrep%C3%B4tes/61565513917585/"
  },

  hours: {
    schedule: {
      lundi: "Fermé",
      mardi: "Fermé", 
      mercredi: "19h - 1h",
      jeudi: "19h - 1h",
      vendredi: "19h - 1h",
      samedi: "19h - 1h",
      dimanche: "19h - 1h"
    },
    service: "Service jusqu'à minuit"
  },

  about: {
    owner: "Thierry Falcher (Tyty)",
    story: "Ancien restaurant à viande reconverti en bar à pizzas festif, L'Entrepôtes est devenu LE lieu incontournable de Quimper pour passer une soirée entre potes. Pizza personnalisable et karaoké spontané : l'ambiance est toujours au rendez-vous !",
    concept: "Pizza + Karaoké = Soirée réussie",
    history: "Repris en septembre 2024 (ancien Chez Claudius), réinventé fin 2024 en bar à pizzas karaoké"
  },

  pizza: {
    size: "26 cm",
    slogan: "La pizza au format malin pour petit prix",
    base: {
      name: "Base tomate & mozzarella",
      price: 5.90
    },
    toppings: {
      price: 1.00,
      list: [
        "Jambon",
        "Chorizo",
        "Poulet",
        "Lardons",
        "Oignons",
        "Crème",
        "Chèvre",
        "Miel",
        "Persillade"
      ]
    },
    takeaway: true,
    delivery: "Uber Eats"
  },

  karaoke: {
    type: "À la demande",
    provider: "KaraFun",
    spontaneous: true,
    danceFloor: true,
    description: "Chantez, dansez, amusez-vous ! Le karaoké est disponible à tout moment sur demande."
  },

  features: [
    {
      title: "Pizzas personnalisables",
      description: "Composez votre pizza 26cm selon vos envies. Base 5,90€ + 1€ par ingrédient",
      icon: "pizza"
    },
    {
      title: "Karaoké spontané",
      description: "Envie de chanter ? On lance le karaoké à la demande pour des soirées inoubliables",
      icon: "mic"
    },
    {
      title: "Ambiance festive",
      description: "Piste de danse, bonne musique et convivialité garantie entre potes",
      icon: "party"
    },
    {
      title: "Privatisation",
      description: "Réservez L'Entrepôtes pour vos événements (minimum 20 personnes)",
      icon: "users"
    }
  ],

  seo: {
    title: "L'Entrepôtes Quimper | Bar à Pizzas & Karaoké - Soirées Festives",
    description: "Bar festif à Quimper : pizzas personnalisables 26cm dès 5,90€ + karaoké à la demande. Ouvert mer-dim 19h-1h. Ambiance conviviale garantie ! ☎ 06 28 21 10 48",
    keywords: [
      "bar Quimper",
      "pizza Quimper",
      "karaoké Quimper",
      "L'Entrepôtes",
      "bar à pizzas Quimper",
      "soirée festive Quimper",
      "restaurant Quimper",
      "pizza personnalisable Quimper",
      "karaoké bar Finistère",
      "sortie nocturne Quimper",
      "bar ambiance Quimper",
      "privatisation bar Quimper"
    ],
    og: {
      title: "L'Entrepôtes - Bar à Pizzas & Karaoké à Quimper",
      description: "Pizzas personnalisables + Karaoké spontané = Soirées mémorables ! Mer-dim 19h-1h au 3 bis rue Jean Jaurès.",
      image: "/og-image.jpg",
      type: "website"
    }
  },

  colors: {
    wood: "#4a3428", // Brun bois foncé
    woodLight: "#8b6f47", // Brun bois clair
    cream: "#f5e6d3", // Crème beige
    gold: "#f4c430", // Jaune or
    red: "#c41e3a", // Rouge vif
    redDark: "#8b1a2b", // Rouge foncé
    orange: "#ff6b35", // Orange chaud
    green: "#4a7c59" // Vert sauge (pour les ingrédients frais)
  }
};