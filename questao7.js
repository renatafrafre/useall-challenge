//Questão 7
peso = window.prompt('Informe o peso: ');
altura = window.prompt('Informe a altura: ');

imc = peso / (altura * altura);

if (imc >= 25){
    console.log('Indíce de massa corporal (IMC): ' + imc.toFixed(2));
    console.log('Acima do peso.');
};

if (imc >= 18 && imc < 25){
    console.log('Indíce de massa corporal (IMC): ' + imc.toFixed(2));
    console.log('Peso normal.');
};

if (imc < 18){
    console.log('Indíce de massa corporal (IMC): ' + imc.toFixed(2));
    console.log('Abaixo do peso.');
};