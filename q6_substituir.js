const prompt = require('prompt-sync')();

function main(){
    var frase = prompt('Informe a frase: ')
    var split = frase.split(' ')
    
    let algarismos = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove']
    let mensagem = ' '

    for(let i=0; i<= frase.length-1; i++){
        mensagem = mensagem + algarismos[split[i]] + '  '
    }
    
    console.log(mensagem)
}
main();