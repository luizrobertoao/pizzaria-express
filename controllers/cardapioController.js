const Cardapio = require('../models/Cardapio')

let cardapioController = {
    abrirCardapio: (req, res) => {
        let pizzas = Cardapio.listarCardapio()
    res.send(pizzas);
    },
    detalhePizza: (req, res) => {
        var sabor = req.params.sabor;
        let detalhe = Cardapio.detalharPizza(sabor)
        res.send(detalhe);
    } 
    }

module.exports = cardapioController;