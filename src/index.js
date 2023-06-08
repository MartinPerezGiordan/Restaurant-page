import './style.css';
import foodImg from './food.jpg';

const content = document.querySelector('#content')

const header = document.createElement('div')
header.classList.add('header')
content.appendChild(header)

const leftHeader = document.createElement('div')
leftHeader.classList.add('left-header')
header.appendChild(leftHeader)

const logo = document.createElement('div');
logo.classList.add('logo');
logo.innerHTML = 'Spiceo'
leftHeader.appendChild(logo)

const tabsUl = document.createElement('ul')
tabsUl.classList.add('tabs-ul')
tabsUl.innerHTML = '<li>Menu</li><li>About us</li>';
leftHeader.appendChild(tabsUl)


const rightHeader = document.createElement('div')
rightHeader.classList.add('right-header')
header.appendChild(rightHeader)
const orderBtn = document.createElement('button')
orderBtn.innerHTML = 'Order Now'
rightHeader.appendChild(orderBtn)


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


