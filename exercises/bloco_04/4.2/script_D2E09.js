// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let criaArray = [];

for (let index = 0; index <= 25; index +=1) {
    criaArray.push(index);
} 

console.log(criaArray);

for (let index = 0; index < criaArray.length; index += 1) {
    console.log(criaArray[index] / 2);
  };
