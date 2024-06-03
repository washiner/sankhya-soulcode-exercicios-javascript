//Crie uma função chamada `compor` que receba duas funções
//como argumentos e retorne uma nova função
//que é a composição das duas.

function compor(f, g) {
    return function(x) {
        return f(g(x));
    };
}

function dobrar(n) {
    return n * 4;
}

function adicionarCinco(n) {
    return n + 7;
}

var funcaoComposta = compor(dobrar, adicionarCinco);
var entrada = 5;
console.log("composicao:", funcaoComposta(entrada));
