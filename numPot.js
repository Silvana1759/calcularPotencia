"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese el numero base: ");
var exponente = rls.questionInt("Ingrese el exponente: ");
var resultado = calcularPotencia(base, exponente);
while (exponente < 0) {
    console.log("El exponente debe ser igual o mayor que 0");
    var exponente_1 = rls.questionInt("Inserte un nuevo exponente:  ");
    if (exponente_1 == 0) {
        console.log("El resultado es : 1");
    }
}
function calcularPotencia(base, exponente) {
    var resultado;
    resultado = Math.pow(base, exponente);
    return resultado;
}
;
console.log("El resultado de la potencia es: ", calcularPotencia(base, exponente));
