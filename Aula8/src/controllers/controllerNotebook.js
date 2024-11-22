const {dataBaseNotebook} = require('../config/dataBaseNotebook');
const {Notebook} = require('../models/Notebook');

class ControllerNotebook{
    adicionarNotebook(numeroDeSerie, marca, modelo, cor, preco){
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco);
            dataBaseNotebook.push(novoNotebook);
            console.log("Notebook adicionado com sucesso!")
            return novoNotebook;
        } catch (error) {
            console.error("Erro ao adiconar notebook:", error.message);
        }
    }
    listarNotebook(){
        try {
            const notebooks = dataBaseNotebook.map(notebook => ({
                numeroDeSerie: notebook.getNumeroDeSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco
            }));
            console.table(notebooks);
        } catch (error) {
            console.error("Erro ao listar notebooks:", error.message);
        }
    }
    buscarNotebook(numeroDeSerie){
        try {
            const notebook = dataBaseNotebook.find(n => n.getNumeroDeSerie === numeroDeSerie);
            if (!notebook) {
                console.log("Notebook não encontrado!", numeroDeSerie);
                return;
            } 
            console.log("Notebook encontrado!");
            console.table({notebook});
            return notebook;
        } catch (error) {
            console.log("Erro ao buscar notebook!", error.message);
        }
    }
    editarNotebook(numeroDeSerie, novaMarca, novoModelo, novaCor, novoPreco){
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if (notebook) {
                notebook.marca = novaMarca;
                notebook.modelo = novoModelo;
                notebook.cor = novaCor;
                notebook.setPreco = novoPreco;
                return notebook;
            }
        } catch (error) {
            console.error("Erro ao editar notebook:", error.message);
        }
    }
    excluirNotebook(numeroDeSerie){
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if (notebook) {
                const index = dataBaseNotebook.findIndex(n => n.getNumeroDeSerie === numeroDeSerie);
                const notebookRemovido = dataBaseNotebook.slice(index,1);
                console.log("Notebook removido com sucesso!");
                return notebookRemovido;
            }
        } catch (error) {
            console.error("Erro ao remover o notebook", error.message);
        }
    }
    excluirTodosNotebooks(){
        try {
            if(dataBaseNotebook.length > 0) {
                dataBaseNotebook = []
            }
        } catch (error) {
            console.error("Erro ao remover todos os notebooks:", error.message);
        }
    }
}

module.exports = {ControllerNotebook};

// const controleNotebooks = new ControllerNotebook();
// controleNotebooks.adicionarNotebook("1234", "HP", "Gamer", "Verde", "12000");
