// Array de objetos representando alunos
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Pedro', nota: 4 }
];

// Função para retornar alunos com nota maior ou igual a 6
function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamada da função e exibição dos resultados
const alunosAprovadosArray = alunosAprovados(alunos);
console.log('Alunos aprovados:');
console.log(alunosAprovadosArray);
