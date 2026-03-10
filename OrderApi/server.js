require('dotenv').config();

const express = require('express');
const sequelize = require('./Config/Db');

require('./Models'); // carrega associações

const orderRoutes = require('./routes/OrderRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const app = express();

app.use(express.json());

app.use('/orders', orderRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', (req, res) => {
  res.json({
    message: "Order API funcionando",
    docs: "http://localhost:3000/docs"
  });
});


const startServer = async () => {

  try {

    await sequelize.authenticate();

    console.log("Banco conectado");

    await sequelize.sync();

    console.log("Models sincronizados");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
      console.log("Swagger: http://localhost:3000/docs");
    });

  } catch (error) {

    console.error("Erro ao iniciar servidor:", error);

  }

};

startServer();