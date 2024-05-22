//Usar Estruturas Condicionais (if/else):
//a) Solicite ao usuário que insira sua idade. Se a idade for maior ou igual a 18, exiba 
//"Você é maior de idade". Caso contrário, exiba "Você é menor de idade".

let idade = parseInt(prompt("digite sua idade: "));

if (idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade.");
}


//b) Solicite ao usuário que insira um número. Verifique se o número é positivo, 
//negativo ou zero e exiba o resultado.

let numero = parseInt(prompt("Digite um número: "));

if (numero > 0 ){
    console.log("O numero é positivo.");
}else if (numero < 0){
    console.log("O numero é negativo.");
}else{
    console.log ("O número é 0 !")
}

/*
solicitamos ao usuário que insira um número usando prompt(), convertemos a entrada para um número inteiro
com parseInt(), e então usamos uma estrutura condicional if/else if/else para verificar se o número 
é positivo, negativo ou zero.
*/