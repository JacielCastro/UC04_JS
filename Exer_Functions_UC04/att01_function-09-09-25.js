
// EXERCÍCIO 02 --> SIMUlAÇÃO DE DEPOSITO E SAQUE

import PromptSync from "prompt-sync";
const prompt = PromptSync()
import {Deposito,Saque_Conta } from "./Function.js";

let operacao,saldo_atual = 0,valor_saque = 0  
do {
    operacao = prompt("Qual operação deseja realizar deposito, saque ou saldo e sair para finalizar operação: ").toLowerCase()
    
    if (operacao === "deposito") {
        let valor_deposito = Number(prompt("Informe o valor do deposito: ")) 
        saldo_atual = Deposito(saldo_atual,valor_deposito)
    }
    if (operacao === "saque") {
        valor_saque = Number(prompt("Informe o valor do saque: "))
        
        saldo_atual = Saque_Conta(saldo_atual,valor_saque)
    }
    if (operacao === "saldo") {
        console.log("Seu saldo atual da sua conta --> ",saldo_atual);
    }
} while (operacao !== "sair");
    console.log("Operação finalizada !!!");
