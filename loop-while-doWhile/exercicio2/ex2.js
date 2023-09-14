let nome = prompt('Qual o seu nome?');
let cpf = Number(prompt('Digite o seu CPF'));
let operacao;
let valor = 0;
let saldo = 100;
let maiorValor = 0;
let mediaValores = 0;
let contador = 0;
let continuar = 1;

do {
    operacao = prompt('qual operação você deseja fazer? (saque/depósito)');
    valor = parseFloat(prompt('Digite o valor desejado'));
    mediaValores += valor;

    if (valor > maiorValor) {
        maiorValor = valor;
    }

    if (operacao === 'saque' && valor <= saldo) {
        saldo -= valor;
    } else if (operacao === 'saque' && valor > saldo) {
        console.log('O valor inserido deve ser menor que o saldo');
    } else {
        saldo += valor;
    };

    contador++;
    console.log('Seu saldo é de: ' + saldo);
    console.log('O maior valor inserido foi: ' + maiorValor);
    console.log('A média dos valores foi: ' + (mediaValores / contador));

    continuar = parseInt(prompt('Você deseja continuar? 1-sim, 2-não'));

} while (continuar === 1);

