//Crie uma função chamada `criarSaudacao` que receba uma 
//saudação como argumento e retorne uma nova função.
//A função retornada deve receber um nome como argumento
//e exibir a saudação seguida pelo nome.

function criarSaudacao(saudacao) {
    return function(nome) {
        console.log(nome + ", " + saudacao + "!");
    };
}


var saudacao = criarSaudacao("Seja Bem Vindo");
saudacao("Washiner");



