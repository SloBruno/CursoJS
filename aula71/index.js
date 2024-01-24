function Produto(nome, preco, estoque){

    Object.defineProperty(this, estoque,{
        enumerable: true, //mostra a chave
        value: estoque, // define valor
        writable: false, // editável
        configurable: false //Configurável
    
    })
    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            valeu: nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true,
            valeu: preco,
            writable: true,
            configurable: true
        }
    })
}