const { Order, Item } = require('../Models');

exports.createOrder = async (data) => {

  const transaction = await Order.sequelize.transaction();

  try {

    const total = data.items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);

    const order = await Order.create(
      {
        customerName: data.customerName,
        total
      },
      { transaction }
    );

    const items = data.items.map(item => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
    }));

    await Item.bulkCreate(items, { transaction });

    await transaction.commit();

    return await Order.findByPk(order.id, {
      include: Item
    });

  } catch (error) {

    await transaction.rollback();
    throw error;

  }

};


exports.listOrders = async () => {

  return await Order.findAll({
    include: Item,
    order: [['id', 'DESC']]
  });

};


exports.getOrder = async (id) => {

  return await Order.findByPk(id, {
    include: Item
  });

};


exports.updateOrder = async (id, total) => {

  const order = await Order.findByPk(id);

  if (!order) {
    throw new Error("Pedido não encontrado");
  }

  order.total = total;

  await order.save();

  return order;

};


exports.deleteOrder = async (id) => {

  const order = await Order.findByPk(id);

  if (!order) {
    throw new Error("Pedido não encontrado");
  }

  await Item.destroy({
    where: { orderId: id }
  });

  await order.destroy();

  return true;

};