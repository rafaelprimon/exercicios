// 3- Agora inverta o lado do triângulo. Por exemplo:
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let base = 5;
let colocaLinha = " ";
let asterisco = "*";
let coluna = base;

for (let index = 0; index < base; index += 1) {
    for (let colunaIndex = 0; colunaIndex <= base; colunaIndex += 1) {
        if (colunaIndex < coluna) {
            colocaLinha = colocaLinha + " ";
        } else {
            colocaLinha = colocaLinha + asterisco;
        };
    };
    console.log(colocaLinha);
    colocaLinha = " ";
    coluna -= 1;
};
