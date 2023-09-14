let carros = [];
let marcas = [];
let continuar = true;
let contador = 0;

alert('Bem vindo à sua garagem virtual! Aqui você pode inserir os seus carros para deixar registrado no sistema!');

while (continuar) {
    let carro = prompt('Insira o modelo do carro');
    let marca = prompt('Insira a marca do carro');
    carros[contador] = carro;
    marcas[contador] = marca;
    contador++;

    let desejaContinuar = prompt('Digite 1 se você deseja inserir mais algum carro na garagem. Se não, insira 2.');
    if(desejaContinuar == 1){
        continuar = true;
    }else if (desejaContinuar == 2){
        continuar = false;
    }else {
        console.log('Ocorreu um erro, tente novamente!');
    };
};

console.log('Sua garagem está assim:');

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i] + ' - ' + marcas[i]);
}