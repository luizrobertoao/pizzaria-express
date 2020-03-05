// requisitando o módulo do framework express para o arquivo.
const express = require('express');
// executando a função "master" dp ex´ress para poder utilizar os seus módulos.
const app = express();

// requisição dos módulos de rota contidos na pasta routes, um arquivo diferente para cada recurso.
const rotasUsuario = require('./routes/usuariosRoute');
let rotasCardapio = require('./routes/cardapioRoute');



app.get('/', (req, res) => res.send("Você está no sistema Pizzaria Express."));

app.get('/cardapio', (req, res) => res.send("Visualização do nosso cardápio."));

app.use('/usuarios', rotasUsuario);

app.use('/cardapio', rotasCardapio);

app.listen(3000, () => console.log("O Servidor está rodando!"));