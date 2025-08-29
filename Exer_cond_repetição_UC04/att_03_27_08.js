import PromptSync from "prompt-sync";
const prompt = PromptSync()
let contador = 0,i = 0,valor = Number(prompt("Informe qual o número você quer saber se é primo: "))
if (valor <= 1){
    console.log("\nInforme outro número, 0 ou 1 não pode ser primos !!!\n")
}
if (valor >= 2) {
for (i = 2;i <= valor; i++) {
    if (valor % i === 0) {
        console.log("Números divisivel --> ",i)
        contador++
    }   
}
}
if (contador > 1) {
    console.log("Valor informado não é primo --> ",valor,"\n")
}else{
    console.log("O valor informado é primo --> ",valor,"\n")
}
