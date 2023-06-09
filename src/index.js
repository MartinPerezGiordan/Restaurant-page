import './style.css';
import {loadPage as mainPage} from './page-load'
import { header } from './header';
import { menu } from './menu';


header();
const menuBtn = document.querySelector('#menu')
const aboutBtn = document.querySelector('#about')


function removeContent(){
    const parentElement = document.getElementById('content');
    parentElement.removeChild(parentElement.lastChild);
}


aboutBtn.addEventListener('click', function() {
    removeContent();
    about();
  });
  

  menuBtn.addEventListener('click', function() {
    removeContent();
    menu();
  });



mainPage();


