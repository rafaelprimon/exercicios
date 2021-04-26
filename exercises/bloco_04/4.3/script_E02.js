// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

//1 console.log();
//2 aumenta um asterisco de acordo com a quantidade de linha
// 3 entao, o n precisa acrescentar um asterisco, quando n =2, desce de linha e acrescenta 2 asteriscos

let base = 5;
let colocaLinha = "";
let asterisco = "*";

for (let index = 0; index <= base; index +=1) {
    console.log(colocaLinha);
    colocaLinha = colocaLinha + asterisco;
};

