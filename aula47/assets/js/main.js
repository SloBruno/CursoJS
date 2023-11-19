function GetTimeSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

let s = 1000; // Declare a variável s apenas uma vez

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer; // Declare a variável timer fora da função Start

function Start() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = GetTimeSeconds(segundos);
    }, 1000);
}

function Pause() {
    clearInterval(timer);
}

function Reset() {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = GetTimeSeconds(segundos);
}

iniciar.addEventListener('click', function (event) {
    Start();
});

pausar.addEventListener('click', function (event) {
    Pause();
});

zerar.addEventListener('click', function (event) {
    Reset();
});
