const verdadeira = true;

// let tem escopo de bloco
// var só tem escopo de função 

/* let nome = `Luiz`; // crtiando
var nome2 = 'Rurik';

if(verdadeira) {
    let nome = 'Rurik'; // criando
    var nome2 = 'Rogerio'; //redeclarando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        var nome2 = 'Ronaldo'; // redeclarando
        console.log(nome, nome2); //escopo vai ser verificado do if mais dentro pra fora        
    }
}
console.log(nome, nome2); 
//saida: Rurik Rogerio (funciona de maneira diferente nos escopos) */

/* var sobrenome ='Miranda'

function falaOi () {
    var NOME = 'Luiz'
    console.log(sobrenome);
}

falaOi(); // var dentro da funçao so funciona dentro do esco´po da função */

console.log(sobrenome);
var sobrenome = 'Miranda'; // O resultado é undefined (Roite)
