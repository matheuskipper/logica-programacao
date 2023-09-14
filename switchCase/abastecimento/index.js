let decisao = prompt('Você deseja abastecer com gasolina, álcool ou apenas calibrar os pneus?');

switch(decisao){

    case 'gasolina':
        let valorG = Number(prompt('qual valor você deseja abastecer?'));
        let resultadoG = valorG / 5;
        console.log('A quantidade abastecida foi de ' + resultadoG + ' litros');
        break;

    case 'álcool':
        let valorA = Number(prompt('qual valor você deseja abastecer?'));
        let resultadoA = valorA / 3;
        console.log('A quantidade abastecida foi de ' + resultadoA + ' litros');
        break;

    case 'calibrar os pneus':
        console.log('pneus calibrados com sucesso!');
        break;

    default:
        console.log('Ops... Algo deu errado');
        break;
}