const { ControllerNotebook } = require('../controllers/controllerNotebook');

//Instanciando o controller notebooks
const notebookController = new ControllerNotebook();

//Testando o CRUD para Notebook
//1 - criando notebook
console.log(" === Criando Notebooks ===");
notebookController.adicionarNotebook('1234', 'Dell', 'Inspirion', 'Prata', 4000);
notebookController.adicionarNotebook('1245', 'Positivo', 'Travando', 'Preto', 2500);

//2 - listar os notebook
console.log("=== Listando Notebooks ===");
notebookController.listarNotebook();

// // //3 - Buscando um notebook pelo número de série
// console.log("=== Buscando um notebook pelo número de série ===");
// notebookController.buscarNotebook('1234');

//4 - Atualizando um notebook
console.log("=== Atualizando um notebook ===");
notebookController.editarNotebook('12345', 'Dell', 'XPS', 'Branco', '40000');

//5 - Removendo um notebook
console.log("=== Removendo um notebook ===")
notebookController.excluirNotebook('1245');
