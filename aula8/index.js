const nome = 'Rurik';
const sobrenome = 'Nicolau';
const idade  = '62';
const peso = '66';
const alturaEmM = 1.80;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); // template strings

console.log('tem', alturaEmM, 'de altura e seu IMC de', indiceMassaCorporal);
console.log(nome + ' nasceu em ' + anoNascimento);