//Questão 6
x = 10;
y = 20;

x += x == 20 ? x/y : y/x;
y -= y == 10 ? y/x : x/y;

console.log(x); //12
console.log(y); //19.4