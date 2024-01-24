class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0
    }

    aumentarVolume(){
        this.volume++;
    }

    static trocaPilha(){
        console.log('trocaPilha')
    }
}