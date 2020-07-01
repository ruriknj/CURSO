const data = new Date();
const exercicoData = data.getDate();

function diaSemana (data) {
    const quarta = (data.getDay());
    if (quarta === 3)
        return `Quarta-feira`;
}
    
function diaMes (data) {
    const julho = (data.getMonth() + 1);
    if (julho === 7)
        return 'Julho';
}


function formatData (data) {
    const dia = (data.getDate());
    const diaMes1 = (diaMes(data));
    const ano = (data.getFullYear());
    const hora =  (data.getHours());
    const min = (data.getMinutes());
    const seg = (data.getSeconds());

    return `${dia} de ${diaMes1} de ${ano} ${hora}:${min}`;
}
const dataBrasil = (`${diaSemana(data)}, ${formatData(data)}`);

    console.log(dataBrasil);

    console.log(data.getMonth());


