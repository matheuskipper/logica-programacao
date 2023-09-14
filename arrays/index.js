// O Array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável.
// Os elementos de um array são organizados em uma ordem específica e cada elemento é associado a um índice, que começa a pertir de 0.
// Isso significa que você pode acessar cada elemento do array usando seu índice correspondente.

let nomes = ['Matheus', 'Bruno', 'Pedro', 'Lucas', 'Thiago'];

console.log(nomes);

console.log('O primeiro nome da lista é: ' + nomes[0]);
console.log('O segundo nome da lista é: ' + nomes[1]);
console.log('O terceiro nome da lista é: ' + nomes[2]);
console.log('O quarto nome da lista é: ' + nomes[3]);
console.log('O quinto nome da lista é: ' + nomes[4]);



// É possível alterar o valor dos índices do array:

nomes[0] = 'João';
console.log(nomes[0]);