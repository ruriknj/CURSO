//* indice        0    1    2    3     4    5    6    7    8
/* const numeros = [100, 200, 300, 400 , 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, ... resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto); */
//  indice            0                                                    
        1          2
//  indice         0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, list2, list3] = numeros;
console.log(list3[2]); // imprime o numero 9;
