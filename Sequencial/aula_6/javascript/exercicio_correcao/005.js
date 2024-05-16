function calcularFatorial(numero) {
    // Verificar se o número é negativo
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    }
    
    // Inicializar o fatorial como 1
    let fatorial = 1;
    
    // Calcular o fatorial
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    
    // Retornar o resultado
    return fatorial;
}

// Exemplo de uso da função
console.log(calcularFatorial(5)); // Saída: 120
