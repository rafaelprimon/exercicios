let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

 // 1 - Agora vamos fazer alguns exercícios de fixação para consolidarmos os conhecimentos adquiridos no video anterior! 😉
//Crie um objeto player contendo as variáveis listadas abaixo.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let players = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
}

console.log("A jogadora" + " " + players.name + ' ' + players.lastName + ' ' + 'tem' + ' ' + players.age + ' ' + 'anos de idade.');

players['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora" + " " + players.name + ' ' + players.lastName + ' ' + 'foi eleita a melhor do mundo por 6 vezes, nos anos de:' + ' ' + players.bestInTheWorld + '.');

console.log("A jogadora possui" + ' ' + players.medals.golden + ' medalhas de ouro e ' + players.medals.silver + ' medalhas de prata.');