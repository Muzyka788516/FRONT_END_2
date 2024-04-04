// 1. Создайте элементы DOM для отображения информации о случайном пользователе, полученного с помощью Random User API.
// Рандомные юзеры
async function userApi() {
    const url = "https://randomuser.me/api/"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Ошибка при получении данных')
        }
        // нашли наших юзеров
        const data = await response.json()

        const firstName = data.results[0].name.first
        const lastName = data.results[0].name.last 
        userName = `${firstName} ${lastName}` ;

        const userCountry = data.results[0].location.country
        const userAge = data.results[0].dob.age

        const randomUsers = document.querySelector('.random_users')
        const randomUsersImage = document.querySelector('.random_users_image')
        const randomUsersInfo = document.querySelector('.random_users_info')


        const randomUsersImg = document.createElement('img') // создали картинку для пользователя
        randomUsersImg.setAttribute("src", data.results[0].picture.large) //? 
        randomUsersImg.setAttribute("alt", "users") //?
        randomUsersImg.classList.add("random_user_img")// создали класс 
        randomUsersImage.append(randomUsersImg)


        const randomUsersName = document.createElement('p')
        randomUsersName.textContent = `Имя пользователя: ${userName}`
        randomUsersInfo.append(randomUsersName)


        const randomUsersCountry = document.createElement('p')
        randomUsersCountry.textContent = `Страна пользователя: ${userCountry}`
        randomUsersInfo.append(randomUsersCountry)


         const randomUsersAge = document.createElement('p')
        randomUsersAge.textContent = `Возраст пользователя: ${userAge}`
        randomUsersInfo.append(randomUsersAge)
    } catch (err) {
        console.error('Ошибка', err)
    }
}
userApi()