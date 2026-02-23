//exercicio1

let a = Number(prompt("Digite o valor de A:"));
let b = Number(prompt("Digite o valor de B:"));
let c = Number(prompt("Digite o valor de C:"));


let nada;
if (a < b) {
    nada = a;
    a = b;
    b = nada;
}
if (a < c) {
    nada = a;
    a = c;
    c = nada;
}
if (b < c) {
    nada = b;
    b = c;
    c = nada;
}
if (a >= (b + c)) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (a * a === (b * b + c * c)) {
        console.log("TRIANGULO RETANGULO");
    }
    if (a * a > (b * b + c * c)) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (a * a < (b * b + c * c)) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
        console.log("TRIANGULO EQUILATERO");
    } else if (a === b || a === c || b === c) {
        console.log("TRIANGULO ISOSCELES");
    }
}



//exercicio2

let pares = 0


for (let i = 1; i <= 5; i++){
  let valor = Number(prompt("Digite o valor " + i));


  if (valor % 2 === 0) {
        pares = pares + 1;
    }
}
console.log(pares + " valores pares");



//exercicio3

let x = Number(prompt("Digite o valor de X:"));


for (let i = 1; i <= x; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}