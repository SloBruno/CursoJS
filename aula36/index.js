frutas = ['Morango', 'Uva', 'abacaxi'];

for(let index in frutas){
    console.log(index)
    console.log(frutas[index])
}

const pessoa = {
    nome: 'Bruno',
    idade: 16,
    peso: 65
};

console.log('--=-=-=-=-=--=-=-=-=-=-=-')

for (let key in pessoa){
    console.log(key, pessoa[key]);
}
