let arrayNomes = [];
let arrayIdades = [];
let contador = 0;
let continuar = true;

alert('Aqui você pode inserir os nomes dos alunos e suas respectivas idades!');


while(continuar){
    let nome = prompt('Insira o nome do aluno');
    let idade = Number(prompt('Insira a idade do aluno'));
    arrayNomes[contador] = nome;
    arrayIdades[contador] = idade;
    contador++

    let desejaContinuar = prompt('Digite 1 para inserir mais dados ou 2 para encerrar');

    if(desejaContinuar == '1'){
        continuar = true;
    }else if(desejaContinuar == '2'){
        continuar = false;
    }else{
        alert('Ops... Algo deu errado') && continuar == false;
    };
};

console.log('Estes são os dados cadastrados:');
for(let i = 0; i < arrayNomes.length; i++){
    console.log(arrayNomes[i] + ' - ' + arrayIdades[i] + ' anos');
};


 