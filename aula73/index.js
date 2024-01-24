const produto = {nome: 'caneca', preco: 18};
const copia = {...produto,
                material: 'porcelana'};
copia.preco = 20;
const copia2 = Object.assign({}, produto, {material: 'porcelana'});
console.log(produto);
console.log(copia);
console.log(copia2);

console.log(Object.getOwnPropertyDescriptor(copia, 'material'));

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}   