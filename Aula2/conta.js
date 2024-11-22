class conta{
    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
        Object.freeze(this)
    }
    //ações do método conta
    depositar(valor){
        if(valor>0){
            this.#saldo += valor;
        }
    }
    sacar(valor){
        if(valor >0 && valor <= this.#saldo){
            this.#saldo -= valor;
        }
    }

    get getSaldo(){
        return this.#saldo;
    }
}

const c1 = new conta(500);
console.log(c1.getSaldo);
// c1.depositar(500);
// console.log(c1.getSaldo);
// c1.sacar(200);
// console.log(c1.getSaldo);

// c1.saldo = 5000
// console.log(c1.saldo);