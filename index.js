const semaforo = document.getElementById('semaforo');
const botoes = document.getElementById('buttons');
let indexCor = 0;
let pararInterval = null;

const controleDeTrafego = function( event ){
    stopAutomatic();
    sinal[event.target.id]();
}

const proximaCor = function(){
    indexCor < 2 ? indexCor++ : indexCor = 0;
}

const alterarSinal = function (){
    const cores = ['red','yellow','green'];
    const cor = cores[indexCor];
    sinal[cor]();
    proximaCor();
}

const stopAutomatic = function(){
    clearInterval(pararInterval);
}

const sinal = {
    'red':       () => semaforo.src = './img/vermelho.png',
    'yellow':    () => semaforo.src = './img/amarelo.png',
    'green':     () => semaforo.src = './img/verde.png',
    'automatic': () => pararInterval = setInterval (alterarSinal, 1000 )
}
botoes.addEventListener('click', controleDeTrafego);