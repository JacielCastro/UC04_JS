import PromptSync from "prompt-sync";
const prompt = PromptSync()
let v_desconto,desconto,v_compra = prompt("Informe o valor da suao compra: ")
desconto = Number(desconto),v_compra =Number(v_compra) 
if (v_compra <= 100){
    console.log("\nO valor da sua compra não obteve desconto !!!\n")
}else if (v_compra > 100 && v_compra <= 500 ) {
    v_desconto = (v_compra * 0.05)
    desconto = v_compra - v_desconto
    console.log("\nO valor da sua compra ------------------> ",v_compra)
    console.log("O valor do seu desconto de 5% ------------> ",v_desconto)
    console.log("O valor da sua compra obteve desconto ----> ",desconto,"\n")
}if (v_compra > 500) {
    v_desconto = (v_compra * 0.10)
    desconto = v_compra - v_desconto
    console.log("\nO valor da sua compra ------------------> ",v_compra)
    console.log("O valor do seu desconto de 10% -----------> ",v_desconto)
    console.log("O valor da sua compra obteve desconto ----> ",desconto,"\n")
} else {
    v_compra >= 300
    console.log("-- Você ganhou um cupom bônus para usar na próxima compra !!! --\n ")
}