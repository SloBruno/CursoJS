function Produto(nome, preco, estoque){

    this.nome = nome,
    this.preco = preco,

    Object.defineProperty(this, "estoque",{
        enumerable: true, //mostra a chave
        configurable: false, //Configurável

        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){{
                throw new TypeError('Método requer números');
            }}
        }
    
    })
}

const p1 = new Produto('PS5', 3500, 20);
p1.estoque = 'Oi';
console.log(p1.estoque);