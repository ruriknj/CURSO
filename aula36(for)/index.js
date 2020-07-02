const frutas  = ['Pera', 'Maçã', 'Uva' ];
/* 
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} */

/* for (let indice in frutas) {
    console.log(indice); //For in lê indice do array.
    console.log(frutas[indice]);
} */

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: '30'
};

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]); // Mostra as chave nome, sobrenome e idade.                              // e tambem os dados de Luiz.
}

