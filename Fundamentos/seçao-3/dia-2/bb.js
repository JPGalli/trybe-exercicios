let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma = numbers[index] + soma + 1;
}
console.log(soma);