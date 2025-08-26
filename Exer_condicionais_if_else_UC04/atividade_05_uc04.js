import PromptSync from "prompt-sync";
const prompt = PromptSync()
let idade = Number = prompt("Qual é a sua idade: ")
let estudante = prompt("Você é estudante (sim ou nao): ")
if (idade <= 6 ) {
    console.log("-- Entrada gratuita --")
}if (idade > 6 && idade <= 17 && estudante === "sim") {
    console.log("-- Meia tarifa --")
}if (idade > 6 && idade <= 17 && estudante === "nao") {
    console.log("-- Tarifa inteira --")
}if (idade > 60) {
    console.log("-- Tarifa gratuita --")
}if (idade>18 && idade <=59 && estudante === "sim") {
    console.log("Meia tarifa")
} else if (idade>18 && idade <=59 && estudante === "nao") {
    console.log("Tarifa inteira")
}

    
