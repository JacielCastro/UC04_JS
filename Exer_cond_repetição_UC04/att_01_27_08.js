// TABELA SDE PREÇOS

import PromptSync from "prompt-sync";
const prompt= PromptSync()
for (let i = 1; i <= 50; i++) {
    let preco = 6.99
    preco = i * preco
    console.log(`QUANTIDADE          PREÇO\n${i} ----------------- ${preco.toFixed(2)}`)
}

