"use strict";
function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}
function potencia(base, expoente) {
    return Math.pow(base, expoente);
}
function raizQuadrada(numero) {
    if (numero < 0) {
        throw new Error("Raiz quadrada de número negativo não é permitida.");
    }
    return Math.sqrt(numero);
}
function fatorial(numero) {
    if (numero < 0) {
        throw new Error("Fatorial de número negativo não é permitido.");
    }
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
function media(...numeros) {
    if (numeros.length === 0) {
        throw new Error("Nenhum número fornecido para calcular a média.");
    }
    const somaTotal = numeros.reduce((acc, num) => acc + num, 0);
    return somaTotal / numeros.length;
}
