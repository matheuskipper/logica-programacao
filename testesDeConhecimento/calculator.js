let operacao = prompt('Qual operação você quer fazer? (adição, subtração, multiplicação, divisão)');
let numero1 = Number(prompt('Digite o primeiro número da operação'));
let numero2 = Number(prompt('Digite o segundo número da operação'));

switch(operacao) {
    case 'adição':
        console.log(numero1 + "+" + numero2);
        console.log(numero1 + numero2);
        break;

    case "subtração":
        console.log(numero1 + "-" + numero2);
        console.log(numero1 - numero2);
        break;

    case "multiplicação":
        console.log(numero1 + "x" + numero2);
        console.log(numero1 * numero2);
        break;

    case 'divisão':
        console.log(numero1 + "/" + numero2);
        console.log(numero1 / numero2);
        break;

    default:
        console.log('Ops... Algo deu errado!');
        break;
}