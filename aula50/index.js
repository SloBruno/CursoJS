//arguments

function soma(){
    let total = 0;
    for(let v of arguments){
        total += v;
    }

    console.log(total);
}

soma(1,2,3,4,5);

function mais(a, b=1){
    let soma = a+b;
    console.log(soma);
}

mais(1);

const conta = (operador, acumulador, ...numeros) => {console.log(operador, acumulador, numeros)};

conta('+', 1, 2, 34);