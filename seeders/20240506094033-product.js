'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
        name: "The Legend of Zelda: Breath of the Wild",
        price: 59.99,
        genre: "Action-adventure",
        reference_number: "12543JA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Super Mario Odyssey",
        price: 59.99,
        genre: "Platformer",
        reference_number: "21265YR",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Red Dead Redemption 2",
        price: 59.99,
        genre: "Action-adventure",
        reference_number: "79361OW",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "God of War",
        price: 39.99,
        genre: "Action-adventure",
        reference_number: "28968TK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Witcher 3: Wild Hunt",
        price: 29.99,
        genre: "Action role-playing",
        reference_number: "92539PA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Minecraft",
        price: 19.99,
        genre: "Sandbox",
        reference_number: "65498LA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fortnite",
        price: 0,
        genre: "Battle royale",
        reference_number: "90257TF",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Call of Duty: Black Ops 4",
        price: 59.99,
        genre: "First-person shooter",
        reference_number: "09875UF",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Grand Theft Auto V",
        price: 29.99,
        genre: "Action-adventure",
        reference_number: "09287WN",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Overwatch",
        price: 39.99,
        genre: "First-person shooter",
        reference_number: "09766BV",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {

  }
};
