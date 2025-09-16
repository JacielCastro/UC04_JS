import PromptSync from "prompt-sync";
const prompt = PromptSync()
import {Adicionando_Estoque} from "./Function.js";

let ad_Produto,menu,retorno;
let Consultar = [], listar_estoque = ['pão francês','bolo de chocolate','sonho','croissant','misto quente','queijo','presunto','café','suco de laranja','leite'],registrar_venda = [], valor_venda = [],relatorio = []
console.log("--> Menu de opções <--")
console.log("[0] = Sair\n[1] = Listar estoque\n[2] = Consultar produto\n[3] = Adicionar produto\n[4] = remover produto\n[5] = Registra vendas\n[6] = Relatório final")
menu = Number(prompt("Informe qual operações deseja realizar: "))
switch (menu) {
    case 0:
        console.log("Operação finalizada !!!");
        break;
    case 1:
        
    break;
    case 2:

    break;
    case 3:

        ad_Produto = prompt("Adicione os produtos no seu estoque --> ").toLowerCase()
        Adicionando_Estoque(ad_Produto,listar_estoque)
        console.log(retorno)  

    break;
    case 4:

    break;
    case 5:

    break;
    case 6:

    break;

    default:
        menu > 6
        console.log("Valor invalido, digiti um valor valido. ");
        
        break;
}