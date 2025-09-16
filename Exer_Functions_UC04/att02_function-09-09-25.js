
//EXERCÍCIO 01 --> ACADEMIA DESEJA QUANTOS CALORIAS UM ALUNO GASTA EM EXERCÍCIOS

import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Exercicios } from "./Function.js"

let calorias_Gastas,tempo_Exercicio, exercicio
console.log("Informe qual foi o seu Exercício --> caminhada, corrida ou bicicleta ...\n");
exercicio = prompt("Informe o exercício: ").toLowerCase()
tempo_Exercicio = Number(prompt("Informe o tempo de Exercício em minutos: "))
if (exercicio === "caminhada") {
    calorias_Gastas = Exercicios(calorias_Gastas,tempo_Exercicio)
}
if (exercicio === "corrida") {
   calorias_Gastas = Exercicios(calorias_Gastas,tempo_Exercicio)
}
if (exercicio === "bicicleta") {
    calorias_Gastas = Exercicios(calorias_Gastas,tempo_Exercicio)
}    
console.log(`As calorias gastas neste tempo foi --> ${calorias_Gastas} calorias\n`)