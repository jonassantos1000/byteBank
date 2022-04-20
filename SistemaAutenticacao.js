// Ser autenticavel significa ter o método autenticar

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutentivavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutentivavel(autenticavel){
        
    }
}