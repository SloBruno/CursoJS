const nome = 'Bruno'
const sobrenome = 'Slominski'
const idade = 16
const altura = 1.8
const peso = 65

let imc = peso/(altura*altura)
let anoNascimento = 2023-idade

console.log(nome, sobrenome, 'tem', idade, 'anos e nasceu em', anoNascimento)
console.log('Pesa ' + peso + ' kilos e tem uma altura de ' + altura +' metros') 
//template strings
console.log(`Tem um imc de ${imc}`)