let array = [];
let indicesEncontrados = [];

for (let i = 0; i < 10; i++){
    let numero = parseInt(prompt('Digite o ' + (i + 1) + 'º número'));
    array[i] = numero;
};

let numeroProcurado = parseInt(prompt('Digite o número que deseja procurar no array'));
let contador = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] == numeroProcurado) {
        indicesEncontrados[contador] = i;
        contador++
    }
}

console.log('O número inserido aparece nos índices: ' + indicesEncontrados);