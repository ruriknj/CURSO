const pontuacaoUsuario = 999;
/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
    } else {
        console.log('Usuario normal');
*/
// expressão de baixo é a maesma da de cima. (Operação Ternaria)

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);