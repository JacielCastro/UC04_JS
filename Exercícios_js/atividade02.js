import PromptSync from "prompt-sync";
const prompt = PromptSync()
let nome_Produto = (prompt("Nome do produto --> "))
let preco_produto = (prompt("Preço do produto --> "))
let porcentagem = (prompt("Informe a quanto de porcentagem --> "))
let calculo = preco_produto * (porcentagem/100)
console.log(`Nome do produto --> ${nome_Produto}\nO valor do produto --> ${preco_produto}\n Valor com desconto --> ${calculo}`)
