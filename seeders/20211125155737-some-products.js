'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Catan",
          price: 30,
          description: "Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan",
          imageUrl: "https://cdn.webshopapp.com/shops/203114/files/310850791/kolonisten-van-catan-basisspel-10.jpg",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monopoly",
          price: 25,
          description: "Monopoly is a multi-player economics-themed board game. In the game, players roll two dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, with the goal being to drive them into bankruptcy.",
          imageUrl: "https://www.hasbro.com/common/productimages/nl_BE/8ee05ccf6d4010148bf09efbf894f9d4/82848605032cdbd1743367d8a68ad8c058494ff0.jpg",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ubongo",
          price: 29,
          description: "Ubongo is a board game developed by Polish-born Swedish game designer Grzegorz Rejchtman. It originally appeared as Pyramidens Portar by the Swedish publisher Kärnan and won the Swedish Årets spel prize in 2003.",
          imageUrl: "https://cdn.shopify.com/s/files/1/0540/7929/1566/products/UbongoBox.jpg",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gloomhaven",
          price: 150,
          description: "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins.",
          imageUrl: "https://www.mightycollectibles.com.au/wp-content/uploads/2021/02/Gloomhaven-Mighty-Set.png",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPad",
          price: 499,
          description: "bla-bla",
          imageUrl: "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/1/image/519x/9df78eab33525d08d6e5fb8d27136e95/i/p/ipadair2020-en.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        
        {
          name: "Christmas Cactus",
          price: 10,
          description: "bla-bla",
          imageUrl: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-christmas-cactus-schlumbergera-succulent-plant-1_525x700.jpg?v=1636462395",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },       
        {
          name: "Badminton Rackets",
          price: 26,
          description: "bla-bla",
          imageUrl: "https://m.media-amazon.com/images/I/6159gbu7dNL._SX522_.jpg",
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },       
        {
          name: "Dress",
          price: 99,
          description: "bla-bla",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/31hEz9W%2BznL.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lord of the Rings - Trilogy",
          price: 49,
          description: "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
          imageUrl: "https://i2.wp.com/www.raptisrarebooks.com/images/79753/the-lord-of-the-rings-trilogy-the-fellowship-jrr-tolkien-first-edition-original-dust-jackets.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Harry Potter - Collection",
          price: 79,
          description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
          imageUrl: "https://ph-live-05.slatic.net/p/8e52b4efdc6a09773e9d132c02b43eb8.jpg_720x720q80.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Witcher - Collection",
          price: 55,
          description: "The Witcher is a series of six fantasy novels and 15 short stories written by Polish author Andrzej Sapkowski. The series revolves around the eponymous 'witcher' Geralt of Rivia. In Sapkowski's works, 'witchers' are beast hunters who develop supernatural abilities at a young age to battle wild beasts and monsters.",
          imageUrl: "https://cdn.shopify.com/s/files/1/0274/6482/6995/products/Witcher8bksBOXSET-1.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Chronicles of Narnia - Collection",
          price: 50,
          description: "The Chronicles of Narnia is a series of seven fantasy novels by British author C. S. Lewis. Illustrated by Pauline Baynes and originally published between 1950 and 1956, The Chronicles of Narnia has been adapted for radio, television, the stage, film and computer games.",
          imageUrl: "https://laz-img-sg.alicdn.com/p/658eef7e636aa37f795972ebbbaa211a.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Name of the Wind",
          price: 10,
          description: "The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
          imageUrl: "https://www.whitcoulls.co.nz/content/products/49/75/5637549_80.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
