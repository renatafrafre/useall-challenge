//Questão 8
function mediaAritmetica(num1, num2, num3) {
    num1 = parseFloat(window.prompt('Informe o primeiro valor: '));
    num2 = parseFloat(window.prompt('Informe o segundo valor: '));
    num3 = parseFloat(window.prompt('Informe o terceiro valor: '));

    media = (num1 + num2 + num3) / 3;

    console.log('Média: ' + media.toFixed(1));
};

mediaAritmetica();

function mediaAritmetica2() {
    let sum = 0,
        count = 0,  
        num = parseFloat(window.prompt('Informe o valor: '));

    while(num != 0) {
        sum += num;
        num = parseFloat(window.prompt('Informe o valor: '));
        count++;
    };

    const media = sum / count;
    console.log('Média : ' + media.toFixed(1));
};

mediaAritmetica2();