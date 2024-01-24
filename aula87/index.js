function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject ('erro'); 

        setTimeout(()=> {
            resolve(msg.toUpperCase() + 'Passei na promisse');
        }, tempo);
    })

}

const promises = [

    esperaAi('Promisse 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000)
    //esperaAi(1000, 1000),

];

Promise.race(promises)
    .then(valor=> console.log(valor))
    .catch(erro => console.log(erro))