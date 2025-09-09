import PromptSync from "prompt-sync";  
const prompt = PromptSync()
let animas_atualizados,animas = ['Leões','Girafas','Macacos-prego','Zebras','Pinguins']
console.log(animas)
let novo_animas = [],quantidades_animas = (prompt("Quantos animas gostaria de ser adicionado Zoológico: "))
for (let index = 0; index < quantidades_animas; index++) {
    novo_animas[index] = prompt("Informe os animas que será adicionado na Zoológico: ")
    animas_atualizados = animas.concat(novo_animas)
 
}
console.log(animas_atualizados);

// let novo_animas = prompt("Informe os animas que será adicionado na Zoológico: ")
// animas_atualizados = animas.concat(novo_animas)
// console.log();
