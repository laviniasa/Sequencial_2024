// Importar o módulo readline-sync
const readline = require('readline-sync');

// Solicitar ao usuário que insira seu nome
const nome = readline.question("Por favor, digite seu nome: ");

// Exibir a saudação personalizada
console.log("Olá, " + nome + "!");
