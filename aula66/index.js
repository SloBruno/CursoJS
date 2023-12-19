const numeros = [5, 50, 11, 23, 9, 8, 10, 7, 34];

const dobro = numeros.map(valor => valor*2);

console.log(dobro);


////////////////////////////

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Wallace', idade: 47},
];

const apenasNome = pessoas.map(valor => valor.nome);
const semNome = pessoas.map(valor => ({idade: valor.idade}));
const pessoaComID = pessoas.map((valor, indice) =>{ 
    valor.id = indice;
    return valor;
});
console.log(pessoaComID);