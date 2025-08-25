function soma(a: number,b: number) {
    return a + b;
}

const anonima = (a: number,b: number) => {
    return a + b;
};
soma(2,4);
anonima(2,4);

const variavel = '10';
console.log(variavel);

const x = 10;
const y = 12;

const result = soma(x,y);

console.log(result);