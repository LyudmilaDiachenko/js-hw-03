// Напиши скрипт, який рахує суму елементів двох масивів.
// Для реалізації використовуй методи з матеріалів лекції

const array1 = [5, 10, 15, 20]
const array2 = [10, 20, 30]
let arrays = array1.concat(array2)
let sum = 0

for(let array of arrays) {
    sum += array
}
console.log(sum)