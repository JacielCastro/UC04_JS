// CALCULO DA SÉRIE DE FIBONACCI
import PromptSync from "prompt-sync";
const prompt= PromptSync()
let prox,ant = 0, atual = 1 
let serie= Number(prompt("Informe a quantidade da série de Fibonacci: "))
for (let i = 1; i <= serie; i++) {
    prox = ant + atual
    console.log("Segue os valores solicitados da série fibonacci --> ",prox)
    ant = atual
    atual = prox
}
