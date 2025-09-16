import PromptSync from "prompt-sync"
const prompt = PromptSync()

// funç~esdo exercícios 01
export function Exercicios(calorias_Gastas,tempo_Exercicio){ // exportando a função com dois parâmitros
    // criando variavel 
    let caminhada = 5
    let corrida = 10
    let bicicleta = 8
    // Realizando a multiplicação
    calorias_Gastas = tempo_Exercicio * caminhada
    calorias_Gastas = tempo_Exercicio * corrida
    calorias_Gastas = tempo_Exercicio * bicicleta
    return calorias_Gastas

}
//===========================================================
// funções do exercício 02 
export function Deposito(saldo_atual,valor_deposito) {
    saldo_atual = saldo_atual + valor_deposito
    return saldo_atual
}
export function Saque_Conta(saldo_atual,valor_saque) {
    saldo_atual = saldo_atual - valor_saque
    return saldo_atual
}
//===========================================================
// funções do exercícios 03
export function Adicionando_Estoque (ad_Produto,listar_estoque) { 
    listar_estoque.push(ad_Produto)
    return listar_estoque
}
export function Consulta_Estoque () {
    for (let index = 0; index < array.length; index++) {
        
        
    }

}
// export Vendas =() => {

// }
// export Relatorio =() => {

// }


