const numero = Number(prompt('Digite seu número:'));
const num_titulo = document.getElementById('num-titulo');
const texto = document.getElementById('texto');

num_titulo.innerHTML = numero;
/*texto.innerHTML = `<p> Raiz Quadrada: ${numero**(1/2)} <br>
${numero} é inteiro: ${Number.isInteger(numero)} <br>
É NaN: ${Number.isNaN(numero)} <br>
Arredondando para baixo: ${Math.floor(numero)} <br>
Arredondando para cima ${Math.ceil(numero)} <br>
Com duas casas decimais: ${numero.toFixed(2)}</p>`;*/

texto.innerHTML = `<p> Raiz Quadrada: ${numero**(1/2)} </p>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> Arredondando para cima ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;


