//Crie uma função chamada `fibonacci` que receba um número
//n` como argumento e retorne o `n`-ésimo número da sequência
//de Fibonacci.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6));


//sequência de Fibonacci é uma sequência matemática
//que começa com 0 e 1, e os números subsequentes são
//a soma dos dois números anteriores.
//0, 1, 1, 2, 3, 5, 8, 13, 21