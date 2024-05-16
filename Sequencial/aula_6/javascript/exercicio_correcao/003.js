// Importar o módulo readline-sync
const readline = require('readline-sync');

// Solicitar ao usuário que insira um número
const numero = parseInt(readline.question("Digite um número: "));

// Verificar se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}
