const pessoaProto = {
    comer(){
        console.log(`${nome} está comendo   `)
    },
    beber(){
        console.log(`${nome} está bebendo`)
    }   
}

const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
}

const pessoaPrototype = {...falar, ...pessoaProto}

function criaPessoa(nome, sobrenome){

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Emily', 'Thompsen');
console.log(p1)
