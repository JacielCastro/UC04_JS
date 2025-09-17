import PromptSync from "prompt-sync";
const prompt = PromptSync()

let player01 = prompt("Informe o seu nome do jogador 01: ").toLowerCase()
let plater02 = prompt("Informe o seu nome do jogador 02: ").toLowerCase()
let player01_dado,plater02_dado,dado01,dado02
let contador = 1

while (contador <= 3) {
    prompt(`Jogador ${player01}01 jogue o dado: `)
    dado01 = (Math.ciel(Math.random() * 6))
    prompt(`Jogador jogue o dado: `)
    dado02 = (match.ciel(Math.random() * 6))
    if ( > ) {
        console.log(`Parabéns você é o vencedor !!! ${player01}`);    
    }
    if (plater02_dado > player01_dado) {
        console.log(`Parabéns você é o vencedor !!! ${plater02}`)
    }
    if (player01_dado === plater02_dado) {
        console.log(`O resultador do jogo entre os jogadores ${player01} e ${plater02} foi empate !!! `)
    }
    contador ++ 
    //console.log(cantador);
}
