// Создайте элементы DOM для отображения случайных шуток, полученных с Chuck Norris API.
async function jokesApi() {
    const url = "https://api.chucknorris.io/jokes/random"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error ("Ошибка при получении данных")
        }
        const data = await response.json()

        const randomJokes = data.value


        const jokesRandom = document.querySelector('.random_jokes')
        const randomJokesText = document.querySelector('.random_jokes_text')


        const word = document.createElement('p')
        word.textContent = `Это по твоему шутка? Вот это шутка: `
        randomJokesText.append(word)

        const jokes = document.createElement('p')
        jokes.textContent = randomJokes
        randomJokesText.append(jokes)

    } catch (err) {
       console.error ("Ошибка", err) 
    }
}
jokesApi()