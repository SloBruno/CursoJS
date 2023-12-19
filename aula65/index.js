/* const numeros = [5, 50, 11, 23, 9, 8, 10, 7, 34];

const maiores = new Array;

for (let i of numeros){
    if (i > 10){
        maiores.push(i);
    }
}

console.log(maiores);

const filtrado = numeros.filter(valor => valor > 10);
console.log(filtrado);


function callBackFunction(valor, indice, array){
    console.log(valor, indice, array);

    if (valor > 10){
        return true;
    }else{
        return false;
    }
}

const numerosFiltrados = numeros.filter(callBackFunction);

console.log(numerosFiltrados);
*/
////////////////////////////

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Wallace', idade: 47},
];

const nomesGrandes = pessoas.filter( valor => valor.nome.length >= 5);
const pessoasVelhas = pessoas.filter(valor => valor.idade > 50);
const pessoasA = pessoas.filter(valor => valor.nome.slice(-1).toLowerCase() === 'a') 
console.log(pessoasA);