//Crie uma função chamada `currySoma` que usa currying para
//somar três números. A função deve ser chamada assim:
//`currySoma(a)(b)(c)`.

function currySoma(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

var a = 4;
var b = 7;
var c = 8;
console.log("A soma de", a, "+", b, "+", c, "é:", currySoma(a)(b)(c));
