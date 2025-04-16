function soma(a: number, b: number): number {
  return a + b;
}
function subtracao(a: number, b: number): number {
  return a - b;
}
function multiplicacao(a: number, b: number): number {
  return a * b;
}
function divisao(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}
function potencia(base: number, expoente: number): number {
  return Math.pow(base, expoente);
}
function raizQuadrada(numero: number): number {
  if (numero < 0) {
    throw new Error("Raiz quadrada de número negativo não é permitida.");
  }
  return Math.sqrt(numero);
}
function fatorial(numero: number): number {
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
function media(...numeros: number[]): number {
  if (numeros.length === 0) {
    throw new Error("Nenhum número fornecido para calcular a média.");
  }
  const somaTotal = numeros.reduce((acc, num) => acc + num, 0);
  return somaTotal / numeros.length;
}
