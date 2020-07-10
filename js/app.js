/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');
const navUl = document.querySelector('nav ul');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const docFrag = document.createDocumentFragment();
for(let section of sections) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = section.getAttribute('data-nav');
    a.setAttribute('sec-id', section.getAttribute('id'));
    a.classList.add('menu__link');
    li.appendChild(a);
    docFrag.appendChild(li);
}
navUl.appendChild(docFrag);

// Add class 'active' to section when near top of viewport
for(let section of sections) {
    document.addEventListener('scroll', () => {
        if(window.scrollY >= section.offsetTop && window.scrollY <= section.offsetTop + section.offsetHeight)
            section.classList.add('your-active-class');
        else
            section.classList.remove('your-active-class');
    });
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const scrollToSecHandler = (e) => {
    e.preventDefault();
    const secId = e.target.getAttribute('sec-id');
    const targetSection = document.getElementById(secId);
    targetSection.scrollIntoView();
}

const links = document.querySelectorAll('.menu__link');
for(let link of links) {
    link.addEventListener('click', scrollToSecHandler);
}
// Set sections as active


// Make nav fixed on scroll
// document.addEventListener('scroll', () => {

// })