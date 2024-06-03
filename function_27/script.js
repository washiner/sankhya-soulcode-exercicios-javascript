//Crie uma função chamada `memoFatorial` que usa memoização
//para otimizar o cálculo do fatorial.

function memoFatorial(n) {
    var memo = {};

    function calcularFatorial(x) {
        if (x === 0 || x === 1) {
            return 1;
        }
        if (memo[x]) {
            return memo[x];
        }
        memo[x] = x * calcularFatorial(x - 1);
        return memo[x];
    }

    return calcularFatorial(n);
}

var numero = 7;
console.log("O fatorial de", numero, "é:", memoFatorial(numero));
