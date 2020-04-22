const FOOD_DATA = [
  {
    soup: {
      1: {
        name: "Tom Kha Gai",
        additionalInfo:
          "Coconutmilk soup with chicken, thai-Herbs and mushrooms",
        price: 6,
      },
      2: {
        name: "Tom Yam Gung",
        additionalInfo:
          "Spicy shrimp soup with thai-herbs, mushrooms and celery",
        price: 6,
      },
      3: {
        name: "Mothers noudle soup with minced chicken and vegetables",
        additionalInfo: null,
        price: 5,
      },
      4: {
        name: "Tom Yam Gai ",
        additionalInfo:
          "Spicy soup with chicken, thai-herbs, mushrooms and celery",
        price: 5.5,
      },

      5: {
        name: "Gaeng Jued",
        additionalInfo: "Cellophane noodles with minced chicken and vegetables",
        price: 5.5,
      },
      6: {
        name:
          "Vegetarian mini spring rolls with sweet-and-sour sauce (10 piece)",
        additionalInfo: null,
        price: 4,
      },
    },
    chicken: {
      5: {
        name: "Gaeng Kio Wan Gai  ",
        additionalInfo: "Chicken with green curry, coconutmilk and vegetables",
        price: 8,
      },
      6: {
        name: "	Gaeng Kua Gai",
        additionalInfo: "Chicken with red curry, coconutmilk and potatoes",
        price: 8,
      },
      7: {
        name: "	Gaeng Pet Gai ",
        additionalInfo: "Chicken with red curry, coconutmilk and vegetables",
        price: 8,
      },
      8: {
        name: "Panaeng Gai",
        additionalInfo:
          "Chicken with red curry, coconutmilk, lime leaves, mushrooms and cashew nuts",
        price: 8,
      },
      9: {
        name: "Gai Pat Kink ",
        additionalInfo: "Chicken with fresh ginger, vegetables and celery",
        price: 8,
      },
      10: {
        name: "Gai Phat Bai Krapao ",
        additionalInfo: "Minced chicken with garlic-chilies, beans and basil",
        price: 8,
      },
      11: {
        name: "Gai Phat Kratiam Prigthai",
        additionalInfo: " Chicken in garlic pepper sauce and vegetables",
        price: 8,
      },
      12: {
        name: "Gai Phat Pak Namman Hoi ",
        additionalInfo: "Chicken with vegetables in oyster sauce and celery",
        price: 8,
      },
      13: {
        name: "Gai Phat Wunsen ",
        additionalInfo: "Chicken with cellophane noodles, vegetables and eggs",
        price: 8,
      },
      14: {
        name: "Gai Phat Prig Sod",
        additionalInfo: "Chicken with hot peppers, onions and mushrooms",
        price: 8,
      },
      15: {
        name: "Gai Phat Priew Wan",
        additionalInfo: "Chicken with sweet-and-sour sauce and vegetables",
        price: 8,
      },
      16: {
        name: "Sen Jai Phat Gai",
        additionalInfo:
          "Roasted rice noodles with chicken, vegetables and eggs",
        price: 8,
      },
      17: {
        name: "	Laab Gai Gehacktes",
        additionalInfo: "Chicken with fresh thai-herbs and lime juice",
        price: 8,
      },
    },
    pork: {
      18: {
        name: "	Gaeng Kiowan Moo",
        additionalInfo: "Pork with green curry, coconutmilk and vegetables",
        price: 8,
      },
      19: {
        name: "Gaeng Kua Moo",
        additionalInfo: "Pork with red curry, coconutmilk and potatoes",
        price: 8,
      },
      20: {
        name: "Gaeng Pet Moo",
        additionalInfo: "Pork with red curry, coconutmilk and vegetables",
        price: 8,
      },
      21: {
        name: "	Panaeng Moo",
        additionalInfo:
          "Pork with red curry, coconutmilk, lime leaves, mushrooms and cashew nuts",
        price: 8,
      },
      22: {
        name: "Moo Phat Pak Namman Hoi",
        additionalInfo: "Pork with vegetables in oyster sauce and celery",
        price: 8,
      },
      23: {
        name: "Moo Phat Kink",
        additionalInfo: "Pork with ginger and vegetables",
        price: 8,
      },
      24: {
        name: "Moo Phat Priew Wan",
        additionalInfo: "Pork with sweet-and-sour sauce and vegetables",
        price: 8,
      },
      25: {
        name: "Moo Phat Kratiam Prigthai",
        additionalInfo: "Pork in garlic-pepper sauce and vegetables",

        price: 8,
      },
      26: {
        name: "Moo Phat Ki Mao",
        additionalInfo: "Pork with red curry, hot pepper and beans",
        price: 8,
      },
      27: {
        name:
          "Moo Phat Prig Sod Schweinefleisch mit Peperoni, Zwiebeln und Champignons",
        additionalInfo: "Pork with hot pepper, onions and mushrooms",
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
