const header = function(){
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
    tabsUl.innerHTML = '<li><button id="menu">Menu</li><li><button id="about">About us</li>';
    leftHeader.appendChild(tabsUl)


    const rightHeader = document.createElement('div')
    rightHeader.classList.add('right-header')
    header.appendChild(rightHeader)
    const orderBtn = document.createElement('button')
    orderBtn.innerHTML = 'Order Now'
    rightHeader.appendChild(orderBtn)
}

export {header}