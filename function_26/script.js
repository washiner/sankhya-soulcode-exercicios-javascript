//Crie uma função chamada `concatenarArrays` que receba dois
//arrays como argumentos e retorne um novo array que seja a 
//concatenação dos dois arrays.

function concatenarArrays(arr1, arr2) {
    var resultado = [];

    for (var i = 0; i < arr1.length; i++) {
        resultado.push(arr1[i]);
    }

    for (var i = 0; i < arr2.length; i++) {
        resultado.push(arr2[i]);
    }

    return resultado;
}

var array1 = [3, 6, 7];
var array2 = [5, 6, 7];
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array concatenado:", concatenarArrays(array1, array2));
