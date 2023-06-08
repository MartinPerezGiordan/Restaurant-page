import './style.css';
import {loadPage as mainPage} from './page-load'
import { header } from './header';

header();
const menuBtn = document.querySelector('#menu')
const aboutBtn = document.querySelector('#about')


function removeContent(){
    const parentElement = document.getElementById('content');
    parentElement.removeChild(parentElement.lastChild);
}



  menuBtn.addEventListener('click', function() {
    removeContent();
    menu();
  });
  

mainPage();


