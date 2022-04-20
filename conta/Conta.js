//classe abstrata(não pode ser instanciada)

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ("Não é possivel instanciar um objeto do tipo Conta");
        }
        this._saldo=saldoInicial;
        this._cliente=cliente;
        this._agencia=agencia;
    }

    //método abstrato
    sacar(valor){
        throw new Error("O metodo sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado= taxa*valor;
        if(valorSacado > this._saldo){
            return 0;
        }
        this._saldo -= valorSacado;
        return valorSacado;
    }

    depositar(valor){
        if(valor>0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado= this.sacar(valor);
        conta.depositar(valorSacado);
    }
}