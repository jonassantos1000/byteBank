import {Cliente} from "./Cliente.js";
import { Diretor } from "./funcionario/diretor.js";
import { Gerente } from "./funcionario/gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12345678911);
const cliente= new Cliente("lais",123456789,"321")

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("123");

const diretorEstaLogado= SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado= SistemaAutenticacao.login(gerente, "123");



const clienteEstaLogado = SistemaAutenticacao.login(cliente,"321")


console.log("diretor ",diretorEstaLogado);
console.log("gerente ",gerenteEstaLogado);
console.log("cliente ", clienteEstaLogado);