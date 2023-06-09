import foodImg from './food.jpeg';


const loadPage = function(){
    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
    content.appendChild(mainContent)

    const mainImg = new Image();
    mainImg.src = foodImg;
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    mainContent.appendChild(imgContainer)

    imgContainer.appendChild(mainImg)




    const mainInfo = document.createElement('div')
    mainInfo.classList.add('main-info')
    mainContent.appendChild(mainInfo)



    const mainText = document.createElement('div')
    mainText.classList.add('main-text')
    mainText.innerHTML = 'Indulge in Exquisite Flavors and Impeccable Dining at Our Esteemed Restaurant'
    mainInfo.appendChild(mainText)

    const bookBtn = document.createElement('button')
    bookBtn.classList.add('book-btn')
    mainInfo.appendChild(bookBtn)
    bookBtn.innerHTML = 'Book Now'
}

export {loadPage};