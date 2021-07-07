const prompt = require('prompt-sync')();

function main(){

    var nome = String(prompt('Informe nome: '))
    var divisao = nome.split(' ')
    var login = ''
    
    for(let i=0;i<divisao.length;i++)
        login = login + (divisao[i])[0]
    console.log('Login:',login)
}
main();