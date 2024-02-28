import '../css/style.css'

//= Nav ===================
const nav = document.getElementById('nav');
//= Burger ===================
const burger = document.getElementById('burger-button');
//= Icons ===================
const iconBurger = document.createElement('i');
iconBurger.setAttribute('class', 'fa-solid fa-bars fa-3x')
const iconX = document.createElement('i');
iconX.setAttribute('class', 'fa-solid fa-x fa-3x')
burger.appendChild(iconBurger)
//= Show or hide menu ===================
burger.addEventListener('click', () => {
    if (nav.className === 'hidden') { nav.classList.replace('hidden', 'visible'); burger.removeChild(iconBurger); burger.appendChild(iconX); return };
    if (nav.className === 'visible') { nav.classList.replace('visible', 'hidden'); burger.removeChild(iconX); burger.appendChild(iconBurger) };
});