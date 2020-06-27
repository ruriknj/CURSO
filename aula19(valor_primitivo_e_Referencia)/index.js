// Valor PRIMITIVOS - string, number, boolean, undefined, null(bigint, symbol) -> copias

//dados por REFERÊNCIA (mutavel) - array, object, function

let a = 'A';
let b = a; // copia
console.log(a, b);

// se mudar o valor de a, b não muda -> valor primitivo (copiados)
a = 'Outra coisa'

console.log(a, b);

let a1 = [1, 2, 3]
let b1 = a1; // A E B apontam para o mesmo local da memoria (referenciados)
console.log(a1, b1);
a1.push(4);
console.log(a1, b1); // o valor de b tambem muda (refernciam o meomo local de memoria)


