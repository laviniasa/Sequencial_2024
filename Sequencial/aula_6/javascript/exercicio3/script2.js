//Realizar Operações Matemáticas Simples:
//a) Crie uma variável numero1 com o valor 10 e uma variável numero2 com o valor 5.
// Em seguida, exiba a soma, subtração, multiplicação e divisão desses números.

let numero1 = 10
let numero2 = 5

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao =  numero1 * numero2;
let divisao = numero1 / numero2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);

//b) Calcule o quadrado de um número fornecido pelo usuário e exiba o resultado.

let numero = parseInt(prompt("digite um numero"));
let quadrado = numero * numero;

console.log ("o quadrado do numero é", quadrado);

//prompt(): É uma função JavaScript que exibe uma caixa de diálogo ao usuário, solicitando entrada. 
//Ela exibe uma mensagem (opcional) e uma área para o usuário digitar alguma informação.
//No contexto do código, estamos usando prompt() para pedir ao usuário que insira um número.

/*
parseInt(): Esta é uma função JavaScript que converte uma string em um número inteiro.
Quando o usuário digita algo na caixa de diálogo prompt(), o que é capturado é uma string, 
mesmo que seja um número. Por exemplo, se o usuário insere "10", JavaScript trata isso como uma string,
não como o número 10. Usando parseInt(), convertemos essa string em um número inteiro.
*/