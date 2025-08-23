import PromptSync from "prompt-sync";
const prompt = PromptSync()
console.log("-- Informe o tipo do seu carro --")
console.log("[1] MOTO ")
console.log("[2] CARRO ")
console.log("[3] CAMINHÃO")
let tipo = prompt("Qual o tipo do carro: ")
let tempo = Number = prompt("Informe o tempo de permanência: ")
if ((tempo <= 2 && tipo == "1") || (tempo <= 2 && tipo == "2") || (tempo <= 2 && tipo == "3")) {
    console.log("Tipo do carro ",tipo)
    console.log("valor da permanência: ")
} 