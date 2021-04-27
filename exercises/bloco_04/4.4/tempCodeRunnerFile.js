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