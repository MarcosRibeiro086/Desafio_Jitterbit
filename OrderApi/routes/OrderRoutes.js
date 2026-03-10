const express = require('express');
const router = express.Router();
const controller = require('../controllers/OrderController');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API de pedidos
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Criar pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *                 example: Marcos
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: integer
 *                       example: 1
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *                     price:
 *                       type: number
 *                       example: 10
 *     responses:
 *       201:
 *         description: Pedido criado
 */
router.post('/', controller.createOrder);


/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Listar pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get('/', controller.listOrders);


/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 */
router.get('/:id', controller.getOrder);


/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Atualizar pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total:
 *                 type: number
 *                 example: 200
 *     responses:
 *       200:
 *         description: Pedido atualizado
 */
router.put('/:id', controller.updateOrder);


/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Remover pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido removido
 */
router.delete('/:id', controller.deleteOrder);


module.exports = router;