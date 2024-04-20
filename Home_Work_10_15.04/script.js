// Задача 1
//Напишите класс Circle, который принимает радиус в качестве параметра конструктора. Добавьте метод area, который возвращает площадь круга, и метод circumference, возвращающий длину окружности.
 
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}
const radius = 5
const circle = new Circle(radius)
console.log("Площадь круга:", circle.area())
console.log("Длина окружности:", circle.circumference())


// Задача 2
//Создайте класс Book, который принимает название книги, автора и количество страниц в качестве параметров конструктора. Добавьте метод info, который выводит информацию о книге в формате "Книга: [название], Автор: [автор], Страниц: [количество]".

class Book {
    constructor(name, author, pages) {
        this.name = name
        this.author = author
        this.pages = pages
    }
    info() {
        console.log(`Книга: ${this.name}, Автор: ${this.author}, Страниц: ${this.pages}`)
    }
}
const harryPotter = new Book("Harry Potter", "J.L", 690)
harryPotter.info()


// Задача 3
//Напишите класс BankAccount, который принимает имя владельца и начальный баланс. Добавьте методы deposit и withdraw для управления счетом.

class BankAccount {
    constructor(userName, startingBalance) {
        this.userName = userName
        this.startingBalance = startingBalance

        // let balance = 0
    }
    deposit(amount) {
        this.startingBalance += amount
        return this.startingBalance
    }
    withdraw(amount) {
        if (amount <= this.startingBalance) {
            this.startingBalance -= amount
            return this.startingBalance
        }
    }
}

const ivanov = new BankAccount("Ivanov Alexander", 300, "$")

ivanov.deposit(100)
console.log(ivanov.startingBalance);

ivanov.withdraw(50)
console.log(ivanov.startingBalance);



// Задача 4
// //Создайте класс Animal, который принимает имя и тип (например, "кот" или "собака") в качестве параметров конструктора. Добавьте метод sound, который выводит звук, производимый животным.

class Animal {
    constructor(name, type, soun) {
        this.name = name
        this.type = type
        this.soun = soun
        
    }
    sound() {
        return `${this.name}, ${this.type} издает звук ${this.soun} `
    }
}
const cat = new Animal("Кошка", "Мурка", "Мяу")
console.log(cat.sound())

const dog = new Animal("Собака", "Бобик", "Гав")
console.log(dog.sound());


// Задача 5
//Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора. Добавьте методы send, receive, reply, чтобы моделировать основные функции электронной почты. Например, send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя

class Email {
    constructor(emailSender,emailRecipient ) {
        this.emailSender = emailSender
        this.emailRecipient = emailRecipient
    }
    send() {
        return `Отправка с адреса ${this.emailRecipient} получателю ${this.emailRecipient} произведена успешно `
    }
    receive() {
        return `Получатель ${this.emailRecipient} получил письмо от ${this.emailSender}`
    }
    reply() {
        return `${this.emailRecipient} ответил ${this.emailSender}`
    }

}

const userAnton = new Email("user1@gmail.com", "user2@gmail.com")
console.log(userAnton.send());
console.log(userAnton.receive());
console.log(userAnton.reply());