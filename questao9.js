// Questão 9

let a = 3,
    b = 5;

// Valores originais.
console.log(a);
console.log(b);

// Atribuição via desestruturação.
[a, b] = [b, a];

// Valores trocados.
console.log(a);
console.log(b);