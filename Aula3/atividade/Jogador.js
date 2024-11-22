class Jogador {
    #nome;
    #aposta;

    constructor(nome, aposta){
        this.#nome = nome;
        this.#aposta = aposta;
        Object.freeze(this)
    }
    get getNome(){
        return this.#nome;
    }

    set setNome(nome){
        this.#nome = nome;
    }

    get getAposta(){
        return this.#aposta
    }

    set setAposta(aposta){
        this.#aposta = aposta;
    }
    apresentarDados(){
        console.log(`Nome do Jogador: ${this.getNome}, Aposta: ${this.getAposta}`);
    }

}

module.exports = { Jogador };


// const jogador1 = new Jogador("joao", 5);
// //console.log(jogador1.getNome);
// jogador1.apresentarDados();