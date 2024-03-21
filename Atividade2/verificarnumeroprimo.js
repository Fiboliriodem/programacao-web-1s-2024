
function verificarNumeroPrimo(n) {
    // menos que um não utilizavel
    if (n <= 1) {
        return false;
    }
    // 2 e 3 são primos mas n encaixam nos parametros
    if (n === 2 || n === 3) {
        return true;
    }
    // Verifica se o número é divisível por 2 ou por 3
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    // Verifica divisibilidade apenas por números ímpares > que 3 até a "raiz quadrada de n(roubei esse truque//não fui eu que pensei essa)"
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
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