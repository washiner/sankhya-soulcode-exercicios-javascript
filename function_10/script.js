//Crie uma função chamada `contarCaracteres` que receba
//uma string e um caractere como argumentos e retorne o
//número de vezes que o caractere aparece na string.

function contarCaracteres(str, carac) {
    var contador = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === carac) {
            contador++;
        }
    }
    return contador;
}

console.log(contarCaracteres("washiner", "w"));
console.log(contarCaracteres("tuiuiu", "u"));

