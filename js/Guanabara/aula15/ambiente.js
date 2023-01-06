var num = [5, 8, 2, 3];

const log = () => {
    console.log(`o seu vetor tem ${num}`);
}

log();

num[4] = 6//cria uma nova posição no array e adiciona o valor 6

log();

num.push(7) //acresenta um elemento no final do array

log();

/*
isso: num[ultimaposicaoarray] = 15
é a mesma coisa que isso: num.push(7)
*/
console.log(num.length); //mostra o tamanho do vetor

num.sort();//ordena os números do vetor em oredm crescente

console.log(num);

console.log(num.indexOf(3));//encontra a posição de um elemento no vetor