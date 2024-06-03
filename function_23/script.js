//Crie uma função chamada `maiorNumero` que receba um 
//array de números como argumento e retorne o maior número do array.

function maiorNumero(numeros) {
    var maior = numeros[0];

    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return maior;
}

var numeros = [1, 5, 10, 7, 3];
console.log("O maior número é:", maiorNumero(numeros));
