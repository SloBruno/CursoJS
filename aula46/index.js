function MostraHora(){
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR',{
        hour12: false
    });

}

const timer = setInterval(function(){
    console.log(MostraHora());
}, 1000);

setTimeout(function(){
    console.log(MostraHora());
    clearInterval(timer);
}, 5000);