
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');
let nome = document.getElementById('nome').value;
let altura = document.getElementById('altura').value;
let peso = document.getElementById('peso').value;
let classificacao = '';

function imc (){

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let classificacao = '';
  
    if (nome !== '' && altura !== '' && peso !== '' ){
       const valorImc = (peso / (altura * altura)).toFixed(1);

       if (valorImc < 18.5){
        classificacao = 'Voce esta abaixo do peso ';
    }
     if (valorImc < 25){
    classificacao = ' voce esta com peso ideal ';
     }

     if (valorImc > 25){
        classificacao = ' Voce esta acima do peso'
     }

    resultado.textContent = nome  + valorImc + classificacao;
    }
    else{
        resultado.textContent = ' Preencha Todos os Campos';
    }
}

calcular.addEventListener('click', imc);
