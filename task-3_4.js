// У вас є масив ["1-Pyton", "2-C++", "3-C#","4-PHP"].
// В результаті вам потрібно отримати ["Pyton", "C++", "C#","PHP"].
// Результат виведіть в консоль

const items = ["1-Pyton", "2-C++", "3-C#", "4-PHP"]

for(let i in items){
    items[i] = items[i].slice(2)
}
console.log(items)

