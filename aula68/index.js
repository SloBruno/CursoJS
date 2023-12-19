const numeros = [5, 50, 11, 23, 9, 8, 10, 7, 34];

const somaDosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor);

console.log(somaDosPares);