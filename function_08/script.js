//Crie uma função chamada `media` que receba um array 
//de números como argumento e retorne a média dos números.
//no mesmo estilo do exemplo anterior crie esse

function media(numeros) {
    if (numeros.length === 0) {
        return "O array está vazio.";
    }
    
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    
    return soma / numeros.length;
}


function verificarEImprimirMedia(numeros) {
    const resultado = media(numeros);
    console.log(`A média dos números [${numeros.join(', ')}] é: ${resultado}`);
}


verificarEImprimirMedia([4, 8.9, 10]);

