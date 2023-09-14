function calculadora (num1, num2, operacao) {
    let resultado;
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);

    switch(operacao){
        case '+':
            resultado = numero1 + numero2;
            break;
    
        case '-':
            resultado = numero1 - numero2;
            break;
    
        case '*':
            resultado = numero1 * numero2;
            break;
    
        case '/':
            resultado = numero1 / numero2;
            break;

        case 'e':
            let contador = 1;
            resultado = numero1 * numero1;
            while (contador < numero2 - 1) {
                resultado = resultado * numero1;
                contador++
            }
    };

    if (resultado == undefined || resultado > 1000000)
    resultado = 'ERRO';

    return resultado;
};

console.log(calculadora(18, 10, '+'));
