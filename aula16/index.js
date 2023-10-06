const alunos = ['Bruno', 'Vitor', "Matthäus"];
console.log(alunos)
alunos[1] = 'Ruan'; //substitui
console.log(alunos)
alunos[3] = 'Vitor'; //Adiciona no final
console.log(alunos)
const removido = alunos.pop(); //Remove do final; dá pa salvar oq foi removido
console.log(alunos)
alunos.push('Cauê'); // Adiciona no final
console.log(alunos)
alunos.unshift('Miguel'); //Adiciona no começo
console.log(alunos)
delete(alunos[1]); //deleta o q estava no indice um
console.log(alunos.slice(0,4)) // fatia a array
console.log(alunos.slice(0, -1)) //fatia até o ultimo elemento
console.log(alunos instanceof Array) //Para saber se é array

console.log(alunos.length)// Tamanho