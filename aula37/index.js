const nome = 'Bruno Slominski';
const nomes = ['Bruno', 'Vitor', 'Matthäus']

for(let value of nome){
    console.log(value);
}

console.log('-=-=-=-=-=-=-=-')

nomes.forEach(function(element, indice, array){
    console.log(element, indice, array)
})          

//for classico - Itera arrays e strings
// for in  - Retoena indices(arrays, strings) e chaves(objetos)
//for of - retorna o valor em si de arrays ou strings