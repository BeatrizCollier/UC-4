const { Dado } = require('./Dado');
const { Jogador } = require('./Jogador');


class SistemaAzar{
    #dado
    #jogador
    
    constructor(dado, jogador){
        if(dado instanceof Dado && jogador instanceof Jogador){
            this.#dado = dado
            this.#jogador = jogador        
        } else {
            console.log("Somente dados de jogador e dado podem ser adicionados!")
        }
        Object.freeze(this)
    }

    get getDado(){
        return this.#dado;
    }
    set setDado(dado){
        this.#dado = dado;
    }
    get getJogador(){
        return this.#jogador;
    }
    set setJogador(jogador){
        this.#jogador = jogador;
    }
    
    verificarGanhador(){
        if(this.#dado.getFace === this.#jogador.getAposta){
            console.log(`Parabéns, você ganhou! Resultado do jogo: ${this.#dado.getFace}`);
            this.#jogador.apresentarDados();
        } else {
            console.log(`Que pena, você perdeu. Faça uma nova aposta! Resultado do sistema: ${this.#dado.getFace}`);
            this.#jogador.apresentarDados();
        }
    }   
}

module.exports = { SistemaAzar };