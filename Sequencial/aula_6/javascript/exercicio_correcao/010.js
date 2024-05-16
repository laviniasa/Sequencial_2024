function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Exemplo de uso da função
const email = "exemplo@email.com";
if (validarEmail(email)) {
    console.log("O e-mail " + email + " é válido.");
} else {
    console.log("O e-mail " + email + " é inválido.");
}
