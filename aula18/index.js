/*const pessoa1 = {
    nome : 'Bruno',
    sobrenome: 'Slominski',
    idade: 16
};

console.log(pessoa1);
console.log(pessoa1.idade)*/

/*function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};          OU */

function criaPessoa(nome, sobrenome, idade){
    return{nome, idade, sobrenome}  
};

const pessoa1 = criaPessoa('Bruno', 'Slominski', 16);
console.log(pessoa1);
console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: 'Vitor',
    sobrenome: 'Preto',
    idade:12,

   fala(){
    console.log(`Olá, eu sou ${this.nome, this.sobrenome}, e tenho ${this.idade} anos.`);
   },

   incrementaIdade(){
    this.idade++;
   }
};

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();