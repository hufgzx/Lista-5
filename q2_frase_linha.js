const prompt = require('prompt-sync')();

function main(){
    var frase = prompt('Digite uma frase: ')
    var resposta = frase.split(' ');

    let novaString = ' ';
    
    for(let i=0;i<resposta.length;i++){
        console.log(resposta[i])

        if(string[i] === ' ') {
            console.log(novaString);
            novaString = '';
        }
    }
    console.log(novaString)
}
main();