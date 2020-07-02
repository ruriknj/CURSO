// const nome = 'Luiz Otávio',
/* for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); // pegando cada letra da string
}  

for (let in nome) {
    console.log(nome[i]);
} */
/* 
for (let valor of nome) {
    console.log(valor);
} */

//const nomes = ['Luiz', 'Otavio', 'Henrique'];

/* for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
console.log('####'); // so para dividir 

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('####'); // so para dividir 

for (let valor of nomes) {
    console.log(valor);
}

console.log('####'); 

nomes.forEach(function(valor, indice, array) {
console.log(valor, indice, array); // temos o valoe, indice e o array completo.
}); */

// com objetos:

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// mas for of não funciona com objeto

/* 
RESUMO:
for classico -> Geralmente com iteráveis (array ou string)
for in -> Retorn o índice ou chave (string, array ou objetos)
for of -> Retorn o valor em si (iteráveis, array ou string)
*/



