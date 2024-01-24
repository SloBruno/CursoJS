const velo = Symbol();

class Carro{
    constructor(nome){
        this.nome = nome;
        this[velo] = 0;
    }

    set velocidade(valor){}

    get velocidade(){
        return this[velo]
    }

    acelerar(){
        if(this[velo] >= 100) return;
        this[velo]++;
    }

    freiar(){
        if(this[velo] <= 0) return;
        this[velo]--;
    }
}

const c1 = new Carro('fusca');