import * as  rls from 'readline-sync';

let base : number = rls.questionInt("Ingrese el numero base: ");
let exponente : number = rls.questionInt("Ingrese el exponente: ");

function calcularPotencia (base : number, exponente : number); {
        
        let resultado : number = 1; 
        if (exponente < 0) {
              console.log("El exponente debe ser igual o mayor que 0. Vuelva a intentar."); 
              exponente = rls.questionInt ("Ingrese nuevamente el exponente; ")
            } if (exponente === 0) {
              resultado == 1            
                
         } else  {(exponente > 0) 
                resultado = base ** exponente;  
           
              }
        return resultado
 }


let resultadoPotencia = calcularPotencia(base, exponente);    

console.log("El resultado de la potenciacion es: ", + resultadoPotencia);
