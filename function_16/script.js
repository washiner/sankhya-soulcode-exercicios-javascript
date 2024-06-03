//Crie uma função chamada `celsiusParaFahrenheit` que receba uma
//temperatura em Celsius e retorne a temperatura convertida para
//Fahrenheit.


function celsiusParaFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

var temperaturaCelsius = 18;
var temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + "°C é igual a " + temperaturaFahrenheit + "° Fahrenheit");
