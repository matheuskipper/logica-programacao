let arrayNumeros = [1, 2, 3, 4];

// O método INDEXOF mostra o indice em que o elemento pedido se encontra.
console.log(arrayNumeros.indexOf(1));

// O método PUSH adiciona um elemento ao array.
arrayNumeros.push(5);
console.log(arrayNumeros);

// O método INCLUDES verifica se o elemento pedido está inserido no array, se estiver, retornará TRUE, se não, retornará FALSE.
console.log(arrayNumeros.includes(3));
console.log(arrayNumeros.includes(7));

// O método SORT classifica os elementos como strings em ordem alfabética e crescente. A classificação em ordem alfabética funciona bem para strings ("Apple" vem antes de "Banana").
// Porém, a classificação dos números pode produzir resultados incorretos. “25” é maior que “100”, porque “2” é maior que “1”.

let array = [3, 1, 5, 2, 4, 9, 7, 0, 6, 8];

console.log(array.sort());
