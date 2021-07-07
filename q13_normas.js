const prompt = require('prompt-sync')();

function main(){

    var nome = String(prompt('Informe nome: '))
    var divisao = nome.split(' ')
    var nome1 = divisao[0]
    var nome2 = divisao[divisao.length-1]
    var sigla = ''

    for(let i=1;i<divisao.length-2;i++)
        sigla = sigla + (divisao[i])[0] + '. '
    console.log(nome2,",",nome1,sigla)
}

main();