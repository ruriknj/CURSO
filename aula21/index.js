/**
 *Operadores de comparacção
 > maior que
 >= maior ou igual a]
 < menor que
 <= menor ou igual a
 == igualdade (checa valor) - não deve ser usado
 === igualdade estrita (checa valor e tipo)
 != diferente (valor) - não deve ser usado
 !== diferente (valor e tipo)
 * 
 */

const num1 = 10;
const num2 = '10';
const comp = num1 == num2; // se um 10 for string ainda assim dá verdadeiro
const comp1 = num1 === num2 // vai dar diferente a comparação

console.log(comp1); // resultado é falso
console.log(comp); // resultado é verdadeiro, mesmo não sendo.

