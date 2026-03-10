const Order = require('../Models/Order');
const Item = require('../Models/Item');

exports.createOrder = async (data) => {

  const total = data.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const order = await Order.create({
    customerName: data.customerName,
    total
  });

  for (const item of data.items) {

    await Item.create({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
    });

  }

  return order;

};

exports.listOrders = async () => {

  return await Order.findAll({
    include: Item
  });

};

exports.getOrder = async (id) => {

  return await Order.findByPk(id, {
    include: Item
  });

};

exports.updateOrder = async (id, value) => {

  return await Order.update(
    { total: value },
    { where: { id } }
  );

};

exports.deleteOrder = async (id) => {

  await Item.destroy({ where: { orderId: id } });

  await Order.destroy({ where: { id } });

};