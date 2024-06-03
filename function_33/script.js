//Crie uma função chamada `mapearArray` que receba um array 
//e uma função de mapeamento (callback) como argumentos
//e retorne um novo array com os resultados
//da função de mapeamento aplicada a cada elemento.

function mapearArray(array, callback) {
    var arrayMapeado = [];

    for (var i = 0; i < array.length; i++) {
        arrayMapeado.push(callback(array[i]));
    }

    return arrayMapeado;
}

function dobrar(n) {
    return n * 4;
}

var numeros = [3, 4, 5, 6, 7];
console.log("Array original:", numeros);
console.log("Array mapeado (dobrar):", mapearArray(numeros, dobrar));
