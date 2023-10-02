// Operadores Aritméticos +(adição, concatenação) - / * ** %

const num1 = 5;
const num2 = 10;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1**num2);
console.log(num1 % num2);

//Contador

let contador = 1;

contador++;//primeiro executa a ação para depois incrementar
++contador;//primeiro incrementa para depois execcutar a ação

console.log(contador)

contador--;

console.log(contador)

//Contador com passo

const passo = 2;
contador = contador+passo;
//ou
contador += passo;
//com outros operadores tmb
contador /= passo;

console.log(contador) ;

//NaN = Not a Number

const nume1 = 10;
const nome = 'Bruno';

console.log(nume1*nome);

const nume2 = '5';

console.log(nume1*nume2);

const numero2 = parseInt('5'); // transforma em inteiro
const numero3 = parseFloat('5.2'); // transforma em flutuante
const numero4 = Number('8.7')//Transforma em número
console.log(nume1 + numero2)