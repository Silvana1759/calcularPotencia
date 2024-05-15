import * as rls from 'readline-sync';
let arregloMeses : string [] = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
let nroMes : number = rls.questionInt ("indique: ");
let indice : number = nroMes -1;
console.log ("el mes es:", arregloMeses[indice]);