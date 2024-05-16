//7 - Exercício de validação de senha: Escreva um programa que solicite ao usuário uma senha e verifique se ela atende a certos critérios (por exemplo, ter pelo menos 8 caracteres e conter pelo menos um número e uma letra maiúscula).

// Importar o módulo readline-sync
const readline = require('readline-sync');

// Função para verificar se a senha atende aos critérios
function validarSenha(senha) {
    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }
    
    // Verificar se a senha contém pelo menos um número e uma letra maiúscula
    let temNumero = false;
    let temMaiuscula = false;
    for (let caractere of senha) {
        if (!isNaN(parseInt(caractere))) {
            temNumero = true;
        }
        if (caractere === caractere.toUpperCase()) {
            temMaiuscula = true;
        }
    }
    
    return temNumero && temMaiuscula;
}

// Solicitar ao usuário que insira a senha
const senha = readline.question("Digite sua senha: ", { hideEchoBack: true });

// Verificar se a senha é válida
if (validarSenha(senha)) {
    console.log("Senha válida.");
} else {
    console.log("Senha inválida. Certifique-se de que tenha pelo menos 8 caracteres e contenha pelo menos um número e uma letra maiúscula.");
}
