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

if (media > 20){
    console.log("Valor maior que 20");
 }else{
    console.log("Valor menor que 20");
}

let maiorNumero = 0;
let numeroEscolhido;
 

for(indice = 0; indice < numbers.length; indice =+ 1){
    let numeroEscolhido = numbers[indice];

    if (numeroEscolhido > maiorNumero){
        maiorNumero = numeroEscolhido;  
    }    
}
    console.log(maiorNumero);

let numeroImpar;    

for(indice = 0; indice < numbers.length; indice =+ 1){
//     if ((numbers[indice] % 2) != 0){      
           
//     }
// }
//   console.log("Este número é impar.");   