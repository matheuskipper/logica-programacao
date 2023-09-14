let array = [];
let arrayInvertido = [];

for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt('Digite o ' + (i + 1) + 'º número'));
    array[i] = numero;
}

console.log('O array criado foi: ' + array);


let contador = 4;
for (let i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador];
    contador--
};

console.log('O array criado, de forma invertida ficou assim: ' + arrayInvertido);
