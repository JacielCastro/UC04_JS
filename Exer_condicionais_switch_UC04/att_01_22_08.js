import PromptSync from "prompt-sync";
const prompt = PromptSync()
let dolar = 5.424, euro = 6.353, peso = 0.0042, libra = 7.326, franco = 6.753 
let real = prompt("Informe a quantidade de moedas em reais:  ")
console.log("[1] Dólar\n[2] Euro\n[3] Peso\n[4] Libra\n[5] Franco")
let moeda = Number( prompt("Informe qual a moeda de converção: "))
switch (moeda) {
    case 1:
        moeda = real * 5.424
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Dólar: ",moeda,"\n") 
        break;
    case 2:
        moeda = real * 6.353
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Euro: ",moeda,"\n")
        break;
    case 3:
        moeda = real * 0.0042
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Peso: ",moeda,"\n")
    case 4:
        moeda = real * 7.326
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Libra: ",moeda,"\n") 
    case 5:    
        moeda = real * 6.753
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Franco: ",moeda,"\n")
        break;
    default:
        moeda > 6
        console.log("\nValor invalido ...\n")
        break;
}