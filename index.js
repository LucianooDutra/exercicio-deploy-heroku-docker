const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002;

app.get('/', (_req, res) => {
  res.send(`<h1> Executando com mudança na porta: ${PORT} </h1>`);
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
