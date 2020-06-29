/*
valores que retornam falso:
false
0
'' "" ``
null / undefined
NaN
*/
function falaOi() {
    return 'Oi';
}
let vaiExecutar = 'Joazinho';
console.log(vaiExecutar && falaOi()); // resultado: executa a ultima expressão true: Oi
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(vaiExecutar && falaOi()); // resultado: executa a primeitra ture: preto

const a = 0;
const b = null;
const c = 'false'; // true - é uma string
const d = false;
const e = NaN;
console.log(a || b || c || d || e); // mostra o primeiro true no caso: 'false'
