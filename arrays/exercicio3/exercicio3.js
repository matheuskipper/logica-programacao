let array = [];
let arrayInvertido = [];
let quantidade = parseInt(prompt('Digite a quantidade de números que deseja inserir na lista'));

for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt('Digite o ' + (i + 1) + 'º número'));
    array[i] = numero;
}
console.log('A lista criada foi: ' + array);

let contador = quantidade - 1;
for (let i = 0; i < quantidade; i++) {
    arrayInvertido[i] = array[contador];
    contador--
}

console.log('A lista criada, de forma invertida é: ' + arrayInvertido);