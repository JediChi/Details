'use strict';

module.exports = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('person', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        defaultValue: 'rather not say',
        allowNull: false,
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      status: {
        type: Sequelize.ENUM('blocked', 'disabled', 'active', 'inactive'),
        allowNull: false,
        defaultValue: 'active',
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/naming-convention
  async down(queryInterface) {
    await queryInterface.dropTable('person');
  },
};
