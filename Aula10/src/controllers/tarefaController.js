const { Tarefa } = require('../models/tarefa');
const { TarefasPessoais } = require('../models/tarefasPessoais');
const { TarefasProfissionais } = require('../models/tarefasProfissionais');

const { tarefasDataBase } = require('../config/dataBase');
//const tarefasDataBase = [];

class TarefaController {
    adicionarTarefa(descricao, tipo, status, prioridade, data){
        try {
            let tarefa;
            if (tipo.toLowerCase() === 'pessoal'){
                tarefa = new TarefasPessoais(descricao, status, prioridade, data);
            }else if(tipo.toLowerCase() === 'profissional'){
                tarefa = new TarefasProfissionais(descricao, status, prioridade, data);
            }else if(tipo.toLowerCase() === 'tarefa'){
                tarefa = new Tarefa(descricao, status);
            }else{
                console.log('Tipo de tarefa inválido');
                return;
            }
            tarefasDataBase.push(tarefa);
            console.log('Tarefa criada com sucesso!');
            
        } catch (error) {
            console.error("Erro ao criar tarefa:", error.message);
        }
    }

    listarTarefa(){
        try {
            if (tarefasDataBase.length > 0){
                console.log(' === Tarefas Registradas ===');
                tarefasDataBase.forEach((tarefa, index) => {
                    console.log(`Tarefa ${index + 1}`);
                    tarefa.getInfo();
                });
            } else{
                console.log('Nenhuma tarefa registrada');
            }
        } catch (error) {
            console.error("Erro ao listar tarefa:", error.message);
        }
    }
    listarTarefasPessoais() {
        try {
            const tarefasPessoais = tarefasDataBase.filter(tarefa => tarefa instanceof TarefasPessoais);
            if (tarefasPessoais.length > 0) {
                console.log(' === Tarefas Pessoais ===');
                tarefasPessoais.forEach((tarefa, index) => {
                    console.log(`Tarefa ${index + 1}`);
                    tarefa.getInfo();
                });
            } else {
                console.log('Nenhuma tarefa pessoal registrada.');
            }
        } catch (error) {
            console.error("Erro ao listar tarefas pessoais:", error.message);
        }
    }
    
    listarTarefasProfissionais() {
        try {
            const tarefasProfissionais = tarefasDataBase.filter(tarefa => tarefa instanceof TarefasProfissionais);
            if (tarefasProfissionais.length > 0) {
                console.log(' === Tarefas Profissionais ===');
                tarefasProfissionais.forEach((tarefa, index) => {
                    console.log(`Tarefa ${index + 1}`);
                    tarefa.getInfo();
                });
            } else {
                console.log('Nenhuma tarefa profissional registrada.');
            }
        } catch (error) {
            console.error("Erro ao listar tarefas profissionais:", error.message);
        }
    }
    

    buscarId(indice){
        if(tarefasDataBase.length >= indice -1){
            return true;
        }
            return false;
    }

    editarTarefa(indice, novaDescricao, novoStatus, novaPrioridade, novaData){
        try {
            const tarefa = tarefasDataBase[indice - 1];
            if (tarefa) {
                tarefa.setDescricao = novaDescricao || tarefa.getDescricao;
                tarefa.setStatus = novoStatus || tarefa.getStatus;
                tarefa.setPrioridade = novaPrioridade || tarefa.getPrioridade;
                tarefa.setData = novaData || tarefa.getData;
                console.log('Tarefa editada com sucesso!')
            }else{
                console.log('Não foi possível editar a tarefa!')
            }
        } catch (error) {
            console.error('Erro ao editar tarefa', error.message);
        }

     }

    finalizarTarefa(indice){
        const tarefa = tarefasDataBase[indice - 1];
        if (tarefa) {
            tarefa.finalizarTarefa();
        }
    }

    excluirTarefa(indice){
        try {
            if (indice < 1 || indice > tarefasDataBase.length) {
                console.log('Erro: Tarefa não encontrada para exclusão.');
                return;
            }
            tarefasDataBase.splice(indice - 1, 1);
            console.log('Tarefa excluída com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir tarefa', error.message);
        }
     }

}
module.exports = { TarefaController }

