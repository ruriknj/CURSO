/*const pessoa1 = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
*/
function criaPessoa (nome, sobrenome, idade) {  //parametros
    return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Maria', 'Moreira', 45);
const pessoa3 = criaPessoa('João', 'Oliveira', 35);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

const pessoa4 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
            console.log(`${this.nome} ${this.sobrenome} está falando oi ...`);
    },
    incrementaIdade() {
        this.idade++;
        console.log(`minha idade atual é: ${this.idade}`);
    }
};

pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.incrementaIdade(); // vai incrementando a idade

