"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese el numero base: ");
var exponente = rls.questionInt("Ingrese el exponente: ");
{
    var resultado = 1;
    if (exponente < 0) {
        console.log("El exponente debe ser igual o mayor que 0. Vuelva a intentar.");
        exponente = rls.questionInt("Ingrese nuevamente el exponente; ");
    }
    if (exponente === 0) {
        resultado == 1;
    }
    else {
        (exponente > 0);
        resultado = Math.pow(base, exponente);
    }
    return resultado;
}
var resultadoPotencia = calcularPotencia(base, exponente);
console.log("El resultado de la potenciacion es: ", +resultadoPotencia);
