import PromptSync from "prompt-sync"
const prompt = PromptSync()

export function Exercicios(){ // exportando a função
    let caminhada = 5
    let corrida = 10
    let bicicleta = 8
    let calorias_Gastas,tempo_Exercicio, exercicio
    console.log("Informe qual foi o seu Exercício --> caminhada, corrida ou bicicleta ...\n");
    exercicio = prompt("Informe o exercício: ").toLowerCase()
    tempo_Exercicio = Number(prompt("Informe o tempo de Exercício em minutos: "))
    if (exercicio === "caminhada") {
        calorias_Gastas = tempo_Exercicio * caminhada
    }
    if (exercicio === "corrida") {
        calorias_Gastas = tempo_Exercicio * corrida
    }
    if (exercicio === "bicicleta") {
        calorias_Gastas = tempo_Exercicio * bicicleta
    }    
    console.log(`As calorias gastas neste tempo foi --> ${calorias_Gastas} calorias\n`)
}

//===========================================================================================

export function Deposito(saldo_atual,valor_deposito) {
    saldo_atual = saldo_atual + valor_deposito
    return saldo_atual
}
export function Saque_Conta(saldo_atual,valor_saque) {
    saldo_atual = saldo_atual - valor_saque
    return saldo_atual
}


