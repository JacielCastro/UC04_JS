import PromptSync from "prompt-sync";
const prompt = PromptSync()
let posent_salario,salario= Number = prompt("Informe o seu salario: ")
let emprestimo = Number = prompt("Informe o valor do seu empréstimo: ")
let v_juros,juros = 3.5,v_total_empre,v_parcela, parcela = Number = prompt("Informe a quantidades das parcelas: ")
console.log("\n")
v_parcela = (emprestimo / parcela) // para saber o valor das parcelas sem juros
v_parcela = v_parcela + (parcela * juros)// Valor das parcelas com juros 
v_juros = parcela * juros // Pra pegar o valor dos juros 
v_total_empre = parcela * v_parcela// para saber o valor total do empréstimos com o juros 
posent_salario = salario * 0.30 // Posentagem do salario de 30%
if (v_parcela > posent_salario) { // estrutura if else booleano 
    console.log("===> Empréstimo negado <===\n")
    console.log("O valor da posentagem de 30% do salario informado -------------------",posent_salario,"R$")
    console.log("O valor da parcela ultrapassa os 30% do salario informado ----------",v_parcela,"R$\n")
} else {
    console.log("===> Emprestimo aprovado <===\n")
    console.log(`Quantidades de parcelas -------------------------- ${parcela}`)
    console.log(`Valor solicitado para o empréstimos -------------- ${emprestimo} R$`)
    console.log(`O valor dos juros acrecentado na parcela --------- ${v_juros} R$`)
    console.log(`O valor total do empréstimo com o juros ---------- ${v_total_empre} R$`) 
    console.log(`O valor das parcelas ----------------------------- ${v_parcela} R$\n`)    
}