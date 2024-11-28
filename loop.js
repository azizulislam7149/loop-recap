
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// // console.log(sum); // Output: 15
// let num = 0;
// while(num <= 100){
//     if(num % 2 == 0){

//         console.log(num);
//         num ++;
//     }
// }
let number = 1;
let sum1 = 0;
while(number <= 600){
    console.log(number)
    if(number % 2 === 0){
        console.log('even number',number)
    };
    if(number%2 === 1){
        console.log('odd number', number)
    }
    sum1 = sum1 + number
    number++;
    console.log('total number', sum1)
}
for(let i= 0 ; i<50; i = i +2){
    console.log(i);
}
for(let i = 1; i < 50; i = i+ 2){
    console.log(i);
}
for(let i = 1; i <100; i++){
    console.log('You are lucky');
}
let sum = 0;
for(let i = 1; i <=1000; i++){
    console.log(i);
    sum = sum+ i;
}
console.log('sum of number',sum);

let n = 500;
while(n >= 0){
    console.log(n)
    n--;
}
for(let i = 120; 1 <=0; i--){
    console.log('decremental',i)
}
let mathSum = 0;
for(let i = 1; i <= 90; i++){
    if(i % 2 !==1){
        console.log('Not odd number', i);
        mathSum = mathSum + i;
        console.log('srep by step',mathSum)
    }
}
console.log('sum of number', mathSum)
for(let m = 0; m <= 30; m++){
    console.log(m)
    if(m > 10){
        break;
    }

}
let p = 599;
while(p >= 60){
    console.log(p)
    p--;
    if(p < 10){
        break
    }
}

let banana = [12, 12, 12, 12];
let averageLength = banana.length
console.log('length', averageLength);
let mangoSum = 0;
for(mango of banana){
    console.log(mango);
mangoSum = mangoSum + mango;
let totalAvg = mangoSum /averageLength;
console.log('average', totalAvg);
console.log('total mango', mangoSum);
}