//Escrever e Chamar Funções:
//a) Escreva uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.

//Esta função soma recebe dois números como parâmetros (num1 e num2) e retorna a soma deles.

function soma(num1, num2) {
    return num1 + num2;
}

//b) Escreva uma função chamada ehPar que receba um número como parâmetro e retorne true se o 
// número for par e false se for ímpar.

//Esta função ehPar recebe um número como parâmetro e verifica se é par ou não. 
//Se o número for par, retorna true, caso contrário, retorna false.

function ehPar(numero) {
    return numero % 2 === 0;
}

//Para chamar essas funções, você pode fazer o seguinte:

console.log(soma(5, 3)); // Saída: 8
console.log(ehPar(6)); // Saída: true
console.log(ehPar(7)); // Saída: false

