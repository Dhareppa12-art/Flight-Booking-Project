'use strict';

const airplane = require('../models/airplane');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Seats', [
    {
     airplaneId:1,
     row: 1,
     col: 'A',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 1,
     col: 'B',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 1,
     col: 'C',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 1,
     col: 'D',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 1,
     col: 'E',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
     {
     airplaneId:1,
     row: 1,
     col: 'F',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
     {
     airplaneId:1,
     row: 2,
     col: 'A',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 2,
     col: 'B',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 2,
     col: 'C',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 2,
     col: 'D',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
    {
     airplaneId:1,
     row: 2,
     col: 'E',
     CreatedAt: new Date(),
     updatedAt: new Date()
    },
     {
     airplaneId:1,
     row: 2,
     col: 'F',
     CreatedAt: new Date(),
     updatedAt: new Date()
    }
   ]);
  }, 

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
