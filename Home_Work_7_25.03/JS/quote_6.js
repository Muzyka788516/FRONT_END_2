// Создайте элементы DOM для отображения текста и источника случайных цитат, полученных с Kanye West API.

async function quoteApi() {
    const url = "https://api.kanye.rest/"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Ошибка при получении данных")
        }
        const data = await response.json()

        const quote = data.quote
        
        const quotesInfo = document.querySelector(".quotes_info")

        const boxRandomsQuotes = document.createElement("p")
        boxRandomsQuotes.textContent = `ЦИТАТА ДНЯ: ${quote}`
        quotesInfo.append(boxRandomsQuotes)

    } catch (err) {
        console.error("Ошибка", err)
    }
}
quoteApi()