//Crie uma função chamada `filtrarPares` que receba um array
//de números como argumento e retorne um novo array contendo
//apenas os números pares.

function filtrarPares(array) {
    var numerosPares = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i]);
        }
    }

    return numerosPares;
}

var numeros = [11, 20, 33, 41, 55, 62, 71, 88, 94, 100];
console.log("Original:", numeros);
console.log("Pares:", filtrarPares(numeros));
