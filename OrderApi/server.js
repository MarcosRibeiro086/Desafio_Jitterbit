require('dotenv').config();

const express = require('express');
const sequelize = require('./Config/Db');
const orderRoutes = require('./routes/OrderRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const app = express();

app.use(express.json());

app.use('/', orderRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync().then(() => {

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
    console.log("Swagger: http://localhost:3000/docs");
  });

});