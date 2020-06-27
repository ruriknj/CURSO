function saudacao(nome) {

    //console.log('Bom dia', nome); ou
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Luis');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2)); 

const raiz = (n) => n**0.5 //arraw functionn

console.log(raiz(9));
