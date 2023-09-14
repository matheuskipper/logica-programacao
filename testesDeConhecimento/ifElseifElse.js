let nome = prompt('Digite o seu nome');
let idade = Number(prompt('Digite a sua idade'));
let sexo = prompt('Digite o seu sexo (masculino/feminino');

if(idade < 18){
    console.log('Ops... Você é menor de idade. Infelizmente não poderá entrar!')
}else if(sexo === 'feminino' && idade >= 18){
    console.log('Parabéns! Você está liberada para entrar!');
    console.log(nome + ', agora que você foi liberada para fazer parte da comunidade, nós vamos te enviar um e-mail com mais informações de acesso. Até logo!');
}else {
    console.log('Parabéns! Você está liberado para entrar!');
    console.log(nome + ', agora que você foi liberado para fazer parte da comunidade, nós vamos te enviar um e-mail com mais informações de acesso. Até logo!');
};
