//Questão 5
var a  = {
    nome : 'Pedro'
};

var b = {
    nome : a.nome
};

console.info(a === b); // FALSE
console.info(a.nome === b.nome); // TRUE

a.nome = 'Maria';

console.dir(a); // Exibe o conteúdo do objeto a
console.dir(b); // Exibe o conteúdo do objeto b

console.info(a.nome === b.nome); // FALSE