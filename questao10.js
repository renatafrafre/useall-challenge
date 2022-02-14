// Questão 10
const array = [1, 2, 1, 3, 4, 3, 5];

const acharDuplicatas = array => array.filter((item, index) => array.indexOf(item) !== index),
    elementosDuplicados = acharDuplicatas(array);

console.log(elementosDuplicados);