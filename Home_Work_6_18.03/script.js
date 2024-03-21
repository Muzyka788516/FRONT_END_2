// 1. Создайте массив объектов, каждый из которых представляет собой информацию о человеке (имя, возраст и т. д.). 
// const users = [
//     {
//         name: 'Anna',
//         age: 25,
//         skills: 'Front End developer'
//     },
//     {
//         name: 'Mariia',
//         age: 30,
//         skills: 'Back End developer'
//     },
//       {
//         name: 'Alexander',
//         age: 40,
//         skills: 'Qa tester'
//     },
// ]
// _______________________________________
// // 2. Используйте метод map, чтобы создать новый массив, содержащий только имена всех людей.
// const newArr = users.map((elem) => {
//     return elem.name
// })
// console.log(newArr);
// ________________________________________

// 3. Создайте массив чисел и используйте метод map, чтобы преобразовать каждое число в строку.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArrNumbers = numbers.map((elem) => {
//    return String(elem)
// })
// console.log(newArrNumbers)
// _________________________________________

// 4. Создайте массив строк, представляющих даты, и используйте метод map, чтобы преобразовать каждую строку в объект Date.
// const dateArrString = ['09-08-2018', '07-07-2015', '23-04-1996', '25-12-1986']

// const newDateArr = dateArrString.map((elem) => {
//     return new Date(elem)
// })
// console.log(newDateArr)
//  если честно, я не имею представления как должен выглядеть правильный вариант. 
// ____________________________________________

// 5. Создайте массив чисел и используйте метод map, чтобы создать новый массив, содержащий квадраты каждого числа.
// const numberArr = [2, 4, 6, 8, 10];

// const squareNumber = numberArr.map((elem) => {
//     return elem ** 2
// })
// console.log(squareNumber);
// ______________________________________________

// 6. Создайте массив слов и используйте метод map, чтобы создать новый массив, содержащий длины каждого слова.
// const stringArr = ['hello', 'world', 'привет', 'мир']

// const lengthString = stringArr.map((elem) => {
//     return elem.length
// })
// console.log(lengthString)
// _____________________________________________

//ForEach
// 7. Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль каждый элемент массива, умноженный на 2.
// const numberArr = [2, 4, 6, 8, 10];

// numberArr.forEach((elem) => {
//    console.log(elem * 2); 
// })
// __________________________________


// 8. Создайте массив строк и используйте метод forEach, чтобы вывести в консоль каждую строку в верхнем регистре.
// const stringArr = ['hello', 'world', 'привет', 'мир']

// stringArr.forEach((elem) => {
//     console.log(elem.toUpperCase());
// })
//_________________________________________

// 9. Создайте массив объектов и используйте метод forEach, чтобы вывести в консоль значения определенного свойства каждого объекта.
// const users = [
//     {
//         name: 'Anna',
//         age: 25,
//         skills: 'Front End developer'
//     },
//     {
//         name: 'Mariia',
//         age: 30,
//         skills: 'Back End developer'
//     },
//       {
//         name: 'Alexander',
//         age: 40,
//         skills: 'Qa tester'
//     },
// ]
// users.forEach((elem) => {
//     console.log(elem.name);
//     console.log(elem.age);
//     console.log(elem.skills);
// })
// _________________________________________

// 10. Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль только нечетные числа
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach((elem) => {
//     if (elem % 2 !== 0) {
//     console.log(elem);
//     }
// })
// __________________________________

// 11. Создайте массив слов и используйте метод forEach, чтобы вывести в консоль каждое слово, у которого длина больше 5 символов.
// const stringArr = ['hello', 'world', 'привет', 'мир', 'треугольник', 'квадрат']

// const lengthString = 5

// stringArr.forEach((elem) => {
//     if (elem.length >= lengthString) {
//         console.log(elem.length);
//     }
// })
// ______________________________________

//Filter:

// 12. Создайте массив чисел и используйте метод filter, чтобы отфильтровать только положительные числа.
// const numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]

// const positiveNumbers = numbers.filter((elem) => {
//     return elem >= 0
// })
// console.log(positiveNumbers);
// _______________________________________

// 13. Создайте массив строк и используйте метод filter, чтобы отфильтровать только строки, содержащие более одного слова.
// const stringArr = ['hello', 'world', 'привет мир', 'треугольник', 'квадрат', 'это предложение с несколькими словами'];

// const filteredStrings = stringArr.filter((str) => {
//     return str.split(' ').length > 1 
// });

// console.log(filteredStrings);
// __________________________________

// 14. Создайте массив объектов, представляющих людей, и используйте метод filter, чтобы отфильтровать только совершеннолетних.
// const users = [
//     {
//         name: 'Anna',
//         age: 6,
//     },
//     {
//         name: 'Mariia',
//         age: 12,   
//     },
//       {
//         name: 'Alexander',
//         age: 40,
//     },
// ]

// const adults = users.filter((elem) => {
//     if (elem.age >= 18) {
//         return elem.age
//     }
// })
// console.log(adults);
// _____________________________________

// 15. Создайте массив чисел и используйте метод filter, чтобы отфильтровать только числа, которые делятся на 3 без остатка.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const divisionNumber = numbers.filter((elem) => {
//     return elem % 3 === 0
// })
// console.log(divisionNumber);
// _____________________________________

// 16. Создайте массив слов и используйте метод filter, чтобы отфильтровать только слова, начинающиеся с определенной буквы.
// const stringArr = ['hello', 'world', 'привет мир', 'треугольник', 'квадрат', 'это предложение с несколькими словами'];

// const newStringArr = stringArr.filter((elem) => {
//     return elem.startsWith('w')
// })
// console.log(newStringArr);
// ____________________________________

// Основное задание: сделать фильтрацию нашего приложения по названию товара и по количеству товара
//  К сожалению меня не было на прошлом уроке. И отсутствует конспект. 