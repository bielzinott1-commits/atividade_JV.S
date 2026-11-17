console.log ('Missão Iniciada!');
console.log(document);

//passo 3
const titulo = document.querySelector('#titulo');
titulo.textContent = 'Aula de DOM';
titulo.style.color = 'red';

//passo 4
const p1 = document.querySelector('.texto');
p1.style.fontWeight = 'bold';

const textos = document.querySelectorAll('.texto');
textos.forEach(p => p.style.color = 'green');

//passo 5
const caixa = document.querySelector('div');
caixa.style.border = '3px solid blue';
caixa.style.padding = '20px';

const campoNome = document.querySelector(
    '.container input[type="text"]'
);
campoNome.value = 'Maria';


































