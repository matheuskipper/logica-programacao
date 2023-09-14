let numero = parseInt(prompt('Insira um número inteiro e positivo'));
let fibonacci = [];
fibonacci[0] = numero - 1;
fibonacci[1] = numero;

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
};

console.log('Os números na sequência de Fibonacci são: ' + fibonacci);