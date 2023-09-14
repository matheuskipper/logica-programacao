let continuar = true;
let qtdCarro = 0;
let garagem = 0;
let ford = 0;
let chevrolet = 0;
let fiat = 0;

while (continuar) {
    let marcaCarro = prompt('Insira a marca do carro');
    let modeloCarro = prompt('Insira o modelo do carro');
    qtdCarro++

    if(marcaCarro === 'ford'){
        ford++;
    }else if (marcaCarro === 'chevrolet'){
        chevrolet++;
    }else if (marcaCarro === 'fiat'){
        fiat++;
    };

    let desejaContinuar = prompt('Deseja inserir mais algum carro na garagem? S/N');
    if(desejaContinuar.toUpperCase() === 'S'){
        continuar = true;
    }else {
        continuar = false;
    };

};

console.log('Bem vindo à sua garagem!');
console.log('O número de carros da marca Ford que você tem é: ' + ford);
console.log('O número de carros da marca Chevrolet que você tem é: ' + chevrolet);
console.log('O número de carros da marca Fiat que você tem é: ' + fiat);