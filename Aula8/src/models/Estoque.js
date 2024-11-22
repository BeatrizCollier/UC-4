const { Notebook } = require('../models/Notebook');

class Estoque {
    #id
    produto
    quantidade
    
    constructor(id, produto, quantidade){
        try {
            if(produto instanceof Notebook){
                this.#id = id;
                this.produto = produto;
                this.quantidade = quantidade;
            }
        } catch(error){
            console.log('Não é permitido criar Estoque!', error.message);
        }     
    }  
    get getId(){
        return this.#id;
    }
    set setId(novoId){
        this.#id = novoId;
    }

    
}
module.exports = { Estoque };