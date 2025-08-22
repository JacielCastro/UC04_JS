import PromptSync from "prompt-sync";
const prompt = PromptSync()
let radar = prompt("Informe qual vai ser a velocidade permitida: ")
radar = Number(radar)
let velocidade = prompt("Informe a velocidade do carro: ")
velocidade = Number(velocidade)
let posentagem = radar*(10/100),soma = radar + posentagem 
if (velocidade === soma ) {  
    console.log (`\nA velocidade do radar é --> ${radar}\nvelocidade do carro --> ${velocidade}\n`)
    console.log(`Valor da velocidade --> ${velocidade} = Atenção: Até 10% acima do limite: Infração leve, com multa de R$ 130,16 e 4 pontos na CNH.\n`)
    if ( velocidade > soma ) {
    console.log("Valor da velocidade --> ",velocidade,"Entre 10% e 50% acima do limite: Infração grave, com multa de R$ 195,23 e 5 pontos na CNH.\n")
    }
}if (velocidade > soma) {
    console.log("Valor da velocidade --> ",velocidade,"= Entre 10% e 50% acima do limite: Infração grave, com multa de R$ 195,23 e 5 pontos na CNH.\n")
} else {
    console.log("\n-- Velocidade dentro do limite permitdo. --\n")    
}
