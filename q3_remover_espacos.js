const prompt = require('prompt-sync')()

function main(){

    var frase = prompt('Digite a frase: ')
    var juncao = frase.join(' ')
    console.log(juncao)
}
main()