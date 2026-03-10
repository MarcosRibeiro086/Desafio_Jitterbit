# Desafio_Jitterbit

# Order API

API REST para gerenciamento de pedidos e itens de pedido.

A aplicação foi desenvolvida utilizando **Node.js**, **Express** e **Sequelize** com banco de dados **PostgreSQL**.
A documentação dos endpoints é gerada automaticamente através do **Swagger**.

---

# Tecnologias Utilizadas

* Node.js
* Express.js
* Sequelize ORM
* PostgreSQL
* Swagger UI
* dotenv

---

# Estrutura do Projeto

```
OrderApi
│
├── Config
│   └── Db.js
│
├── Controllers
│   └── OrderController.js
│
├── Models
│   ├── Order.js
│   ├── Item.js
│   └── index.js
│
├── Services
│   └── OrderService.js
│
├── Routes
│   └── OrderRoutes.js
│
├── Docs
│   └── swagger.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

# Instalação do Projeto

Clone o repositório:

```
git clone <url-do-repositorio>
```

Entre na pasta do projeto:

```
cd OrderApi
```

Instale as dependências:

```
npm install
```

Dependências utilizadas:

```
npm install express sequelize pg pg-hstore dotenv swagger-ui-express swagger-jsdoc
```

---

# Configuração do .env

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=order_api
DB_USER=usuario
DB_PASSWORD=senha
```

---

# Script SQL do Banco de Dados

Criar banco de dados:

```sql
CREATE DATABASE order_api;
```

Conectar ao banco:

```sql
\c order_api
```

Criar tabela de pedidos:

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    total NUMERIC,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Criar tabela de itens:

```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER,
    quantity INTEGER,
    price NUMERIC,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_order
        FOREIGN KEY(order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE
);
```

---

# Executar o Projeto

Rodar o servidor:

```
node server.js
```

ou com reload automático:

```
npm install nodemon --save-dev
```

```
npx nodemon server.js
```

---

# Documentação da API

Após iniciar o servidor, a documentação estará disponível em:

```
http://localhost:3000/docs
```

Interface gerada com **Swagger** permitindo testar os endpoints diretamente pelo navegador.

---

# Endpoints Disponíveis

### Criar pedido

POST `/api/orders`

Exemplo de request:

```
{
  "customerName": "Marcos",
  "items": [
    {
      "productId": 1,
      "quantity": 2,
      "price": 10
    }
  ]
}
```

---

### Listar pedidos

GET `/api/orders`

---

### Buscar pedido por ID

GET `/api/orders/{id}`

---

### Atualizar pedido

PUT `/api/orders/{id}`

```
{
  "total": 200
}
```

---

### Remover pedido

DELETE `/api/orders/{id}`

---

# Autor

Marcos Ribeiro
