const prompt = require(`prompt-sync`)();
const { Produto } = require("./produto");
const { Pedido } = require("./pedido");

function adicionarProdutosAoPedido(){
    const pedido = new Pedido();
    while (true) {
        const nome = prompt("Digite o nome do produto ou 'sair' para finalizar: ");
        if(nome.toLowerCase() === 'sair') 
            break;
        const preco = parseFloat(prompt("Digite o preço do produto:"));
        if (isNaN(preco) || preco <= 0) {
            console.log("Preço inválido. Tente novamente!");
            continue;
        }
        const produto = new Produto(nome,preco);
        pedido.adicionarProduto(produto);
        console.log(`Produto "${produto.getNome}" adicionado com sucesso!`)
    }
    pedido.mostrarPedido();
}

adicionarProdutosAoPedido();






// const produto01 = new Produto("Bermuda", 60);
// const produto02 = new Produto("camisa", 80);
// const produto03 = new Produto("Tênis", 300);

// const pedido1 = new Pedido();
// pedido1.adicionarProduto(produto01);
// pedido1.adicionarProduto(produto03);

// pedido1.mostrarPedido();
