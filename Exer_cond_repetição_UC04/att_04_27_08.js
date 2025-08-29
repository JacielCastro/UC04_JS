import PromptSync from "prompt-sync";
const prompt = PromptSync();
let continuar;
do {
    let cliente, troco = 0, compra = 0, contador = 1, valor;
    console.log("\n       ----- Lista de compra -----\n");
    // Loop para registrar as mercadorias
    do {
        valor = Number(prompt("Informe o valor da mercadoria (0 para finalizar): "));       
        if (valor > 0) {
            console.log(`Quantidade de itens        Valor do produto\n       ${contador}                         ${valor}`);
            contador++;
            compra = compra + valor;
        }
    } while (valor > 0);
    console.log("\n========================================\n");
    console.log("Valor total da compra -------------------> ", compra, "R$");
    // Loop para receber o valor do cliente até que seja suficiente
    do {
        cliente = Number(prompt("Informe o valor em dinheiro para pagamento: "));
        if (cliente < compra) {
            console.log("Não conseguimos finalizar a compra, informe outro valor.");
        }
    } while (cliente < compra);
    // Verifica se tem troco
    if (cliente === compra) {
        console.log("\n  -- Compra finalizada sem troco --\n");
    } else {
        troco = cliente - compra;
        console.log("\nValor do troco --> ", Number(troco).toFixed(2), "R$");
        console.log("\n  -- Pagamento confirmado --\n");
    }
    // Relatório final
    console.log("========================================\n");
    console.log("          --- RELATÓRIO DE COMPRAS ---\n");
    console.log("Quantidade de itens -----------------------------> ", contador - 1);
    console.log("Valor total da compra ---------------------------> ", compra, "R$");
    console.log("O valor do pagamento em dinheiro do cliente -----> ", cliente, "R$");
    console.log("O valor do troco do cliente ---------------------> ", troco, "R$\n");
    // Pergunta se deseja continuar
    continuar = prompt("Deseja realizar uma nova compra? (s/n): ").toLowerCase();
} while (continuar === "s");
console.log("\nObrigado por utilizar o sistema de compras!\n");