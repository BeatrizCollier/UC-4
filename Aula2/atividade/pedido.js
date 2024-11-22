const { Produto } = require('./produto');

class Pedido{
    #produtos

    constructor(){
        this.#produtos = [];
        Object.freeze(this)
    }
    adicionarProduto(novoProduto){
        if(novoProduto instanceof Produto){
            this.#produtos.push(novoProduto)
        } else {
            console.log("Somente objetos do tipo produto podem ser adicionados!")
        }
    }
    mostrarPedido(){
        console.log("Resumo do Pedido:")
        this.#produtos.forEach(produto =>{
            console.log(produto.infoProduto());
        })
        console.log(`Total = ${this.calcularTotal()}`)
    }
    calcularTotal(){
        return this.#produtos.reduce((total, produto) => total + produto.getPreco, 0);
    }
}

module.exports = { Pedido };