let idade = Number(prompt('Insira sua idade'));
let nome = prompt('Insira seu nome');

if(idade === 19 && nome === 'Matheus') {
    console.log('Seu nome é Matheus e você tem 19 anos');
}else if(idade === 19 || nome === 'Matheus') {
    console.log('Seu nome é Matheus ou você tem 19 anos');
}else {
    console.log('Seu nome não é Matheus e você não tem 19 anos');
};