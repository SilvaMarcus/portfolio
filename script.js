
// usando classes para mostrar o menu, por padrao ecsondido

var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu"); // o metodo toggle coloca ou retira da div  .container a classe .show-menu, a qual as configurações de apareceer estao atreladas .  
});



