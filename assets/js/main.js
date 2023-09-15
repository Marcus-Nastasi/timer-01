
(function() {
    
const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let intervalo;

function criaDataSeg(seg) {
    let date = new Date(seg * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciaTimer() {
    intervalo = setInterval(function() {
        segundos++;
        timer.innerHTML = criaDataSeg(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function(e) {
    clearInterval(intervalo);
    timer.classList.remove('red');
    segundos = 0;
    iniciaTimer();
});

pausar.addEventListener('click', function(e) {
    clearInterval(intervalo);
    timer.classList.add('red');
})

zerar.addEventListener('click', function(e) {
    clearInterval(intervalo);
    timer.innerHTML = '00:00:00';
    timer.classList.remove('red');
    segundos = 0;
})

})();