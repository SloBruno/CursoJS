function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){ return this.nome + " " + this.sobrenome};

const bruno = new Pessoa('bruno', 'slominski');

console.log(bruno.nomeCompleto());