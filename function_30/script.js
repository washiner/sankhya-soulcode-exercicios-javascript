//Crie uma função chamada `reduzirArray` que receba um array de
//números e uma função de redução (callback) como argumentos
//e retorne o valor reduzido.

function reduzirArray(array, callback, valorInicial) {
    var acumulador = valorInicial;

    for (var i = 0; i < array.length; i++) {
        acumulador = callback(acumulador, array[i]);
    }

    return acumulador;
}

function soma(acumulador, valorAtual) {
    return acumulador + valorAtual;
}

function multiplicar(acumulador, valorAtual) {
    return acumulador * valorAtual;
}

var numeros = [3, 4, 7, 10, 13];
console.log("Original:", numeros);
console.log("Somando numeros:", reduzirArray(numeros, soma, 0));
console.log("Multiplicando:", reduzirArray(numeros, multiplicar, 1));
