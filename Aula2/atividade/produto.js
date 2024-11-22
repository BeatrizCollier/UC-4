
class Produto {
    #nome;
    #preco;

    constructor(nome,preco){
        this.#nome = nome;
        this.#preco = preco;
        Object.freeze(this)
    }
    get getNome(){
        return this.#nome;
    }

    set setNome(nome){
        this.#nome = nome;
    }

    get getPreco(){
        return this.#preco
    }

    set setPreco(preco){
        this.#preco = preco;
    }

    infoProduto(){
        return (
            `Informações do produto: \n
            Nome: ${this.#nome}
            Preço: ${this.#preco}
            `
        )
    }
}


module.exports = { Produto };
