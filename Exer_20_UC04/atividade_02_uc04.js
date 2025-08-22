import PromptSync from "prompt-sync";
const prompt = PromptSync()
let luz = prompt("Informe o seu consumo kwh: ")
luz = Number(luz)
let data_p = prompt("qual foi o dia do pagamento da sua conta de luz: ")
data_p = Number(data_p)
let pagamento = luz * 0.05,valor,juros
pagamento = Number(pagamento)
if (luz <= 100 && data_p <= 10 ) {
    valor = luz * 1.20
    console.log("\nvencimento da conta de luz --> 10/08")
    console.log("O valor da sua luz do mês é: --> ",valor,"kws")
    console.log ("Pagamento realizado antes da data do vencimento !!!\n ")
}else if (luz <= 100 && data_p > 10) {
    valor = luz * 1.20
    juros = valor + (valor * 0.05)
    console.log("\nvencimento da conta de luz --> 10/08")
    console.log("O valor da sua luz do mês é: --> ",luz,"kws")
    console.log("Valor adicionado com juros de atrasos -->",juros,"kws\n")
}else if(luz > 100 && data_p > 10){
    valor = luz * 1.70
    juros = valor + (valor * 0.05)
    console.log("\nvencimento da conta de luz --> 10/08")
    console.log("O valor da sua luz do mês é --> ",valor,"kws")
    console.log("Valor adicionado com juros de atrasos -->",juros,"kws\n")
} if (luz > 100 && data_p < 10) {
    valor = luz * 1.70
    console.log("\nvencimento da conta de luz --> 10/08")
    console.log("O valor da sua luz do mês é --> ",valor,"kws\n")
}