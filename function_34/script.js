//Crie uma função chamada `ordenarPersonalizado` que receba
//um array de objetos e uma função de comparação (callback)
//como argumentos e retorne o array ordenado.

function ordenarPersonalizado(array, callback) {
    return array.sort(callback);
}

function compararPorIdade(a, b) {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    return 0;
}

var pessoas = [
    { nome: "Washiner", idade: 44 },
    { nome: "Shiro", idade: 5 },
    { nome: "Mel", idade: 15 }
];

console.log("Array original:", pessoas);
console.log("Array por idade:", ordenarPersonalizado(pessoas, compararPorIdade));
