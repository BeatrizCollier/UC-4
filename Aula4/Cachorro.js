const { Animal } = require('./Animal');

class Cachorro extends Animal{
    #raca

    constructor(nome, raca){
        super(nome)
        this.#raca = raca;
    }

    emitirSom(){
        console.log(`Meu nome é ${this.getNome}, sou da raça ${this.#raca} e faço auau!`)
    }
}

module.exports = {Cachorro}