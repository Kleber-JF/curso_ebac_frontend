// Função de multiplicação
function multiplicacao(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

// Exemplos de uso
const resultadoMultiplicacao = multiplicacao(5, 3);
const saudacaoParaUsuario = saudacao('Alice');

console.log(resultadoMultiplicacao); // Saída: 15
console.log(saudacaoParaUsuario); // Saída: "Olá Alice"
