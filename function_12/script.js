//Crie uma função chamada `operacao` que receba 
//dois números e uma função como argumentos.
//A função deve aplicar a função fornecida aos dois números
//e retornar o resultado.

// Função de ordem superior 'operacao'
function operacao(num1, num2, func) {
    return func(num1, num2);
}

// voce pode escolher o tipo de operaçao matematica
const dividir = function(a, b) {
    return a / b;
};


console.log(operacao(10, 2, dividir));


