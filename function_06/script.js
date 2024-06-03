//Crie uma função chamada `fatorial` que receba um número como 
//argumento e retorne o fatorial desse número.


function fatorial(n) {
    if (n < 0) {
        return "Fatorial existe para numeros negativos";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        var resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

let numero = 5;

function atualizarNumero(novoNumero) {
    numero = novoNumero;
    console.log(`Fatorial de ${numero} é: ${fatorial(numero)}`);
}
//atualizarNumero(numero);
atualizarNumero(0);



