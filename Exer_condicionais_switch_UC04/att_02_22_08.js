// CRIANDO UM CALCULADORA QUE PERMITE AO USUÁRIO REALIZAR OPERAÇÃES BÁSICAS E AVANÇADAS
import PromptSync from "prompt-sync"; 
const prompt = PromptSync()
console.log("\n---------- Tipo da operação Básico ----------")
console.log("- Soma\n- Subtração\n- Multiplicação\n- Divisão")
console.log("\n----------Tipo da operação Avançada ----------")
console.log("- Raiz quadrado\n- Potenciação\n")
let sub,soma,mult,divi,valor01,valor02,tipo = prompt("--> Qual o tipo da operação: Básica ou Avançado: ").toUpperCase()
if (tipo === "BASICA") {   
    let operado = prompt("Informe qual é operação: ")
    operado = operado.toLowerCase()
    valor01 = Number(prompt("Informe o primeiro valor: "))
    valor02 = Number(prompt("Informa o segundo valor: ")) 
switch (operado) {
    case "soma":
        soma = valor01 + valor02
        console.log("O resultado da sua soma: ",soma,"\n") 
    break;
    case "subtracao":
        sub = valor01 - valor02
        console.log("O resultado da sua subtração: ",sub,"\n")
    break;
    case "multiplicação":
        mult = valor01 * valor02
        console.log("O resultado da sua multiplicação: ",mult,"\n")
    break;
    case "divisao":
        divi = valor01 / valor02
        console.log("O resultado da sua subtração: ",divi,"\n")
    break;
    default:
        console.log("Não encontramos esse operador...\n")
        break;
}
}
if (tipo === "AVANCADA") {
    let raiz,expoente,base,operado = prompt("Informe qual é operação, raiz ou potencia:  ").toLowerCase()
    switch (operado) {
        case "raiz":
            raiz = Math.sqrt(Number(prompt("Informe um número: "))).toFixed(2)
            console.log("A raiz quadrada --> ",raiz) 
        break;
        case "potencia":
            base = Number(prompt("Informe o valor da base: "))
            expoente = Number(prompt("informe o valor do expoente: "))
            console.log("O resultado potencia -->",Math.pow(base,expoente))
        break;
        default:
            console.log("Não encontramos esse tipo de operador...\n")
            break;
    }
}else
    console.log("Não encontramos esse tipo de operação...\n")