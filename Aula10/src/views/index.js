const prompt = require('prompt-sync')();
const { TarefaController } = require('../controllers/tarefaController');

const controller = new TarefaController();

function iniciarSistema() {
    let opcao;
    do {
        console.log('=== Gerenciamento de Tarefas ===');
        console.log('1 - Adicionar Tarefa ');
        console.log('2 - Listar todas as tarefas ');
        console.log('3 - Editar tarefa ');
        console.log('4 - Finalizar uma tarefa ');
        console.log('5 - Excluir tarefa ');
        console.log('6 - Relatório das tarefas pessoais ');
        console.log('7 - Relatório das tarefas profissionais ');
        console.log('0 - Sair do sistema');
        opcao = prompt('Escolha uma opção (0 a 7): ');

        switch (opcao) {
            case '0':
                console.log('Saindo do sistema...');
                break;
            case '1':
                adicionarTarefa();
                break;
            case '2':
                controller.listarTarefa();
                break;
            case '3':
                editarTarefa();
                break;
            case '4':
                finalizarTarefa();
                break;
            case '5':
                excluirTarefa();
                break;
            case '6':
                controller.listarTarefasPessoais();
                break;
            case '7':
                controller.listarTarefasProfissionais();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
        }
    } while (opcao !== '0');
}

function adicionarTarefa(){
    const descricao = prompt('Informe a descrição da tarefa: ');
    const tipo = prompt('Informe o tipo da tarefa (Pessoal, Profissional ou Tarefa): ');
    const status = prompt('Informe o status da tarefa (Pendente ou Finalizada): ');
    const prioridade = prompt('Informe a prioridade da tarefa: ');
    const data = prompt('Informe a data da tarefa: ');

    controller.adicionarTarefa(descricao, tipo, status, prioridade, data);
}

function editarTarefa(){
    controller.listarTarefa();
    const indice = parseInt(prompt('Digite o número da tarefa que você deseja editar: '))
    const result = controller.buscarId(indice);
    if (result) {
        console.log('Informe os novos dados (pressione Enter se quiser manter o valor atual): ')
        const novaDescricao = prompt('Digite a nova descrição: ');
        const novoStatus = prompt('Digite o novo status: ');
        const novaPrioridade = prompt('Digite a nova prioridade: ');
        const novaData = prompt('Digite a nova data: ');

            controller.editarTarefa(indice, novaDescricao, novoStatus, novaPrioridade, novaData);
    } else {
        console.log('Informe um número válido!');
    } 
}

function finalizarTarefa(indice){
    controller.listarTarefa();
    indice = parseInt(prompt('Digite o número da tarefa que você deseja finalizar: '));
    controller.finalizarTarefa(indice);
}

function excluirTarefa(){
    controller.listarTarefa();
    const indice = parseInt(prompt('Digite o número da tarefa que deseja excluir: '));
    if (isNaN(indice) || indice <= 0) {
        console.log('Número inválido! Escolha um número válido!');
        return;
    }

    controller.excluirTarefa(indice);
}


iniciarSistema();