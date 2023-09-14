let continuar = true;
let contador = 0;

alert('Teste do alerta!');

let nomes = [];
let idades = [];

while(continuar){
let nome = prompt('Insira seu nome');
let idade = parseInt(prompt('Insira a sua idade'));
nomes[contador] = nome;
idades[contador] = idade;
contador++

let desejaContinuar = prompt('Digite 1 se deseja inserir mais informações');

if (desejaContinuar !== '1'){
    continuar = false;
}
};

console.log('Login dos usuários:')

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i] + ' - ' + idades[i]);
};