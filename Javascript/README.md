# Javascript - Funcionalidades ES6

Laços de repetições e funcionalidades.

## Filter

Objeto que iremos usar:

```
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
```

Dou um nome para uma variável que armazena cada iteração (cadaAluno)

`const alunosFiltrados = alunos.filter((cadaAluno) => cadaAluno.idade >= 28)`

Retorna um novo array

## Find

`const alunoEncontrar = alunos.find(alunoEncontrado => alunoEncontrado.nome == "Matheus")`

Não retorna array, retorna um objeto. Retorna o **primeiro objeto** que ele encontrar e depois para de procurar.

## FindIndex

Retorna qual posição do array o objeto está

`const alunoEncontradoIndex = alunos.findIndex(alunoEncontradoIndex => alunoEncontradoIndex.nome == "Matheus")`

Retorna index 1

## Reduce

Usamos o reduce para trabalhar com lógica em cada iteração.

O reduce 2 parâmetros. O 1 é uma função e o 2 o valor inicial.

`const idades = alunos.reduce(()=>{}, 0)`

Dentro da função do reduce ele recebe o valor de cada iteração e um valor acumulado de cada iteração

`const idades = alunos.reduce((acumulador, valorCadaAluno)=>{}, 0)`

Soma cada iteração e armazena na variável **acumulador**

```
const idades = alunos.reduce((acumulador, valorCadaAluno)=>{
    return acumulador + valorCadaAluno.idade;
}, 0);
```

## Soma

Verifica se algum elemento satisfaz determinada condição.
Se algum item satisfaz a condição ele retorna True, caso não, retorna false.

`const alunosVerificarIdade = alunos.some(acadaAluno => cadaAluno.idade < 10)`

Retorna false porque não tem idades inferiores a 10.

## Every

Verifica se todos os elementos satisfazem a condição. Retorna true se sim, e false se alguma não satisfazer.

`const alunosVerificarTodasIdades = alunos.every(cadaAluno => cadaAluno.idade > 10)`

Retorna true porque todos as idades são maiores que 10.
