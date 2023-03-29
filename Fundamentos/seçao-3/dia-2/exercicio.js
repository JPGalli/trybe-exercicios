// começando

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;

for(let indice = 0; indice < numbers.length; indice += 1){
    sum += numbers[indice];
    media = sum / (indice + 1);
}
  console.log(sum);
  console.log(media);
  
  
