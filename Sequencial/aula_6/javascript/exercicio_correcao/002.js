// Importar o módulo readline-sync
const readline = require('readline-sync');

// Solicitar ao usuário que insira os dois números
const num1 = parseFloat(readline.question("Digite o primeiro número: "));
const num2 = parseFloat(readline.question("Digite o segundo número: "));

// Calcular a soma dos dois números
const soma = num1 + num2;

// Exibir a soma
console.log("A soma de " + num1 + " e " + num2 + " é igual a: " + soma);
