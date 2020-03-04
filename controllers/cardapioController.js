const Cardapio = require('../models/Cardapio')

let cardapioController = {
    listarCardapio: (req, res) => {
        let pizzas = Cardapio.listarCardapio()
    res.send(pizzas)
    }
}

module.exports = cardapioController;