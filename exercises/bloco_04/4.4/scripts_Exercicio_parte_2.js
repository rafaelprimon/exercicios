// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

function verificaPalindromo (palavra) {
    let letras = palavra.split('');
    let isPalindrome = true;
    for (let index in letras) {
        if (letras[index] != palavra[(palavra.length - 1) - index]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

console.log(verificaPalindromo('arara')); //true
console.log(verificaPalindromo('desenvolvimento')); //false

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .

function indiceDoMaior (numeros) {
    let indiceMaior = 0;
    for (let index in numeros) {
        if (numeros[indiceMaior] < numeros[index]){
            indiceMaior = index;
        };
    };
    return indiceMaior;
};

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];

function indiceDoMenor (numeros){
    let indiceMenor = 0;
    for(let index in numeros){
        if (numeros[indiceMenor] > numeros[index]){
            indiceMenor = index;
        };
    };
    return indiceMenor;
};

console.log(indiceDoMenor ([ 2, 4, 6, 7, 10, 0, -3]));