//Crie uma função chamada `removerDuplicatas` que receba um array
//como argumento e retorne um novo array sem duplicatas.

function removerDuplicatas(array) {
    var arraySemDuplicatas = [];

    for (var i = 0; i < array.length; i++) {
        if (!arraySemDuplicatas.includes(array[i])) {
            arraySemDuplicatas.push(array[i]);
        }
    }

    return arraySemDuplicatas;
}

var numeros = [3, 6, 4, 7, 8, 8, 9];
console.log("original:", numeros);
console.log("duplicatas:", removerDuplicatas(numeros));
