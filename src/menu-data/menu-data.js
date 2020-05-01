const MENU_DATA = [
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
  },
  {
    chicken: {
      5: {
        name: "Gaeng Kio Wan Gai",
        additionalInfo: "Chicken with green curry, coconutmilk and vegetables",
        price: 8,
      },
      6: {
        name: "Gaeng Kua Gai",
        additionalInfo: "Chicken with red curry, coconutmilk and potatoes",
        price: 8,
      },
      7: {
        name: "Gaeng Pet Gai ",
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
        name: "Gai Pat Kink",
        additionalInfo: "Chicken with fresh ginger, vegetables and celery",
        price: 8,
      },
      10: {
        name: "Gai Phat Bai Krapao",
        additionalInfo: "Minced chicken with garlic-chilies, beans and basil",
        price: 8,
      },
      11: {
        name: "Gai Phat Kratiam Prigthai",
        additionalInfo: " Chicken in garlic pepper sauce and vegetables",
        price: 8,
      },
      12: {
        name: "Gai Phat Pak Namman Hoi",
        additionalInfo: "Chicken with vegetables in oyster sauce and celery",
        price: 8,
      },
      13: {
        name: "Gai Phat Wunsen",
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
        name: "Laab Gai",
        additionalInfo: "Chicken with fresh thai-herbs and lime juice",
        price: 8,
      },
    },
  },
  {
    pork: {
      18: {
        name: "Gaeng Kiowan Moo",
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
        name: "Panaeng Moo",
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
        name: "Moo Phat Prig Sod",
        additionalInfo: "Pork with hot pepper, onions and mushrooms",
        price: 8,
      },
    },
  },
  {
    duck: {
      28: {
        name: "Gaeng Kiowan Ped",
        additionalInfo: "Duck with green curry, coconutmilk and vegetables",
        price: 10.5,
      },
      29: {
        name: "Gaeng Kua Ped",
        additionalInfo: "Duck with red curry, coconutmilk and potatoes",
        price: 10.5,
      },
      30: {
        name: "Ped Phat Pet",
        additionalInfo: "Duck with garlic, chilies, beans and basil",
        price: 10.5,
      },
      31: {
        name: "Ped Phat Ki Mao",
        additionalInfo: "Duck with red curry, hot pepper and beans",
        price: 10.5,
      },
      32: {
        name: "Ped Phat Priew Wan",
        additionalInfo: "Duck with sweet-sour sauce and vegetables",
        price: 10.5,
      },
      33: {
        name: "Phat Ped Normei",
        additionalInfo: "Duck with asparagus, vegetables and oyster sauce",
        price: 10.5,
      },
      34: {
        name: "Khao Nah Ped Grob",
        additionalInfo: "Duck with vegetables and house made dressing",
        price: 10.5,
      },
      35: {
        name: "Gaeng Pet Ped Grob",
        additionalInfo: "Duck with red curry, coconutmilk and vegetables",
        price: 10.5,
      },
    },
  },
  {
    squid: {
      36: {
        name: "Pla Mueck Kratiam Prik Thai",
        additionalInfo: "Squid with garlic-pepper sauce and vegetables",
        price: 8.5,
      },
      37: {
        name: "Pla Mueck Phat Pak Namman Hoi",
        additionalInfo: "Squid with vegetables in oyster sauce and celery",

        price: 8.5,
      },
      38: {
        name: "Pla Mueck Phat Pet",
        additionalInfo: "Squid with chilies and basil",

        price: 8.5,
      },
      39: {
        name: "Pla Mueck Phat Prig",
        additionalInfo: "Squid with red curry, hot pepper and beans",
        price: 8.5,
      },
      40: {
        name: "Gaeng Kiowan Pla Mueck ",
        additionalInfo: "Squid with green curry, coconutmilk and vegetables",
        price: 8.5,
      },
    },
  },
];

export default MENU_DATA;
