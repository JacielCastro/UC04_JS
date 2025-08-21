import PromptSync from "prompt-sync"
const prompt = PromptSync()
let num = Number(prompt("Digite um valor: "))
if (num % 2 === 0) {
    console.log("\n--> O número é PAR")
    if (num > 0) {
        console.log("--> Positivo\n")
    }else{
        console.log("\n--> negativo ")
    }
}else{
    console.log("\n--> ÍMPAR\n ")
}
