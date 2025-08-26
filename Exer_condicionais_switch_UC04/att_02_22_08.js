import PromptSync from "prompt-sync"; 
const prompt = PromptSync()
console.log("\n---------- Tipo da operação Básico ----------")
console.log("[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão")
console.log("\n----------Tipo da operação Avançada ----------")
console.log("[1] Raiz quadrado\n[2] Potenciação\n")
let valor01,valor02,tipo = prompt("--> Qual o tipo da operação: Básica ou Avançado: "+"\n").toUpperCase()
if (tipo === "BASICA") {   
    let operado = prompt("Informe qual é operação: ")
    operado = operado.toLowerCase()
    valor01 = Number(prompt("Informe o primeiro valor: "))
    valor0202 = Number(prompt("Informa o segundo valor: ")) 
switch (operado) {
    case "soma":
        let soma = soma01 + soma02
        console.log("O resultado da sua soma: ",soma,"\n") 
    break;
    case "subtracao":
        let sub, sub01,sub02
        sub01 = Number(prompt("Informe o primeiro valor: "))
        sub02 = Number(prompt("Informe o segundo valor: "))
        sub = sub01 - sub02
        console.log("O resultado da sua subtração: ",sub,"\n")
    case "multiplicação":
        let mult, mult01,mult02
        mult01 = Number(prompt("Informe o primeiro valor: "))
        mult02 =Number(prompt("Informe o segundo valor: "))
        mult = mult01 * mult02
        console.log("O resultado da sua subtração: ",mult,"\n")
    break;
    case "divisao":
        let divi,divi01,divi02
        divi01 = Number(prompt("Informe o primeiro valor: "))
        divi02 = Number(prompt("Informe o segundo valor: "))
        divi = divi01 * divi02
        console.log("O resultado da sua subtração: ",divi,"\n")
    break;
    default:
        break;
}
}else{
    console.log("Não encontramos esse tipo de operação...")
}
if (tipo === "AVANCADA") {
    let operado = prompt("Informe qual é operação: ")
    operado = operado.toLowerCase()
    switch (operaçao) {
        case "raiz":
            
        break;
        case "potencia":

        break;
        default:
            break;
    }   
} 