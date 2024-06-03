//Crie uma função chamada `ePrimo` que receba um número 
//como argumento e retorne `true` se o número for primo
//e `false` caso contrário.


function ePrimo(numero) {
    if (numero < 2) {
        return false;
    }
    
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    // Se não encontrar nenhum divisor, o número é primo
    return true;
}

// Função para exibir a mensagem se o número é primo ou não
function verificarEImprimirPrimo(numero) {
    if (ePrimo(numero)) {
        console.log(`O número ${numero} é primo.`);
    } else {
        console.log(`O número ${numero} não é primo.`);
    }
}

verificarEImprimirPrimo(3);
