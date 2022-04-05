const buttons = document.getElementById('buttons');
const img = document.getElementById('img');
let index = 0; 





let trafficLight = (event) =>{
    turnOn[event.target.id]()
};

turnOn = {
    'red':       () =>  img.src= './imagens/red.png',
    'yellow':    () => img.src = './imagens/yellow.png',
    'green':     () => img.src = './imagens/green.png',
    'automatic': () => setInterval(changecolor, 1000) ,

    
};

changecolor = () => {



    const colors = ['red','yellow','green']
    let color = colors[index]
    turnOn[color]()

}



buttons.addEventListener('click',trafficLight);