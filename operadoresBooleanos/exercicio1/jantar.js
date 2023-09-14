let fome = prompt('Você está com fome?');
let dinheiro = prompt('Você tem dinheiro?');
let restaurnateAberto = prompt('Seu restaurante favorito está aberto?');

if(fome === 'sim' && dinheiro === 'sim' && restaurnateAberto === 'sim') {
    console.log('Hoje o jantar será no seu restaurante preferido!');
}else if(fome === 'sim' && dinheiro === 'sim' && restaurnateAberto === 'não') {
    console.log('Peça um delivery!');
}else if(fome === 'não' || dinheiro === 'não') {
    console.log('hoje a janta será em casa');
}