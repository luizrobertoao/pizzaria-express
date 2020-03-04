const express = require('express');
const app = express();
const rotasUsuario = require('./routes/usuariosRoute');
let rotasCardapio = require('./routes/cardapioRoute')

app.get('/', (req, res) => res.send("Você está no sistema Pizzaria Express."));

app.get('/cardapio', (req, res) => res.send("Visualização do nosso cardápio."));

app.use('/usuarios', rotasUsuario);

app.use('/cardapio', rotasCardapio);

app.listen(3000, () => console.log("O Servidor está rodando!"));