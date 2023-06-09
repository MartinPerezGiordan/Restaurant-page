import './style.css';
import {loadPage as mainPage} from './page-load'
import { header } from './header';
import { menu } from './menu';
import { about } from './about';


header();
const menuBtn = document.querySelector('#menu')
const aboutBtn = document.querySelector('#about')
const mainBtn = document.querySelector('.logo')


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

mainBtn.addEventListener('click', function() {
        removeContent();
        mainPage();
    });



mainPage();


