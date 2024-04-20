// Это было не легкое задание, но самым сложным для меня оказалось стилизация модального окна. Как оказалось нужно создавать дополнительные элементы в js. Но даже при этом стилизация модального окна вышла так себе. Получилось вообще не по фигме. И еще, фетч запросы подтягиваются если в браузере запускать вторую страницу html, тогда вся информация видна, а если отображать в браузере первую страницу, то запросы не подтягиваются. Не знаю почему так. У меня заняло это 10 часов.
const modalBtn = document.querySelector(".modal_btn") 

modalBtn.addEventListener("click", function () {
    const modal = document.createElement("div")
    modal.classList.add("modal")
    const modalContainer = document.createElement("div")
    modalContainer.classList.add("modal_container")
    modal.append(modalContainer)
    document.body.append(modal)

catApi()
})

async function catApi() {
    const url = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Ошибка при получении данных")
        }
        const data = await response.json()

        const catId = data[0].id 
        const catUrl = data[0].url
        const catWidth = data[0].width
        const catHeight = data[0].height

        const modContainer = document.querySelector(".modal_container")

        
        const infoContainer = document.createElement("div")
        infoContainer.classList.add("info-container")

      
        const randomCatId = document.createElement("p")
        randomCatId.innerText = `ID котика: ${catId}`
        infoContainer.append(randomCatId)

        
        const randomCatUrl = document.createElement("p")
        randomCatUrl.innerText = `Ссылка на котика: ${catUrl}`
        infoContainer.append(randomCatUrl)

        modContainer.append(infoContainer)
 
        const sizeContainer = document.createElement("div")
        sizeContainer.classList.add("info-container")

        const randomCatWidth = document.createElement("p");
        randomCatWidth.innerText = `Ширина котика: ${catWidth}`
        sizeContainer.append(randomCatWidth);

        const randomCatHeight = document.createElement("p")
        randomCatHeight.innerText = `Высота котика: ${catHeight}`
        sizeContainer.append(randomCatHeight)

        modContainer.append(sizeContainer)
    } catch (err) {
        console.error("Ошибка", err)
    }
}

// _________________________________________________________
// HOME_WORK_
//1 уровень сложности: Создание класса Employee: Создайте класс Employee с конструктором, который принимает три параметра: name, age, position. Конструктор должен инициализировать соответствующие свойства объекта.
//Добавление метода getInfo(): Добавьте в класс Employee метод getInfo(), который возвращает строку с информацией о сотруднике в формате "Имя: Возраст, Должность".
//Фильтрация сотрудников по должности:
//Напишите функцию filterEmployeesByPosition, которая принимает два параметра: список сотрудников (employees) и должность (position).
//Отфильтруйте список сотрудников по заданной должности.
//Используйте метод map, чтобы преобразовать отфильтрованный список в список имен сотрудников.
//Функция должна возвращать массив имен сотрудников с заданной должностью.
//Создайте несколько объектов сотрудников, используя класс Employee.
//Используйте функцию filterEmployeesByPosition для фильтрации сотрудников по их должности.
//Результат фильтрации в вывести на страницу во втором модальном окне на вашем сайте pallas cat studio. результат выложить на гитхаб в прошлый проект, но разделите новый код комментариями!! 
// _________________________________________________________
const modalBtn2 = document.querySelector(".modal_btn_2")

modalBtn2.addEventListener("click", function () {
    const filteredEmployees = filterEmployeesByPosition(employeesInfo, "meneger");
    const transformedInfo = transformEmployeesName(filteredEmployees);

    const modal = document.createElement("div")
    modal.classList.add("modal")
    const modalContainer = document.createElement("div")
    modalContainer.classList.add("modal_container")

    transformedInfo.forEach(employee => {
        const employeeInfo = document.createElement("p");
        employeeInfo.textContent = `Имя: ${employee.name}, Должность: ${employee.position}`;
        modalContainer.append(employeeInfo);
    });

    modal.append(modalContainer)
    document.body.append(modal)

    filterEmployeesByPosition()

})

class Employee {
    constructor(name, age, position) {
        this.name = name
        this.age = age
        this.position = position
    }
    getInfo() {
        return `Имя: ${this.name}. Возраст: ${this.age}. Должность: ${this.position}`
    }

}
const gans = new Employee("Gans", 23, "meneger")
console.log(gans.getInfo());

const bob = new Employee("Bob", 30, "engineer")
console.log(bob.getInfo());

const mariia = new Employee("Mariia", 57, "booker")
console.log(mariia.getInfo());
    
const employeesInfo = [
    { name: "Gans", age: 23, position: "meneger" },
    { name: "Bob", age: 30, position: "engineer" },
    { name: "Mariia", age: 57, position: "booker" },
];
function filterEmployeesByPosition(employees, position) {
    const filteredEmployees = employeesInfo.filter((elem) => {
           console.log(elem.position)
       })
}
filterEmployeesByPosition()
   
function transformEmployeesName(employees) {
    const filteredName = employeesInfo.map((elem) => {
        return {name: elem.name, position: elem.position}
    })
    return filteredName
}
const transformedInfo = transformEmployeesName(employeesInfo)
console.log(transformedInfo);