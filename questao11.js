// Questão 11
let valor = parseInt(window.prompt('Informe o valor em R$: '));

function caixa() {
    let cem,
        cinquenta,
        vinte,
        dez;

    let resto = valor;
        
    if (resto >= 100) {
        cem = Math.floor(resto / 100);
        resto = resto - (cem * 100);
    };

    if (resto >= 50) {
        cinquenta = Math.floor(resto / 50);
        resto = resto - (cinquenta * 50);
    };

    if (resto >= 20) {
        vinte = Math.floor(resto / 20);
        resto = resto - (vinte * 20);
    };

    if (resto >= 10) {
        dez = Math.floor(resto / 10);
        resto = resto - (dez * 10);
    };

    console.log('Valor do Saque: R$' + valor.toFixed(2));
    console.log('Cédulas a entregar:');

    if (cem >= 1) console.log(`${cem} notas de R$100.00`);

    if (cinquenta >= 1) console.log(`${cinquenta} notas de R$50.00`);

    if (vinte >= 1) console.log(`${vinte} notas de R$20.00`);

    if (dez >= 1) console.log(`${dez} notas de R$10.00`);
}

caixa();