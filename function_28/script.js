//Crie uma função chamada `contemSubstring` que receba duas
//trings como argumentos e retorne `true` se a primeira string
//contiver a segunda string, e `false` caso contrário.

function contemSubstring(str, substr) {
    return str.includes(substr);
}

var string1 = "Ola washiner";
var string2 = "washiner";
console.log("String1 contem a String2?", contemSubstring(string1, string2));
