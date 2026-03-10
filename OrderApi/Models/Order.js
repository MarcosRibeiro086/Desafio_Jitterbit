const { DataTypes } = require('sequelize');
const sequelize = require('../Config/Db');

const Order = sequelize.define('Order', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  total: DataTypes.FLOAT

});

module.exports = Order;