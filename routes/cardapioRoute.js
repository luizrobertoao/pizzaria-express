// adicionar pizza ao cardápio parâmetros -> nome da pizza e preço
// visualizar pizza unico

const express = require('express');
const router = express.Router();
const cardapioController = require('../controllers/cardapioController')
router.get('cadastrar/:sabor/:preco', (req, res) => {
    let {sabor} = req.params;
    let {preco} = req.params;
    res.send(`Pizza ${sabor} com valor R$${preco} foi adicionada ao cardápio.`);
});

router.get('/ver', cardapioController.listarCardapio)

module.exports = router;
