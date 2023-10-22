//for(declarar a variável; condição de controle; incrementar/decrementar){}

for (let i = 10; i>=0; i--){
    console.log(`Contagem`, i)
}

for(let i = 0; i<= 50; i++){
    const epar = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, epar);
}

const frutas = ['maça', 'uva', 'pera', 'laranja', 'abacaxi', 'abacate']

for (let i = 0; i<frutas.length; i++){
    console.log(`índice ${i}, ${frutas[i]}`);
}