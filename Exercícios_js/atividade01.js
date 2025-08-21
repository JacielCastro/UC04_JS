
import PromptSync from "prompt-sync"
const prompt = PromptSync()

let idade = prompt("Informe a sua idade em anos: ")
let calculo = 365, soma
soma = idade * calculo
console.log(`A sua idade no formato de dias --> ${soma} dias`)