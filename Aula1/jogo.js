
class Jogo {
    titulo;
    genero;
    anoLancamento;
    constructor(titulo, genero, anoLancamento){
        this.titulo = titulo;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
    }
    //manipula os atributos: get- só retorna / set- altera,modifica o objeto
    getTitulo(){
        return this.titulo;
    }
    getGenero(){
        return this.genero;
    }
    getAnoLancamento(){
        return this.anoLancamento;
    }
    setTitulo(titulo){
        this.titulo = titulo;
    }
    setGenero(genero){
        this.genero = genero;
    }
    setAnoLancamento(anoLancamento){
        this.anoLancamento = anoLancamento;
    }
    exibirDados(){
        console.log(
            `Dados do Jogo \n
            Título: ${this.titulo}
            Genero: ${this.genero}
            Ano Lançamento: ${this.anoLancamento}
            `
        )
    }
}
//instaciar: transformar a classe no objeto
let jogo01 = new Jogo("Pac-Man", "Arcade", "1980");
let jogo02 = new Jogo("Tetris", "Puzzle", "1984");
let jogo03 = new Jogo("Super Mario Bros", "Plataforma", "1985");

jogo01.exibirDados();
jogo02.exibirDados();
jogo03.exibirDados();


