// Напишіть програму, яка використовує for of, щоб пройтися по масиву чисел [5,12,33,2,17,28] і обчислити їх загальну суму.

const items = [5, 12, 33, 2, 17, 28]
let result = 0

for(let item of items) {
    result += item    
}
console.log(result)