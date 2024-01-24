const objA = {
    chave: 'A'
};

const objB = {
    chave: 'B'
};

Object.setPrototypeOf(objB, objA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camiseta', 50);
const p2 = new Produto('caneca', 20);

Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype);