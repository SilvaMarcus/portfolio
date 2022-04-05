let turnOn = document.getElementById('turnOn');
let turnOff = document.getElementById('turnOff');
let lamp = document.getElementById('lamp'); 


let lampOn = function () {
    lamp.src = './imagens/acesa.jpg'
}

let lampOf = function (){
    lamp.src = './imagens/desligada.jpg'
}

let lampBreak = function(){
    lamp.src = './imagens/quebrada.jpg'
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOf)
lamp.addEventListener('dblclick', lampBreak)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOf)