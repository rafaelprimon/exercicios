/*Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

Modifique a estrutura da função para que ela seja uma arrow function .

Modifique as concatenações para template literals .*/

/*function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);*/

  const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} + ' ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
      } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
      }
  }

  testingScope(true);

  /*Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sort = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}

console.log(oddsAndEvens);

const sortedArray = sort();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);


/*Parte II
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:

      longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'*/


const factorial = number => {
    let result = 1
    
    for (let index = 2; index <= number; index += 1) {
        result *= index
     }
    
    return result
    }
    
console.log(factorial(5))

// Recursiva

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

const longestWord = text => {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }

    return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

// Longestword com sort em uma linha.

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))