const prompt = require('prompt-sync')();

function main(){

    var nome = String(prompt('Informe nome: '))
    var divisao = nome.split(' ')
    var nome1 = divisao[0]
    var nome2 = divisao[divisao.length-1]
    console.log(nome2,"/",nome1)
}
main();