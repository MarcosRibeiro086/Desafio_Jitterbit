const Order = require('./Order');
const Item = require('./Item');

Order.hasMany(Item, {
  foreignKey: 'orderId'
});

Item.belongsTo(Order, {
  foreignKey: 'orderId'
});

module.exports = {
  Order,
  Item
};