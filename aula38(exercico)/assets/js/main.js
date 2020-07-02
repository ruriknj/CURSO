const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stiloBody = getComputedStyle(document.body); // tudo cd css que foi computado no body.
const backgroundColorBody = stiloBody.backgroundColor;

for(let p of ps) {
   p.style.backgroundColor = backgroundColorBody; // ou pelo style.css (.paragrafps)
   p.style.color = '#FFFFFF' // ou pelo style.css (.paragrafos)
}