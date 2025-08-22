import PromptSync from "prompt-sync";
const prompt = PromptSync()
let tipo = prompt("Qual E o tipo do seu veículo: 1 = carro ")
let minutos = Number = prompt("Quanto foi o tempo de permanência: ")
let horas = Math.floor(minutos / 60)   // pega só a parte inteira -> 2
let minRestantes = minutos % 60        // pega o resto da divisão -> 30

//console.log(`${horas}:${minRestantes}`)
let carro = 12,caminhao = "caminhão", mot = "moto"
