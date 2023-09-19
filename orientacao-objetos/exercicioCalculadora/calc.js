class Calculadora {
    numeroUm
    numeroDois

    somar(){
        console.log(this.numeroUm + this.numeroDois);
    }

    subtrair(){
        console.log(this.numeroUm - this.numeroDois);
    }

    multiplicar(){
        console.log(this.numeroUm * this.numeroDois);
    }

    dividir(){
        console.log(this.numeroUm / this.numeroDois);
    }
}

let operacao = new Calculadora();
operacao.numeroUm = 10;
operacao.numeroDois = 5;

operacao.somar();
operacao.subtrair();
operacao.multiplicar();
operacao.dividir();