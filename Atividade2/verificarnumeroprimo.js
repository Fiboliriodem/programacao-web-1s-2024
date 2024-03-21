
function verificarNumeroPrimo(n) {
    // Verifica se o número é menor ou igual a 1
    if (n <= 1) {
        return false;
    }
    // Verifica se o número é divisível por algum número além de 1 e ele mesmo
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Chamada da função para os casos de teste
console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false