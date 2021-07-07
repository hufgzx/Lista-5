const prompt = require('prompt-sync')();

function main(){

    const frase = String(prompt('Escreva o que deseja criptografar: '))
    var n_frase = frase.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'#')
    console.log(n_frase.split('').reverse().join(''))
}
main();