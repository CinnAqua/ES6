const alunos = [{
    nome: 'Gustavo',
    nota: 3,
},{
    nome: 'Julia',
    nota: 7,
},{
    nome: 'Paula',
    nota: 6,
},{
    nome: 'Wagner',
    nota: 4,
},{
    nome: 'Lucio',
    nota: 9,
}]

console.log(alunos)

const filtraAlunosQuePassaram = aluno => aluno.nota >= 6

const alunosQuePassaram = alunos.filter(filtraAlunosQuePassaram)

console.log(alunosQuePassaram)