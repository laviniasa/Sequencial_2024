//Implementar Loops (for e while):
//a) Crie um loop for que conte de 1 a 10 e exiba cada número no console.

for (let i = 1; i<= 10; i++){
    console.log(i)
}

/*
for: É a palavra-chave que inicia a declaração de um loop for.
let i = 1: Declara e inicializa uma variável i com o valor 1. Esta variável é comumente usada como um contador.
i <= 10: Esta é a condição que determina se o loop deve continuar executando. Enquanto i for menor ou igual a 10, o loop continuará.
i++: Isso é chamado de incremento. A cada iteração do loop, o valor de i é aumentado em 1.
console.log(i): A cada iteração do loop, este comando exibe o valor atual de i no console.
*/

//b) Crie um loop while que conte de 10 até 1 e exiba cada número no console.

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

/*
b) Loop while de 10 até 1:
let j = 10: Inicializa uma variável j com o valor 10.
while (j >= 1): Enquanto j for maior ou igual a 1, continue o loop.
console.log(j): Exibe o valor de j no console.
j--: Diminui j em 1 a cada iteração.
*/