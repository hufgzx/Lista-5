const prompt = require('prompt-sync')();

function main(){
    
    var entrada = prompt('Informe a posição e o texto no formato (10,Algoritmos): ')
    var split = entrada.split(',')
    var dado1 = Number(split[0])
    var dado2 = split[1]

    for(let i=0;i<dado1;i++){
        console.log('')
    }
    console.log(dado2)
}
main();