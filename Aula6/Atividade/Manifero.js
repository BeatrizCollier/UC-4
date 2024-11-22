const { Animal } = require('./Animal');

class Mamifero extends Animal{
    #tipoPelo;
    #habitat;

    constructor(nome, idade, tipoPelo, habitat){
        super(nome, idade);
        this.#tipoPelo = tipoPelo;
        this.#habitat = habitat;
        Object.freeze(this);
    }

    get getTipoPedo(){
        return this.#tipoPelo;
    }

    set setTipoPelo(valor){
        this.#tipoPelo = valor;
    }
    get getHabitat(){
        return this.#habitat;
    }

    set setHabitat(valor){
        this.#habitat = valor;
    }

    emitirSom(){
        console.log("O mamífero ruge ou grunhe");
    }
    getInfo(){
        console.log(`Nome: ${this.getNome}, idade: ${this.getIdade}, tipo de pelo: ${this.getTipoPedo} e habitat: ${this.getHabitat}`);
    }
}

module.exports = { Mamifero }