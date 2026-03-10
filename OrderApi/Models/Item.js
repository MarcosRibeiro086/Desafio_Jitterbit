const { DataTypes } = require('sequelize');
const sequelize = require('../Config/Db');

const Item = sequelize.define('Item', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  productId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  price: DataTypes.FLOAT

});

module.exports = Item;