const numeros = [5, 50, 11, 23, 9, 8, 10, 7, 34];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0);

//console.log(total);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'José', idade: 78},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(valor.idade > acumulador.idade){
        return valor;
    }
    else{
        return acumulador;
    }

});

console.log(maisVelha);