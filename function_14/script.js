//Crie uma função chamada `contagemRegressiva` que receba
//um número como argumento e exiba uma contagem regressiva 
//a partir desse número até 0, usando recursão.

function contagemRegressiva(numero) {
    if (numero === 0) {
        console.log(numero);
    } else {
        console.log(numero);
        contagemRegressiva(numero - 1);
    }
}

contagemRegressiva(10);
