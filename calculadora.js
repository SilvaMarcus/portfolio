
const display = document.getElementById('display');

const numeros = document.querySelectorAll('[id*=tecla]') /* id*=tecla  significa que todo id que tiver parte do nome tecla vai ser capturado */

const inserirNumero = (evento)  => display.textContent = evento.target.textContent;

numeros.forEach (numero => numero.addEventListener('click', inserirNumero));

