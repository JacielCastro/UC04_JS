import PromptSync from "prompt-sync";
const prompt = PromptSync()

const retorno_mensagem = function() {
    //Histórico de chats, adicionar as mensagens na array, mostra as mensagem por vez, inverte a ordem das mensagens e exibir novamente,
    // permitir que o usuário posso pesquisa a mensagem pelo índice e mostra o texto separado por (---) 
    let mensagem 
    let  armazenamento = [] 
    for (let index = 0; index <= armazenamento.length; index++) {// criando loop para ser adicionada as mensagens na Array
        mensagem = (prompt("Escreva as mensagem, para finalizar digiti (sair): "))
        if (mensagem === "sair") {// condiçãode parada pela palavra "sair"
            break
        }
        armazenamento.push(mensagem)//adicionando as mensagens sempre na ultima posição 
    }
    console.log(armazenamento.reverse());//invertendo a seguencia  
    let visualizar = Number(prompt("Digiti a posição da sua mensagem: ")); // Soliitando ou usuário par adicionar a posição do texto pelo índice
    console.log("A palavra encontrada nessa posição ",visualizar," --> ",armazenamento[visualizar]);// mostrando o índice e o valor que está nele 
    console.log(armazenamento.join(" --- "),"\n")// Separando as mensagens por (---)
}
retorno_mensagem()