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
