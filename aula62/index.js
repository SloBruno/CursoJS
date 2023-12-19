const completo = ['Bruno', 'Slominski']
const nome = completo;
nome.pop();
console.log(completo);
console.log(nome)
//Dessa forma ambos arrays são afetados

const completo1 = ['Emily', 'Thompsen'];
const nome1 = [...completo1];
nome1.pop();
console.log(completo1);
console.log(nome1);