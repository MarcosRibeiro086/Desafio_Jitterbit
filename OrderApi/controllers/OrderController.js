const orderService = require('../services/OrderService');

exports.createOrder = async (req, res) => {

  try {

    const order = await orderService.createOrder(req.body);

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      error: "Erro ao criar pedido",
      details: error.message
    });

  }

};

exports.listOrders = async (req, res) => {

  try {

    const orders = await orderService.listOrders();

    res.json(orders);

  } catch (error) {

    res.status(500).json(error);

  }

};

exports.getOrder = async (req, res) => {

  try {

    const order = await orderService.getOrder(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json(order);

  } catch (error) {

    res.status(500).json(error);

  }

};

exports.updateOrder = async (req, res) => {

  try {

    await orderService.updateOrder(req.params.id, req.body.total);

    res.json({ message: "Pedido atualizado" });

  } catch (error) {

    res.status(500).json(error);

  }

};

exports.deleteOrder = async (req, res) => {

  try {

    await orderService.deleteOrder(req.params.id);

    res.json({ message: "Pedido removido" });

  } catch (error) {

    res.status(500).json(error);

  }

};