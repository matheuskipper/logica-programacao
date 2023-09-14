let continuar = true
let contador = 0;
let nomeAluno = [];
let notaAluno = [];

while(continuar){
    let aluno = prompt('Insira o nome do ' + (contador + 1) + 'º aluno');
    let nota = parseInt(prompt('Insira a nota da prova'));
    nomeAluno[contador] = aluno;
    notaAluno[contador] = nota;
    contador++;

    let desejaContinuar = prompt('Digite S se deseja inserir mais notas');
    if (desejaContinuar.toUpperCase() == 'S'){
        continuar == true;
    }else {
        continuar = false;
    }
}

console.log('Notas dos alunos: ');
for (let i = 0; i < nomeAluno.length; i++) {
    console.log(nomeAluno[i] + ' - ' + notaAluno[i]);
};

let somaDasNotas = 0;
for (let i = 0; i < notaAluno.length; i++) {
    somaDasNotas += notaAluno[i];
}

let mediaDasNotas = somaDasNotas / nomeAluno.length;
console.log('A soma das notas foi: ' + somaDasNotas);
console.log('A média geral da turma foi: ' + mediaDasNotas);