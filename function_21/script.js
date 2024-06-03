//Crie uma função chamada `contarVogais` que receba uma 
//string como argumento e retorne o número de vogais na string.

function contarVogais(str) {
    var vogais = "aeiouAEIOU";
    var contador = 0;

    for (var i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    return contador;
}

var string = "Inconstitucionalicimamente";
var numeroDeVogais = contarVogais(string);
console.log("O número de vogais em \"" + string + "\" é: " + numeroDeVogais);
