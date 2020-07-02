const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    
    if (numero === 2) { // pulou o numero 2.
        console.log('Pulei o numero 2');                     
        continue;
    }
    console.log(numero);
    if (numero === 7) { // so executa até o numero 6.
        console.log('encontrado o 7, saindo ...');
        break;
    } 
}
   