//Crie uma função chamada `inverterString` que receba uma string
//como argumento e retorne a string invertida.


function inverterString(str) {

    var arrayDeCaracteres = str.split('');

    var arrayInvertido = arrayDeCaracteres.reverse();

    var stringInvertida = arrayInvertido.join('');

    return stringInvertida;
}

console.log(inverterString("washiner"));

