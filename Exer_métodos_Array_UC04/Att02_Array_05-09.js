//Catálogo digital --> criando Array, juntando duas Array, retirando 3 itens do catálogo e criando uma busca do item no catálogo e retornando se tem ou não
import PromptSync from "prompt-sync";
const prompt = PromptSync()
let produtos = ['bolsa','calca','tenis','bernuda','chapéu','blusa','sandalha','saia','saia longa','vestido']// Criando uma Array
//console.log(produtos)
console.log("\nRetirando o lote com defeito --> ",produtos.splice(4,3))// Realizando a retirada dos três itens
let controle = false // variavel iniciada como falso
let novos_produtos = ['camiseta','calca jeans','calca leggings','lingerie','pijamas','botas','agasalhos','meias','poupa esportivas','roupa fitness']
let novo_catalogo = produtos.concat(novos_produtos)// Juntando as duas Array 
console.log("\n-- Novo catálogo dos produtos da loja --","\n",novo_catalogo)// Mostrando junção das duas Array 
let busca_produto = prompt("Informe o produto que queira encontra ? ")// solicitando au usuario um valor 
for (let index = 0; index < novo_catalogo.length; index++){// Realizando a busca dentro da Array do valor solicitado
    if (novo_catalogo[index] === busca_produto){ 
        console.log(`\nTemos o Produto Solicitado em nosso catálogo --> ${novo_catalogo[index]}\nPosição do produto no catálogo --> ${index}\n`)// emprimindo o item e o índice
        controle = true // uma variavelde controle
    }
}
if(!controle){ // Se variável não foi alterada para verdadeirodurante o loop, o if entra e mostra a mensagem apenas uma vez
    console.log("\n",busca_produto,"não existe em nosso catálogo...\n")
    }