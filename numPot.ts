import * as rls from 'readline-sync';

let base : number = rls.questionInt("Ingrese el numero base: ");
let exponente : number = rls.questionInt("Ingrese el exponente: ");
let resultado = calcularPotencia(base, exponente);

while (exponente < 0) {
    console.log("El exponente debe ser igual o mayor que 0");
    let exponente : number = rls.questionInt("Inserte un nuevo exponente:  ");
    if (exponente == 0) {
      console.log("El resultado es : 1");
    } 
}


function calcularPotencia(base : number, exponente : number): number {
        
        let resultado : number; 
        resultado = base ** exponente;  
      return resultado   
              
};
console.log("El resultado de la potencia es: ", calcularPotencia(base,exponente));


