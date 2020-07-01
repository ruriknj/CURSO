
// onst data = new Date(0); // 31/dec/1969 -> Timestamp unix ou época do Unix;
// const tresHoras = 60*60*3*1000 // 3 horas em milisegundos
// const data = new Date(0 + tresHoras); // marco zero

 // const data = new Date(2019, 3, 20, 15, 14, 27, 500); //ano, mes, dia, hora, minuto, milesimo e seg.
 // const data = new Date('2019-01-20 20:20:59'); // formato mais utilizado
/*
 const data = new Date('2019-01-20 20:20:59'); 
console.log('Dia', data.getDate()); 
console.log('Mês', data.getMonth()+1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Dia da semana', data.getDay()); // domingo -> 0.

console.log(Date.now()); // adata em milessimos de segundos.
*/

function zeroAEsquerda (num) {
    return num >= 10? num : `0${num}`;
}

function formatData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatData(data);
console.log(dataBrasil);