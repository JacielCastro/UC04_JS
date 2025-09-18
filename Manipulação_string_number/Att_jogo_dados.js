import PromptSync from "prompt-sync";
const prompt = PromptSync()

let player01 = prompt("Informe o seu nome do jogador 01: ").toLowerCase()
let plater02 = prompt("Informe o seu nome do jogador 02: ").toLowerCase()
let dado01,dado02
let contador = 0

while (contador <= 2) {
    prompt(`Jogador(a) ${player01} precione ENTER para jogar o dado: `)
    dado01 = (Math.ceil(Math.random() * 6))
    prompt(`Jogador(a) ${plater02} precione ENTER para jogar o dado: `)
    dado02 = (Math.ceil(Math.random() * 6))
    console.log("\n----- RESULTADO -----\n");
    console.log(`Resultado do jogador(a) ${player01}--> ${dado01}\nResultado do jogador(a) ${plater02}--> ${dado02}`)    
    if (dado01 > dado02 ) {
        console.log(`Parabéns ${player01} você é o vencedor(a) dessa rodada !!! `);    
    }
    if (dado02 > dado01) {
        console.log(`Parabéns ${plater02} você é o vencedor(a) dessa rodada !!! `)
    }
    if (dado01 === dado02) { 
        console.log(`O resultador dessa rodada entre os jogadores ${player01} e ${plater02} foi empate !!! `)
    }
    contador ++ 
    console.log(`Rodada --> ${contador}`);
}
