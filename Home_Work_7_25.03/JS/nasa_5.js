//Создайте элементы DOM для отображения случайного изображения, полученного с NASA API и данных из всех полей объекта

async function nasaApi() {
    const url = "https://tle.ivanstanojevic.me/api/tle/"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Ошибка при получении данных")
        }
        const data = await response.json()

        const satelliteId = data.member[0].satelliteId
        const satelliteName = data.member[0].name
        const satelliteDate = data.member[0].date
        const line1 = data.member[0].line1
        const line2 = data.member[0].line2
        
        
        const satelliteInfo = document.querySelector(".satellite_info")

        const infoId = document.createElement("p")
        infoId.textContent = `ID СПУТНИКА: ${satelliteId}`
        satelliteInfo.append(infoId)

        const infoName = document.createElement("p")
        infoName.textContent = `НАЗВАНИЕ СПУТНИКА: ${satelliteName}`
        satelliteInfo.append(infoName)

        const infoDate = document.createElement("p")
        infoDate.textContent = `ДАТА И КООРДИНАТЫ СПУТНИКА ${satelliteDate}`
        satelliteInfo.append(infoDate)

        const infoLine1 = document.createElement("p")
        infoLine1.textContent = `ПЕРВАЯ ЛИНИЯ СПУТНИКА ${line1}`
        satelliteInfo.append(infoLine1)


        const infoLine2 = document.createElement("p")
        infoLine2.textContent = `ВТОРАЯ ЛИНИЯ СПУТНИКА ${line1}`
        satelliteInfo.append(infoLine2)
    } catch (err) {
        console.error("Ошибка", err)
    }
}
nasaApi()