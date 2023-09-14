let lista = [1, 2, 3, 4, 5, 6, 7];

console.log(lista);

lista.push(8);

console.log('A nova lista é: ' + lista);

let valorEliminado = lista.pop();

console.log('A lista alterada é: ' + lista);
console.log('O valor eliminado da lista foi: ' + valorEliminado);

let lista2 = [8, 9, 10, 11, 12, 13, 14];


let listaFinal = lista.concat(lista2);
console.log(listaFinal);