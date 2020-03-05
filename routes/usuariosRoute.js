// requisitando módulo express
const express = require('express');
// armazenando a execução do método Router
const router = express.Router();


// Definindo as rotas do recurso /usuarios

router.get('/', (req, res) => res.send('Olá, digite /seunome após a url desta página na barra de endereço.'))

// Saudação após o usuário digitar o nome na barra de endereços
router.get('/:nome', (req, res) => {
    let {nome} = req.params;
    res.send(`Seja bem vindo ${nome}`);
});

module.exports = router;