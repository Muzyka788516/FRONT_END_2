// Задача 1
// Создайте форму с полем для ввода имени пользователя.
// При отправке формы сохраните введенное имя в localStorage.
// При загрузке страницы проверьте наличие сохраненного имени в localStorage и, если оно есть, отобразите его на странице.

const form = document.querySelector('#user')
const userName = document.querySelector('#userName')
const lastName = document.querySelector('#lastName')
// const btn = document.querySelector('#btn')

form.addEventListener('submit', function () {
    const inputValue1 = userName.value 
    const inputValue2 = lastName.value
    localStorage.setItem('userName', inputValue1)
    localStorage.setItem('lastName', inputValue2)
    userName.value = ''
    lastName.value = ''
})

// Задача 2
// Счетчик посещений:
// Создайте переменную в localStorage для хранения количества посещений.
// При загрузке страницы увеличивайте значение этой переменной на 1 и сохраняйте обновленное значение в localStorage.
// Отобразите количество посещений на странице.

let visitCount = localStorage.getItem('visitCount')
if (!visitCount) {
            visitCount = 0;
        }
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCount').textContent = visitCount;

// Это простое задание, оказалось для меня сложным. Без помощи интернета не обошлось. Принцип темы localStorage я понимаю, но логику в задачах трудно прописать. 
 

// Задача 3
// Список задач:

// Создайте простой список задач с полем для ввода новой задачи и кнопкой для добавления.
// При добавлении новой задачи сохраняйте все задачи в localStorage.
// При загрузке страницы отобразите сохраненный список задач.

//     Эту задачу я не смогла решить самостоятельно. Я пыталась разобраться с помощью интернета, и решение было, но решение не мое!