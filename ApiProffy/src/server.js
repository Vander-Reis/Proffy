const express = require('express');
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

const port = 5000;

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
})