let continuar = true;
let somaDasNotas = 0;
let qtdHomem = 0;
let mulherMaiorQueSete = 0;
let quantidadeDeNotas = 0;

while (continuar) {

    let notaAluno = Number(prompt('Digite a nota do aluno'));
    let sexoAluno = prompt('Digite H para homem e M para mulher');
    quantidadeDeNotas++;
    somaDasNotas = somaDasNotas + notaAluno;

    if (sexoAluno.toUpperCase() === 'H'){
        qtdHomem++;
    };
    if (sexoAluno.toUpperCase() === 'M' && notaAluno >= 7) {
        mulherMaiorQueSete++
    };

    let desejaContinuar = prompt('Se quiser inserir mais notas digite S');

    if (desejaContinuar.toUpperCase() != 'S') {
        continuar = false;
    };
};

console.log('A quantidade de notas inseridas foi: ' + quantidadeDeNotas);
console.log('A média das notas inseridas foi: ' + somaDasNotas / quantidadeDeNotas);
console.log('A quantidade de homens que tiveram notas foi: ' + qtdHomem);
console.log('A quantidade de mulheres que tiveram nota maior que sete foi: ' + mulherMaiorQueSete);