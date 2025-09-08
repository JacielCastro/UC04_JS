//Plataforma de E-commerce
import PromptSync from "prompt-sync";
const prompt = PromptSync()
let carrinho_brindes= [], brindes =['macarrão parafuso','queijo',"pão","presunto","bolo"]
let carrinho = ['tomate', "café", "sabão", "molho",'macarrão','arroz', "feijão","açucar","pera",'banana']
let itens = Number(prompt("Informe quantos itens quer que exirba em seu carrinho --> "))
let remover = Number(prompt("informe qual item quer que seja removido do carrinho --> "))
let promocao = "café"
console.log("-- Mostrado a quatidades de itens solicitadas -- ","\n",carrinho.slice(0,itens))
carrinho.splice(remover,1)
console.log("-- removendo o item solicitado --","\n",carrinho)
for (let index = 0; index < carrinho.length; index++) {
    if (carrinho[index] === promocao) {
        console.log(`--> O produto ${promocao} está na promoção e foi encontrado no índice ${index} do seu carrinho\n`)
    }    
}
carrinho_brindes = carrinho.concat(brindes)
console.log("-- Mostrando o carrinho com os brindes --","\n",carrinho_brindes)
