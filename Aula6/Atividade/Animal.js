class Animal {
    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
        Object.freeze(this);
    }
    get getNome(){
        return this.#nome
    }

    set setNome(valor){
        this.#nome = valor;
    }
    get getIdade(){
        return this.#idade
    }

    set setIdade(valor){
        this.#idade = valor;
    }

    emitir(){
        console.log("O animal emite um som genérico");
    }
    getInfo(){
        console.log(`Nome: ${this.getNome}, idade: ${this.getIdade}`);
    }
}

module.exports = { Animal }