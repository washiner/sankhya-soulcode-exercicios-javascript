//Crie uma função chamada `fahrenheitParaCelsius` que 
//receba uma temperatura em Fahrenheit e retorne a 
//temperatura convertida para Celsius.

function fahrenheitParaCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

var temperaturaFahrenheit = 25;
var temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);
console.log(temperaturaFahrenheit + "°F é igual a " + temperaturaCelsius + "°C");
