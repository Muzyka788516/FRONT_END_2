// Создайте элементы DOM для отображения текущего курса биткоина, полученного с помощью CoinDesk API.

async function coinApi() {
    const url = "https://api.coindesk.com/v1/bpi/currentprice/USD.json"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Ошибка при получении данных")
        }
        const data = await response.json()

        const currentValue = data.bpi.USD.rate
        // console.log(currentValue)

        const randomCoin = document.querySelector(".random_coin")
        const randomBoxCoin = document.querySelector(".random_box_coin")
        const currentRate = document.querySelector(".current_rate")

        const random = document.createElement("p")
        random.textContent = currentValue
        currentRate.append(random)


    } catch (err) {
        console.error("Ошибка", err)
    }
}
coinApi()
