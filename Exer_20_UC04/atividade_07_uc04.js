import PromptSync from "prompt-sync";
const prompt = PromptSync()
let ano = Number = prompt("Informe o ano: ")
let test_01 = 4 , test_02 = 100, test_03 = 400
let resul_01,resul_02,resul_03
resul_01 = ano % test_01
resul_02 = ano % test_02
resul_03 = ano % test_03
if ((resul_01 === 0) || (resul_02 !== 0 && resul_03 === 0)) {
    console.log(" Ano Bissexto ")
}else{
    console.log(" Este ano não é bissexto ")
}
   
 