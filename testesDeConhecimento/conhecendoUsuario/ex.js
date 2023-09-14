let nome = prompt('Informe o seu nome');
let idade = parseInt(prompt('Informe a sua idade'));
let peso = prompt('Informe o seu peso');
let altura = prompt('Informe a sua altura');
let profissao = prompt('Informe a sua profissão');

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + 'M de altura e pesa ' + peso + 'kg');

if (idade < 18){
    console.log('Sem gelada pra você hoje...');
}else{
    console.log('Você está liberado para tomar umas geladas!');
};

let meses = idade * 12;
let semanas = idade * 52;
let dias = idade * 365;

console.log('A sua idade em meses é: ' + meses);
console.log('A sua idade em semanas é: ' + semanas);
console.log('A sua idade em dias é: ' + dias);

let imc = peso / (altura * altura);
console.log('Seu IMC é: ' + imc + 'kg/m2');

switch(true){

    case imc < 18.5:
        console.log('A faixa do seu imc indica magreza.');
        break;

    case imc >= 18.5 && imc <= 24.9:
        console.log('A faixa do seu imc indica normal.');
        break;

    case imc >= 24.9 && imc <= 30:
        console.log('A faixa do seu imc indica sobrepeso.');
        break;

    case imc > 30:
        console.log('A faixa do seu imc indica obesidade.');
        break;

    default:
        console.log('Default');
        break;        
};

let anoNascimento = 2023 - idade;

console.log(nome + ', o ano que você nasceu foi: ' + anoNascimento);