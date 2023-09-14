let nome = prompt('insira seu nome');
let idade = parseInt(prompt('insira sua idade'));
let altura = parseInt(prompt('insira sua altura'));
let peso = parseInt(prompt('insira seu peso'));

console.log(nome);
console.log(idade);
console.log(altura);
console.log(peso);

let anoDeNascimento = 2023 - idade;
console.log(anoDeNascimento);

let imc = peso / (altura * altura);
console.log(imc);

console.log (`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoDeNascimento}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é ${imc}kg/m2`);