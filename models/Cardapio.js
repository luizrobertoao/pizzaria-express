// simulando um BD
let cardapio = [{nome: 'calamussa', preço: 'R$30'},
                {nome: 'Frango com Catupiry', preco: 'R$35'}
            ];

function listarCardapio() {
    return cardapio;
};

function detalharPizza(pizza) {
    var saborEscolhido = cardapio.map((objPizza) => {
        var falha = 'Pizza inexistente'
        switch(objPizza.nome) {
            case pizza:
                return objPizza;
                break;
        };
    });
    return saborEscolhido[0];
};


module.exports = {listarCardapio, detalharPizza}