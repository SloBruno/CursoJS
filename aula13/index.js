let umastring = 'A Terezinha é muito linda';

console.log(umastring.charAt(5)); //saber o caractere da posição da string
console.log(umastring.indexOf('a', 8))// indice da primeira ocorrência da letra o ; começando do indice 8
console.log(umastring.lastIndexOf('l'))// indice da última ocorrência da letra t de
console.log(umastring.replace('Terezinha', 'emily')) // substitui palavras 
console.log(umastring.replace(/i/, '#')) // substitui a primeira letra i por #
console.log(umastring.replace(/i/g, '#')) // substitui todas as  letras i por #
console.log(umastring.length); //tamanho da string
console.log(umastring.slice(1, 11)) //fatia a string
console.log(umastring.slice(-5)) //fatia a string ao contrário
console.log(umastring.split(' '))// divide a string em um ponto
console.log(umastring.toUpperCase())//Transforma em Letra maiúscula
console.log(umastring.toLowerCase()); //Transforma em letra minúscula


