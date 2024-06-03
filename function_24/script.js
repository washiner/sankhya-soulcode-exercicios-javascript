//Crie uma função chamada `ordenarArray` que receba um array 
//de números como argumento e retorne o array ordenado em
//ordem crescente.

function ordenarArray(array) {
    array.sort(function(a, b) {
        return a - b;
    });

    return array;
}

var numeros = [11, 7, 23, 9, 19];
console.log("Original:", numeros);
console.log("Ordenado:", ordenarArray(numeros));
