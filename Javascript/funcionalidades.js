const alunos = [
    {
        nome: "Andressa",
        idade: 28,
    },
    {
        nome: "Matheus",
        idade: 26,
    }
];

const alunosFiltrados = alunos.filter((cadaAluno) => cadaAluno.idade >= 28)
console.table(alunosFiltrados)

const alunoEncontrar = alunos.find((alunoEncontrado) => alunoEncontrado.nome == "Matheus")
console.log(alunoEncontrar)

const alunoEncontradoIndex = alunos.findIndex(alunoEncontradoIndex => alunoEncontradoIndex.nome == "Matheus")
console.log(alunoEncontradoIndex)

const idades = alunos.reduce((acumulador, valorCadaAluno)=>{
    return acumulador + valorCadaAluno.idade;
}, 0);

console.log(idades)

const alunosVerificarIdade = alunos.some(cadaAluno => cadaAluno .idade < 10)
console.log(alunosVerificarIdade)

const alunosVerificarTodasIdades = alunos.every(cadaAluno => cadaAluno.idade > 10)
console.log(alunosVerificarTodasIdades)