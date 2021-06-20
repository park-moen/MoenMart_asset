const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Product',
        tableName: 'products',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
};
