import margherita from './menu-images/margherita.jpg';
import chicken from './menu-images/chicken-alfredo.jpg';
import burger from './menu-images/burger.jpg';
import salad from './menu-images/caesar-salad.jpg';
import brownie from './menu-images/brownie.jpg';

const menuItems = [
    {
      title: 'Margherita Pizza',
      description: 'Freshly baked pizza topped with mozzarella cheese, tomato sauce, and fresh basil leaves.',
      price: '$10.99',
      image: margherita,
    },
    {
      title: 'Chicken Alfredo Pasta',
      description: 'Creamy pasta dish with grilled chicken, fettuccine, and a rich Alfredo sauce.',
      price: '$12.99',
      image: chicken,
    },
    {
      title: 'Caesar Salad',
      description: 'Classic salad made with crisp romaine lettuce, Parmesan cheese, croutons, and a tangy Caesar dressing.',
      price: '$8.99',
      image: salad,
    },
    {
      title: 'Beef Burger',
      description: 'Juicy beef patty served on a toasted bun with lettuce, tomato, onion, and your choice of toppings.',
      price: '$9.99',
      image: burger,
    },
    {
      title: 'Chocolate Brownie Sundae',
      description: 'Warm chocolate brownie topped with a scoop of vanilla ice cream, chocolate sauce, and whipped cream.',
      price: '$11.99',
      image: brownie,
    },
  ];



const menu = function(){
    const parentElement = document.getElementById('content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    parentElement.appendChild(menuContainer)

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
      
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;
        menuItemDiv.appendChild(image);
      
        const title = document.createElement('h3');
        title.textContent = item.title;
        menuItemDiv.appendChild(title);
      
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = item.description;
        menuItemDiv.appendChild(description);
      
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;
        menuItemDiv.appendChild(price);
      
        menuContainer.appendChild(menuItemDiv);
      });

}

export {menu}