const { Animal } = require('./Animal');

class Ave extends Animal{
    #tipoBico;
    #capacidadeDeVoo;

    constructor(nome, idade, tipoBico, capacidadeDeVoo){
        super(nome, idade);
        this.#tipoBico = tipoBico;
        this.#capacidadeDeVoo = capacidadeDeVoo;
        Object.freeze(this);
    }

    get getTipoBico(){
        return this.#tipoBico;
    }

    set setTipoBico(valor){
        this.#tipoBico = valor;
    }
    get getCapacidadeDeVoo(){
        return this.#capacidadeDeVoo;
    }

    set setCapacidadeDeVoo(valor){
        this.#capacidadeDeVoo = valor;
    }

    emitirSom(){
        console.log("A ave canta ou pia");
    }
    getInfo(){
        console.log(`Nome: ${this.getNome}, idade: ${this.getIdade}, tipo de bico ${this.getTipoBico} e capacidade de voo: ${this.getCapacidadeDeVoo}`);
    }
}

module.exports = { Ave }