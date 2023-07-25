// Напишіть скрипт, який перевіряє наявність в масиві 
// ["Pyton", "C++", "C#", "PHP"] значення "Java Script".
// Якщо в масиві такого значення немає вивести в консоль 
// "Значення Java Script в списку немає, додаємо в масив". 
// Після чого додати "Java Script" в кінець масиву.

const items = ["Pyton", "C++", "C#", "PHP"]
let itemPush = "Java Script"
let itemSearch = items.includes(itemPush)

    if(itemSearch === false){
        console.log(`Значення Java Script в списку немає, додаємо в масив`)
        items.push(itemPush)
    }      
console.log(items)