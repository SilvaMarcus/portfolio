let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');
let classificacao = '';

function imc (){

  let nome = document.getElementById('nome').value;
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;
  
  if(nome !== '' && altura !== '' && peso !== ''){
    let valorImc = (peso / (altura * altura )).toFixed(1);
      if (valorImc < 18 ){
        classificacao = ' VOCE ESTA ABAIXO DO PESO ';
      }
      if (valorImc < 25){
        classificacao = ' VOCE ESTA NO SEU PESO IDEAL ';
      }  
      if (valorImc > 25){
          classificacao = ' VOCE ESTA A CIMA DO PESO, CUIDADO ! '
        }
        resultado.textContent = (nome + valorImc + classificacao);
      }
  else{
        alert('PREENCHA TODOS OS CAMPOS ');
      }
    }
calcular.addEventListener('click',imc);