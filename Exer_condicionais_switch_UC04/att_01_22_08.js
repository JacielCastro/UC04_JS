// UM CONVERSOU DE MOEDAS.
import PromptSync from "prompt-sync";
const prompt = PromptSync()
let dolar = 5.424, euro = 6.353, peso = 0.0042, libra = 7.326, franco = 6.753 
let real = Number(prompt("Informe a quantidade de moedas em reais:  "))
console.log("[1] Dólar\n[2] Euro\n[3] Peso\n[4] Libra\n[5] Franco")
let moeda = Number( prompt("Informe qual a moeda de converção: "))
switch (moeda) {
    case 1:
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Dólar: ",(real/dolar).toFixed(2),"\n") 
        break;
    case 2:
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Euro: ",(real/euro).toFixed(2),"\n")
        break;
    case 3:
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Peso: ",(real/peso).toFixed(2),"\n")
    break;
    case 4:
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Libra: ",(real/libra).toFixed(2),"\n")
    break;
    case 5:
        console.log("\n---------- Conversão de Moedas ----------\n")
        console.log("O valor em reais: ",real)
        console.log("A quantidade de moeda convertida em Franco: ",(real/franco).toFixed(2),"\n")
    break;
    default:
        moeda > 6
        console.log("\nValor invalido ...\n")
        break;
}