const prompt = require(`prompt-sync`)();
const { Dado } = require("./Dado");
const { Jogador } = require("./Jogador");
const { SistemaAzar } = require("./SistemaAzar");

function executar(){
    let novoTurno = '';
    console.log("Bem vindo ao Sistema Azar!");
    do {
        const nome = prompt("Digite o nome do jogador:");
        const aposta = prompt("Digite a sua aposta, valor de 1 a 6:");
        const lance = new Dado();
        const jogador01 = new Jogador(nome, aposta);
        const tigrinho = new SistemaAzar(lance, jogador01);
        tigrinho.verificarGanhador();
        novoTurno = prompt("Digite 'S' para fazer uma nova aposta ou 'N' para sair: ");

    } while(novoTurno !== 'N'); 
    console.log("Até Logo!");

}
executar();



//TESTE SEM PROMPT
// const lance = new Dado();
// const jogador01 = new Jogador(`Jorel`, 2);
// const tigrinho = new SistemaAzar(lance, jogador01);

// tigrinho.verificarGanhador();

