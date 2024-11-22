const { Cliente } = require('./Cliente');

class ClientePJ extends Cliente{
    #cnpj

    constructor(nome, dataNascimento, telefone, email, cnpj){
        super(nome, dataNascimento, telefone, email);
        this.#cnpj = cnpj;
    }
    get getCnpj(){
        return this.#cnpj;
    }
    set setCnpj(cnpj){
        this.#cnpj = cnpj;
    }
   

}
module.exports = { ClientePJ };