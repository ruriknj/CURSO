const elementos = [    //objetos dentro do array.
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++ ) {
let { tag, texto} = elementos[i];
// console.log(tag); -> ve as tags no console do Browser.
let tagCriada = document.createElement(tag);
// tagCriada.innerHTML = texto; OU
// tagCriada.innerText = texto; //usa se só tiver texto OU
let textoCriado = document.createTextNode(texto);
tagCriada.appendChild(textoCriado);

div.appendChild(tagCriada);
}
container.appendChild(div);