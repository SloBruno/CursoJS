// Escreva uma função que recebe 2 números e retorne o maior deles

function maior(num1, num2){
    if (num1 > num2){
        return num1;
    }
    else if (num2 > num1){
        return num2;
    }
    else{
        return ('Os dois números são iguais')
    }
}

console.log(maior(3, 3));
