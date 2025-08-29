import PromptSync from "prompt-sync";
const prompt= PromptSync()
let troco,compra = 0,contador = 1,valor
console.log("Lista de compra")
do {
    console.log(`Quantidade de itens     valor dos itens\n${contador}                              ${valor = Number(prompt("Valor do produto: "))}`)
    contador++
    compra =compra + valor
    if (valor === 0) {        
        console.log("Valor total da compra ------> ",compra)
        troco = Number(prompt("Informe o valor em dinheiro para pagamento: "))
        troco = troco - compra
        console.log("Valor do troco --> ",troco,"\nPagamento confimado\n") 
        if (troco === compra) {
            console.log("compra finalizada sem troco ")
        }
        //console.log(`Quantidades de itens ----------> ${contador} \nValor da sua compra ----------> ${compra}`)
        break
    }
} while (valor > 0) // Se for falço para 
   


    //console.log()

//console.log(itens)
//console.log(valor)