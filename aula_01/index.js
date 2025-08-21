

import promptsync from 'prompt-sync'// realizando a declaração do prompt


const prompt = promptsync()

let nome = 'Jaciel'
let valor1 = Number(prompt('Digite um valor 1: '))
let valor2 = Number(prompt('Digite um valor 2: '))
let valor3 = Number(prompt('Digite um valor 3: '))
//let soma = valor1 + valor2
let media = (valor1 + valor2 + valor3)/3

//console.log(`Resultado: ${valor1} + ${valor2} = ${soma}`)
console.log(`Média: ${media.toFixed(2)}`)
console.log(typeof valor1) // para saber se qual é o tipo da variavel
console.log(`Meu nome é ${nome}`)


