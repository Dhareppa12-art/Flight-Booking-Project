'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      fields: ['city_id'],  // 👈 check exact column name
      type: 'FOREIGN KEY',
      name: 'city_fkey_constraint',
      references: {
        table: 'Cities',  // table name in DB
        field: 'id'       // primary key column in Cities table
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');
  }
};
