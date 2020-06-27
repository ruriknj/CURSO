const numero = Number(prompt('Digite um número:'));// transforma para numero.
const numeroBoleana = false;
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML  = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz quadrada: ${(numero**0.5)}</p>`;
texto.innerHTML += `<p>É NaN: ${(Number.isNaN(numero))}</p>`;
texto.innerHTML += `<p>${(numero**0.5)} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>\com duas casas decimais: ${numero.toFixed(2)}</p>`;
