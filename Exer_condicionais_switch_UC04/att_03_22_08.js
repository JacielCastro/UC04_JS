// UMA INVESTIGAÇÃO DE UM CRIME COM 5 PERGUNTA
import PromptSync from "prompt-sync"    
const prompt = PromptSync()
let entrevistado = 0,pergunta
console.log("--- Será realizado 5 perguntas sobre o acontecido. Por favor ! Responda somente SIM ou NÃO. ---")
pergunta = prompt("Telefonou para a vítima? ")
if (pergunta.toLowerCase() === "sim") {
    entrevistado++
}
pergunta = prompt("Esteve no local do crime? ")
if (pergunta.toLowerCase() === "sim") {
    entrevistado++    
}
pergunta = prompt("Mora perto da vítima? ")
if (pergunta.toLowerCase() === "sim") {
    entrevistado++
}
pergunta = prompt("Devia para a vítima? ")
if (pergunta.toLowerCase() === "sim") {
    entrevistado++
}
pergunta = prompt("Já trabalhou com a vítima? ")
if (pergunta.toLowerCase() === "sim") {
    entrevistado++
}
switch (entrevistado) {
    case 2:
        console.log("\n--> SUSPEITO\n")
    break;
    case 3:
    case 4:
        console.log("\n--> CÚMPLICE\n")
    break;
    case 5:
        console.log("\n--> ASSASSINO\n")
    break;
    default:
        console.log("\n--> INOCENTE\n")
        break;
}