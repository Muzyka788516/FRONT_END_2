// 1.  Напишите программу, которая использует метод forEach, чтобы вывести каждый элемент массива на новой строке.
// const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArrNumbers = arrNumbers.forEach((elem) => {
//   console.log(elem);
// })
// _____________________________________________________



// 2.  Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод forEach, чтобы увеличить каждый элемент массива на 1.
// const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArrNumbers = arrNumbers.forEach((elem) => {
//   console.log(elem + 1);
// })
// ___________________________________________________



// 3.  Напишите программу, которая использует метод forEach, чтобы найти сумму всех элементов в массиве.
// const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let sum = 0
// arrNumbers.forEach((elem) => {
//     sum +=  elem  
// })
// console.log(sum);
//________________________________________________



//4.  Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод forEach, чтобы преобразовать каждую строку в верхний регистр.

// const arrString = ['hello', 'world', 'my', 'name', 'is', 'Peter']

// arrString.forEach((elem, index, arr) => {
//     arr[index] = elem.toUpperCase()
//      console.log(arr[index])
// })
// __________________________________________________



//5.  Напишите программу, которая использует метод forEach, чтобы проверить, содержит ли массив заданное значение.

// const arrString = ['hello', 'world', 'my', 'name', 'is', 'Peter']
// let check = 'my'

// arrString.forEach((elem) => {
//     if (elem = check) {
//         console.log('В этом массиве есть этот элемент')
//     } else {
//         console.log('В этом массиве нет такого элемента')
//     }
// })
// ________________________________________________________


//map

// 6. Напишите программу, которая использует метод map, чтобы умножить каждый элемент массива на 2.

// const arrNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// const newArrNumbers2 = arrNumbers2.map((elem) => {
//     return elem * 2
// })
// console.log(newArrNumbers2);
// __________________________________________________



// 7. Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод map, чтобы добавить к каждой строке восклицательный знак.

// const arrString = ['hello', 'world', 'my', 'name', 'is', 'Peter']
 
// const newArrString = arrString.map((elem) => {
//     return elem + '!'
// })
// console.log(newArrString)
// _____________________________________________________


// 8. Напишите программу, которая использует метод map, чтобы извлечь имена из массива объектов и создать новый массив только из имен.
// const arrCars = [
//     {name: 'Mercedes', price: 35000},
//     {name: 'Тesla', price: 45000},
//     {name: 'Volkswagen', price: 30000}
// ]

// const newArrCars = arrCars.map((elem) => {
//     return elem.name
// })
// console.log(newArrCars);
// ____________________________________________


//9.  Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод map, чтобы вернуть новый массив, содержащий квадраты этих чисел.

// const arrNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// const newArrNumbersSquare = arrNumbers3.map((elem) => {
//     return elem ** 2
// })
// console.log(newArrNumbersSquare);
// _______________________________________________________


// 10. Напишите программу, которая использует метод map, чтобы преобразовать массив строк в массив чисел (например, массив строк '1', '2', '3' должен быть преобразован в массив чисел 1, 2, 3).

// const arrString = ['1', '2', '3', '4', '5']

// const arrNumbers = arrString.map((elem) => {
//    return  parseInt(elem)  
// })
// console.log(arrNumbers);
// Совершенно новый метод для меня. Я о нем раньше не знала , я думала что это делается с помощью метода split()
// ____________________________________________________________________________________________________


// filter:


//11. Напишите программу, которая использует метод filter, чтобы отфильтровать все четные числа из массива.

// const arrNumbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// const newArrNumbers4 = arrNumbers4.filter((elem) => {
//     if (elem % 2 === 0) {
//         return elem
//     }
// })
// console.log(newArrNumbers4);
// ______________________________________________________________________



//12.  Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод filter, чтобы вернуть массив строк, содержащих только букву 'a'.

// const arrString2 = ['hello', 'world', 'my', 'name', 'is', 'Peter']

// const newArrString2 = arrString2.filter((elem) => {
//     return elem.includes('a')
// })
// console.log(newArrString2)
// ______________________________________________________________________



//13.  Напишите программу, которая использует метод filter, чтобы отфильтровать только положительные числа из массива.

// const arrNumbers4 = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]

// const newArrNumbers4 = arrNumbers4.filter((elem) => {
//     if (elem >= 0) {
//         return elem
//     }
// })
// console.log(newArrNumbers4);
// _____________________________________________________________________________



//14.  Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод filter, чтобы вернуть массив объектов, у которых значение определенного свойства больше заданного порога.

// const arrCars2 = [
//     {name: 'Mercedes', price: 35000},
//     {name: 'Тesla', price: 45000},
//     {name: 'Volkswagen', price: 30000}
// ]
// let maxPrice = 35000

// const newArrCars2 = arrCars2.filter((item) => {
//     return item.price >= maxPrice
// })
// console.log(newArrCars2);
// __________________________________________________



//15.  Напишите программу, которая использует метод filter, чтобы отфильтровать строки, содержащие не менее 5 символов.

// const arrString2 = ['hello', 'world', 'my', 'name', 'is', 'Peterson']

// let minlength = 5

// const newArrString2 = arrString2.filter((elem) => {
//     return elem.length >= minlength
// })
// console.log(newArrString2)
// _____________________________________________________________



// reduce:


//16.  Напишите программу, которая использует метод reduce, чтобы найти сумму всех элементов массива.

// const arrNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumArrNumbers3 = arrNumbers3.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue
// })
// console.log(sumArrNumbers3);
// ______________________________________________________________



//17.  Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод reduce, чтобы найти наименьшее число в массиве.

// const arrNumbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const minNumbers4 = arrNumbers4.reduce((prevValue, currentValue) => {
//     if (currentValue < prevValue) {
//         return currentValue
//     } else {
//         return prevValue
//     }
// // return currentValue < prevValue ? currentValue : prevValue
// });
// console.log(minNumbers4);
// ____________________________________________________________



//18.  Напишите программу, которая использует метод reduce, чтобы объединить все элементы массива строк в одну строку.

// const arrString2 = ['hello', 'world', 'my', 'name', 'is', 'Peterson']

// const newArrString = arrString2.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue
// })
// console.log(newArrString);
// ____________________________________________________________



//19.  Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод reduce, чтобы вычислить средний возраст всех объектов в массиве.

// const arrUsers = [
//     { name: 'Jana', age: 27 },
//     { name: 'Irina', age: 40 },
//     { name: 'Bella', age: 50 },
//     { name: 'Peter',  age: 19 },
// ]

// const newArrUsers = arrUsers.reduce((prevValue, currentValue) => {
//     return 
// })
// console.log(newArrUsers);
//  Эту задачу, к сожалению,  я не смогла решить. 
// _________________________________________________________________




//20.  Напишите программу, которая использует метод reduce, чтобы найти наиболее часто встречающийся элемент в массиве строк.
// И эта задача оказалась для меня сложной. 