// 2. Создайте элементы DOM для отображения изображений случайных котов, полученных с помощью The Cat API.
// Я больше времени потратила на то чтоб зафиксировать размер картинки котика, но размер постоянно меняется,я решила оставить как есть, правда не очень красиво
async function randomCat() {
    const url2 = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"

    try {
        const response = await fetch(url2)
        if (!response.ok) {
            throw new Error('Ошибка при получении данных')
        }
        const data = await response.json()

        const catId = data["0"].id 
        const catUrl = data["0"].url
        // console.log(catId);

        const randomCat = document.querySelector('.random_cats')
        const randomCatImg = document.querySelector('.random_cats_image')
        const randimCatInfo = document.querySelector('.random_cats_info')

        const randomCatImage = document.createElement('img')
        randomCatImage.setAttribute("src", catUrl)
        randomCatImage.setAttribute("alt", "cat")
        randomCatImage.classList.add('random_cat__image')
        randomCatImg.append(randomCatImage)

        const rabdomCatId = document.createElement('p')
        rabdomCatId.textContent = `Id котика: ${catUrl}`
        randimCatInfo.append(rabdomCatId)
 
    } catch (err) {
        console.error('Ошибка', err)
    }
}
randomCat()
const catImage = document.querySelector('.random_cat_image');
catImage.onload = function() {
    this.style.maxWidth = '850%';
    this.style.maxHeight = '850px';
};

