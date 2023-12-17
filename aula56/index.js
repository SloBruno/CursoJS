//Factory Function

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}!` //fala() é um MÉTODO, pois é uma função dentro do objeto. Para conseguir pegar atributos de dentro do objeto precisa usar THIS'
        },
        altura,
        peso,
        //Com o GET(getter), o método(função) passa a ser um atributo do objeeto
        get imc(){
            indice = this.peso/(this.altura **2);
            return indice.toFixed(2);
        }
        
    }
}

const p1 = criaPessoa('Bruno', 'Slominski', 1.8, 65)
console.log(p1.fala('futebol'));
console.log(p1.imc);
const p2 = criaPessoa();
p2.nomeCompleto = 'Vinicius Slominski da Silva';
console.log(p2);