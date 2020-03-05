// adicionar pizza ao cardápio parâmetros -> nome da pizza e preço
// visualizar pizza unico

// requisição do módulo express
const express = require('express');
// armazenamento da execução do módulo Router
const router = express.Router();

// Requisitando o módulo controller da pasta /controllers arquivo cardapioController.js
const cardapioController = require('../controllers/cardapioController')

// rota direta, sem passar pelo controller
router.get('cadastrar/:sabor/:preco', (req, res) => {
    let {sabor} = req.params;
    let {preco} = req.params;
    res.send(`Pizza ${sabor} com valor R$${preco} foi adicionada ao cardápio.`);
});

// usando o controller para requisitar ao model Cardapio.js os dados desta rota.
router.get('/ver', cardapioController.abrirCardapio);

router.get('/ver/:sabor', cardapioController.detalhePizza);

module.exports = router;
