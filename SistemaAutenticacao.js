// Ser autenticavel significa ter o método autenticar

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutentivavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    //Função que irá validar se o objeto recebido poderá ser considerado autenticavel.
    static ehAutentivavel(autenticavel){ // função recebe o objeto que esta tentando autenticar(logar no sistema), ex: cliente, diretor, gerente etc..
        return "autenticar" in autenticavel && // valida se o objeto possui o método autenticar na sua estrutura do model
        autenticavel.autenticar instanceof Function // Aqui é especificado que deve procurar uma função chamada "autenticar" e não outro atributo do model do objeto
    }
}