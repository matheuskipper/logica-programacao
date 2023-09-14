 let regularArray = [2, 5, 4, 7, 9, 15, 22, 28];
 console.log('O array original é: ', regularArray);

let count = 0

 while(count < regularArray.length) {
    regularArray[count] += count;
     count++
 };

 console.log('O novo array é: ', regularArray);


 // PODE SER FEITO A MESMA COISA UTILIZANDO O 'FOR':


let regularArray2 = [2, 5, 4, 7, 9, 15, 22, 28];

console.log('O array original é: ', regularArray2);

 let count2 = 0
 while(count2 < regularArray2.length) {
     regularArray2[count2] += count2;
     count2++
 };

 console.log('O novo array é: ', regularArray2);




