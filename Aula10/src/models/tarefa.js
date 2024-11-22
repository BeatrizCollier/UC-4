
class Tarefa {
    #descricao;
    #status;

    constructor(descricao, status){
        this.#descricao = descricao;
        this.#status = status;
    }

    get getDescricao(){
        return this.#descricao;
    };

    set setDescricao(descricao){
        this.#descricao = descricao;
    }

    get getStatus(){
        return this.#status;
    }

    set setStatus(status){
        this.#status = status;
    }

    getInfo(){
        console.log(`Tarefa: ${this.getDescricao}, Status: ${this.getStatus}`)
    }

    finalizarTarefa(){
        this.setStatus = 'Finalizada';
        console.log(`Sua tarefa ${this.getDescricao} foi finalizada com sucesso!`);
    }
}

module.exports = { Tarefa };

// const Tarefa01 = new Tarefa("Estudar JavaScript", "pendente");
// Tarefa01.getInfo(); // Tarefa: Estudar JavaScript, Status: Pendente

// Tarefa01.finalizarTarefa(); // Sua tarefa "Estudar JavaScript" foi finalizada com sucesso!

//  Tarefa01.getInfo(); //Tarefa: Estudar JavaScript, Status: Finalizada