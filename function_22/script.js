//Crie uma função chamada `ePalindromo` que receba uma
//string como argumento e retorne `true` se a string
//for um palíndromo e `false` caso contrário.

function ePalindromo(str) {
    return str === str.split("").reverse().join("");
}

console.log(ePalindromo("arara"));
console.log(ePalindromo("hello")); 

//nota palindromo da direita pra esquerda da esquerda pra direita
