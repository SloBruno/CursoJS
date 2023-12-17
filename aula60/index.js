//Função Recursiva

function factorial(num) {
    // Caso base: fatorial de 0 ou 1 é 1
    if (num === 0 || num === 1) {
        return 1;
    }

    // Caso recursivo: calcular fatorial
    return num * factorial(num - 1);
}

const result = factorial(4);
console.log(result); 
