
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]'); /* id*=tecla  significa que todo id que tiver parte do nome tecla vai ser capturado, ou seja, todo ID que contenha tecla em seu nome mesmo tecla1 tecla2 tecla3 ....  criou uma node list */  

/*  ============= numeros é uma node list  =======*/


const inserirNumero = (evento) => {
    display.textContent = evento.target.textContent 
    
    // a funcao esta inserindo no textcontent do display a informacao de que , o evento do click, cujo alvo esta no conteudo do texto da div,  vai aparecer no display. 

}

numeros.forEach(numero => numero.addEventListener('click',inserirNumero)); /*  a node list de numeros NUMEROS, esta recebendo uma forEach, para cada item da lista foi adicionado um addEventListener, que vai acionar a callback  => inserirNumero() */




