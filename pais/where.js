
let check = document.getElementById('check');
let resultado = document.getElementById('resultado');

var agora = new Date();
var hora = agora.getHours();




checar = () => {


    let name = document.getElementById('name').value;
    let country = document.getElementById('country').value;

   if (country == 'Brazil') {
       resultado.innerHTML = `
       <p> Olaa todos do ${country} sejam bem vindos ! <br> 
       <br> 
       <br>hahahahaha </p>
        
       <h1> AGORA SAO EXATAMENTE  ${hora} Horas </h1> 
       `
   }




}




check.addEventListener('click',checar)
