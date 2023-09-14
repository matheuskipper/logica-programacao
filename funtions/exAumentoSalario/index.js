function solicitarInformacoes () {
    let nome = prompt('Insira o nome do funcionário');
    let salario = Number(prompt('Insira o salário do funcionário'));

    calcularAumento(nome, salario);
};

function verificarSeContinua (){
    let desejacontinuar = prompt('Insira 1 para sair e 2 para continuar calculando aumentos');

    if(desejacontinuar !== '1')
    solicitarInformacoes();
}


function calcularAumento (nome, salario) {
    let aumento = 0;
  if (salario <= 1500){
    aumento = salario * 0.20;
    console.log('O aumento do(a) funcionário(a) ' + nome + ', com salário de ' + salario + ' reais, foi de 20%. O novo salário é: ' + (salario + aumento) + ' reais');
  } else if (salario <= 2000){
    aumento = salario * 0.15;
    console.log('O aumento do(a) funcionário(a) ' + nome + ', com salário de ' + salario + ' reais, foi de 15%. O novo salário é: ' + (salario + aumento) + ' reais');
  } else if (salario <= 3000){
    aumento = salario * 0.10;
    console.log('O aumento do(a) funcionário(a) ' + nome + ', com salário de ' + salario + ' reais, foi de 10%. O novo salário é: ' + (salario + aumento) + ' reais');
  } else {
    aumento = salario * 0.05
    console.log('O aumento do(a) funcionário(a) ' + nome + ', com salário de ' + salario + ' reais, foi de 5%. O novo salário é: ' + (salario + aumento) + ' reais');
  }

  verificarSeContinua();

};

solicitarInformacoes();