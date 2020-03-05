// simulando um BD
let cardapio = [{nome: 'calamussa', preço: 'R$30'},
                {nome: 'Frango com Catupiry', preco: 'R$35'}
            ];

function listarCardapio() {
    return cardapio;
};

function detalharPizza(pizza) {
    cardapio.map((objPizza) => {
        var falha = 'Pizza inexistente'
        switch(objPizza.nome) {
            case pizza:
                return objPizza;
                break;
            default:
                return falha;
        };
    });
};


module.exports = {listarCardapio, detalharPizza}