// Напишіть скрипт, який приймає масив чисел [23,1,45,87,4,55,6], 
// використовуючи for of для пошуку найбільшого числа в масиві.

const items = [23, 1, 45, 87, 4, 55, 6]
let maxNumber = items[0]

for(let item of items){
    if (item > maxNumber){
        maxNumber = item
    }
}
console.log("Найбільше число:", maxNumber)