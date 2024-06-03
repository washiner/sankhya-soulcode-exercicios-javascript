//Crie uma função chamada `intersecaoArrays` que receba
//dois arrays como argumentos e retorne um novo array
//contendo os elementos que são comuns aos dois arrays.


function intersecaoArrays(array1, array2) {
    var intersecao = [];

    for (var i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            intersecao.push(array1[i]);
        }
    }

    return intersecao;
}

var array1 = [1, 4, 5, 6, 7];
var array2 = [6, 7, 8, 9, 10];

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Intersecção:", intersecaoArrays(array1, array2));
