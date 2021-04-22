let a = 48;
let b = 87;
let c = 49;

let somaAngulos = a + b + c;

let angulosPositivos = a > 0 && b > 0 && c > 0;

if (angulosPositivos){
    if (somaAngulos ===180){
    console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("Erro: ângulo inválido");
}