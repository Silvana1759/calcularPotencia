"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var arregloMeses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
var nroMes = rls.questionInt("indique: ");
var indice = nroMes - 1;
console.log("el mes es:", arregloMeses[indice]);
