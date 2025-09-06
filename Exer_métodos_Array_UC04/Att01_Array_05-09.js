//Trocando as palvras ofensivas por ( *** ) em um artigo
import PromptSync from "prompt-sync"; 
const prompt = PromptSync()
let contador = 0, texto =  prompt("Informe o artigo para verificação: ")// criando o prompt
let artigo = [], ofensiva = ['trafico','ladrao']// Criando Array
artigo = texto.split(" ")// Transformando o texto que está dentro de uma variavel em Array 
console.log(artigo)
for(let i = 0; i < artigo.length; i++)// Criando um laço de reptição 
    if (ofensiva.includes(artigo[i])) {
        artigo[i] = " *** "// trocando o indice que está dentro da array por ( *** )
        contador++//Contador para verifica as palavras ofendivas 
    }
console.log(`\nA quantidades de palavras ofensivas que foram trocadas => ${contador}
Artigo com as palavras ofensivas trocadas por ( *** )\n\n${artigo.join(" ")}\n`)
