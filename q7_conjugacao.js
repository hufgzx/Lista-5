const prompt = require('prompt-sync')();

function main() {

    let verbo = prompt('Informe um verbo regular terminado em ER: ');

    let novaString = '';

    for (let i = 0; i < string.length - 2; i++) {
        novaString += string[i];
    }
    novaString = 'Eu ' + novaString + 'o\n' + 'Tu ' + novaString + 'es\n' + 'Ele(a) ' + novaString + 'e\n' + 'Nós ' + novaString + 'emos\n' + 'Vós ' + novaString + 'eis\n' + 'Eles ' + novaString + 'em';
    console.log(verbo, novaString);
}

main();