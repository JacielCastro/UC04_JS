import PromptSync from "prompt-sync";
const prompt = PromptSync()
let cardapio = [] 
let semana = ['segunda','terca-feira','quarta-feira','quinta-feira','sexta-feira','sabado','domingo']
let turno = ['cafe','almoço','janta']

//console.table(semana,turno,cardapio);
for (let indexx = 0; indexx < 3; indexx++) {
    cardapio[indexx] = []
    for (let tur = 0; tur < 3; tur++){
        cardapio[indexx][tur] = prompt(`Digiti a sua opção de prato da ${semana[indexx]} --> e no turno do(a) ${turno[tur]} --> `)
    }

}
let busca = prompt("informe o dia da semana de (segunda a domingo) e o turno (cafe, almoço e janta) --> ")
console.log(cardapio[semana.indexOf(busca)])
console.table(cardapio);

