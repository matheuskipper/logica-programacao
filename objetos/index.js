class Aluno {
    nome
    idade
    areaAtuacao
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

console.log('======= Cadastro de Alunos =======');
let alunos = [];
let continuar = true;
let indexDeAluno = 0;

while(continuar){
    let nome = prompt('Insira o nome do aluno');
    let idade = parseInt(prompt('Insira a idade do aluno'));
    let aluno = new Aluno(nome, idade);

    let areaAtuacao = prompt('Insira a área de atuação do aluno');
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexDeAluno] = aluno;
    let desejaContinuar = prompt('Insira 1 caso deseje cadastrar outro aluno');
    if(desejaContinuar !== '1'){
        continuar = false;
    }else {
        indexDeAluno++
    }

}