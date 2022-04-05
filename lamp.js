const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
let lamp = document.getElementById('lamp');

turnOn.addEventListener('click', function(){
    lamp.src = './imagens/acesa.jpg'
})

turnOff.addEventListener('click', function(){
    lamp.src = './imagens/desligada.jpg'
})

lamp.addEventListener('click', function(){
    lamp.src = './imagens/quebrada.jpg'
})