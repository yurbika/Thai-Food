const FOOD_DATA = [
  {
    soup: {
      1: {
        name:
          "Tom Kha Gai Kokosmilksoup with Chicken, Thai-herbs and Mushrooms",
        price: 6,
      },
      2: {
        name:
          "Tom Yam Gung Scharfe Garnelensuppe mit Thai-Kräutern, Champignons und Sellerie",
        price: 6,
      },
      3: {
        name: "	Mama Suppe Nudelsuppe mit gehacktem Huhn und Gemüse",
        price: 5,
      },
      4: {
        name:
          "Tom Yam Gai Scharfe Suppe mit Huhn, Thai-Kräutern,Champignons und Sellerie",
        price: 5.5,
      },

      5: {
        name: "Gäng Jüd Glasnudelsuppe mit gehacktem Huhn und Gemüse",
        price: 5.5,
      },
      6: {
        name:
          "	Vegetarische Mini-Frühlingsrollen1 mit süß-sauer Soße (10 Stück)",
        price: 4,
      },
    },
    chicken: {
      5: {
        name:
          "Gäng Kiowan Gai (s) Huhn mit grünem Curry, Kokosmilch und Gemüse",
        price: 8,
      },
      6: {
        name:
          "	Gäng Kua Gai (s) Huhn mit rotem Curry, Kokosmilch und Kartoffeln",
        price: 8,
      },
      7: {
        name: "	Gäng Pet Gai (s) Huhn mit rotem Curry, Kokosmilch und Gemüse",
        price: 8,
      },
      8: {
        name:
          "	Panäng Gai (s) Huhn mit rotem Curry, Kokoksmilch, Limettenblätter, Champignons und Cashewnüssen",
        price: 8,
      },
      9: {
        name: "Gai Pat Kink Huhn mit frischem Ingwer, Gemüse und Sellerie",
        price: 8,
      },
      10: {
        name:
          "Gai Phat Bai Krapao (s) Gehacktes Huhn mit Knoblauch-Chilies, Bohnen und Basilikum",
        price: 8,
      },
      11: {
        name:
          "	Gai Phat Kratiam Prigthai Huhn in Knoblauch-Pfeffersauce und Gemüse",
        price: 8,
      },
      12: {
        name:
          "	Gai Phat Pak Namman Hoi Huhn mit Gemüse in Austernsauce und Sellerie",
        price: 8,
      },
      13: {
        name: "Gai Phat Wunsen Huhn mit Glasnudeln, Gemüse und Ei",
        price: 8,
      },
      14: {
        name:
          "	Gai Phat Prig Sod (s) Huhn mit Peperoni, Zwiebeln und Champignons",
        price: 8,
      },
      15: {
        name: "Gai Phat Priew Wan Huhn süß-sauer mit Gemüse",
        price: 8,
      },
      16: {
        name: "Sen Jai Phat Gai Gebratene Reisnudeln mit Huhn, Gemüse und Ei",
        price: 8,
      },
      17: {
        name:
          "	Laab Gai (s) Gehacktes Huhn mit frischen Thai-Kräutern und Limettensaft",
        price: 8,
      },
    },
    pig: {
      18: {
        name:
          "	Gäng Kiowan Moo (s) Schweinefleisch mit grünem Curry, Kokosmilch und Gemüse",
        price: 8,
      },
      19: {
        name:
          "Gäng Kua Moo (s) Schweinefleisch mit rotem Curry, Kokosmilch und Kartoffeln",
        price: 8,
      },
      20: {
        name:
          "Gäng Pet Moo (s) Schweinefleisch mit rotem Curry, Kokosmilch und Gemüse",
        price: 8,
      },
      21: {
        name:
          "	Panäng Moo (s) Schweinefleisch mit rotem Curry, Kokosmilch, Limettenblätter, Champignons und Cashewnüssen",
        price: 8,
      },
      22: {
        name:
          "Moo Phat Pak Namman Hoi Schweinefleisch mit Gemüse in Austernsauce und Sellerie",
        price: 8,
      },
      23: {
        name: "Moo Phat Kink Schweinefleisch mit Ingwer und Gemüse",
        price: 8,
      },
      24: {
        name: "Moo Phat Priew Wan Schweinefleisch, süß-sauer mit Gemüse",
        price: 8,
      },
      25: {
        name:
          "Moo Phat Kratiam Prigthai Schweinefleisch in Knoblauch-Pfeffersauce und Gemüse",
        price: 8,
      },
      26: {
        name:
          "Moo Phat Ki Mao (s) Schweinefleisch mit rotem Curry, Peperoni und Bohnen",
        price: 8,
      },
      27: {
        name:
          "	Moo Phat Prig Sod (s) Schweinefleisch mit Peperoni, Zwiebeln und Champignons",
        price: 8,
      },
    },
    duck: {
      28: {
        name:
          "	Gäng Kiowan Ped (s) Ente mit grünem Curry, Kokosmilch und Gemüse",
        price: 10.5,
      },
      29: {
        name:
          "Gäng Kua Ped (s) Ente2 mit rotem Curry, Kokosmilch und Kartoffeln",
        price: 10.5,
      },
      30: {
        name:
          "Ped Phat Pet (s) Ente2 mit Knoblauch-Chilies, Bohnen und Basilikum",
        price: 10.5,
      },
      31: {
        name: "	Ped Phat Ki Mao (s) Ente2 mit rotem Curry, Peperoni und Bohnen",
        price: 10.5,
      },
      32: {
        name: "Ped Phat Priew Wan Ente2 süß-sauer mit Gemüse",
        price: 10.5,
      },
      33: {
        name: "Phat Ped Normei Ente2 mit Spargel, Gemüse und Austernsauce	",
        price: 10.5,
      },
      34: {
        name: "Khao Nah Ped Grob Ente2 mit Gemüse und Hausdressing",
        price: 10.5,
      },
      35: {
        name:
          "Gäng Pet Ped Grob (s) Ente2 mit rotem Curry, Kokosmilch und Gemüse",
        price: 10.5,
      },
    },

    squid: {
      36: {
        name:
          "Pla Mück Kratiam Prigthai Tintenfisch in Knoblauch-Pfeffersauce und Gemüse",
        price: 8.5,
      },
      37: {
        name:
          "	Pla Mück Phat Pak Namman Hoi Tintenfisch mit Gemüse in Austernsauce und Sellerie",
        price: 8.5,
      },
      38: {
        name: "	Pla Mück Phat Pet (s) Tintenfisch mit Chilies und Basilikum",
        price: 8.5,
      },
      39: {
        name:
          "	Pla Mück Phat Prig (s) Tintenfisch mit rotem Curry, Peperoni und Bohnen",
        price: 8.5,
      },
      40: {
        name:
          "Gäng Kiowan Pla Mück (s) Tintenfisch mit grünem Curry, Kokosmilch und Gemüse",
        price: 8.5,
      },
    },
  },
];

export default FOOD_DATA;
