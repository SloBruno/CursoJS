function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log("Sou um método do(a) " + this.nome + " " + this.sobrenome); 
    }
}

const p1 = new Pessoa("Bruno", 'Slominski')
console.log(p1);
p1.metodo();