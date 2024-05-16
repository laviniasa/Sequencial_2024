function celsiusParaFahrenheit(temperaturaCelsius) {
    // Converter Celsius para Fahrenheit usando a fórmula de conversão
    const temperaturaFahrenheit = temperaturaCelsius * (9/5) + 32;
    return temperaturaFahrenheit;
}

// Exemplo de uso da função
const temperaturaCelsius = 20;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + "°C é igual a " + temperaturaFahrenheit.toFixed(2) + "°F");
