
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

calcular.addEventListener('click', function(){

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let valorImc = peso / (altura*2);
    let clasificacao = ''     
    
        if( nome == '' || altura == '' || peso == ''){
        alert('Preencha Todos os Campos')
     } else {

        if (valorImc < 20 ){
            clasificacao =  nome +' Voce Esta Abaixo do Peso ';
            resultado.textContent =  ' seu IMC é de ' + valorImc.toFixed(1) + clasificacao 
       } else if (valorImc >= 20 && valorImc <24){
            clasificacao =  ' Voce Esta no seu Peso Ideal ';
            resultado.textContent = nome + ' seu IMC é de ' + valorImc.toFixed(1) + clasificacao
       } else {
           clasificacao = 'Voce Esta A cima do Peso'
           resultado.textContent =  nome + ' seu IMC é de ' + valorImc.toFixed(1) + clasificacao
       }
       
     }  
     
})


