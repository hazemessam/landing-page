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
const header = document.querySelector('.page__header');
const navUl = document.querySelector('nav ul');
const sections = document.querySelectorAll('section');
const openNavBtn = document.querySelector('i.open');
const closeNavBtn = document.querySelector('i.close');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const openNavHandler = () => {
    header.classList.add('opened');
    openNavBtn.style.display = 'none';
}

const closeNavHandler = () => {
    header.classList.remove('opened');
    openNavBtn.style.display = 'inline-block';
}

const scrollToSecHandler = (e) => {
    e.preventDefault();
    const secId = e.target.getAttribute('sec-id');
    const targetSection = document.getElementById(secId);
    if(header.classList.contains('stacked'))
        closeNavHandler()
    window.scrollTo(0, targetSection.offsetTop + 5);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Detect screen size
if (window.innerWidth <= 480)
    header.classList.add('stacked');

window.addEventListener('resize', () => {
    if (window.innerWidth <= 480)
        header.classList.add('stacked');
    else
        header.classList.remove('stacked');
});

// build the nav
const docFrag = document.createDocumentFragment();
for(let section of sections) {
    const li = document.createElement('li');
    li.innerHTML = `
        <a sec-id="${section.getAttribute('id')}" class="menu__link">
            ${section.getAttribute('data-nav')}
        </a>
    `
    docFrag.appendChild(li);
}
navUl.appendChild(docFrag);

// Add class 'active' to section when near top of viewport
for(let section of sections) {
    document.addEventListener('scroll', () => {
        const secLink = document.querySelector(`a[sec-id="${section.id}"]`);
        if(window.scrollY >= section.offsetTop && window.scrollY <= section.offsetTop + section.offsetHeight) {
            section.classList.add('your-active-class');
            secLink.classList.add('active');
        }
        else {
            section.classList.remove('your-active-class');
            secLink.classList.remove('active');
        }
    });
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const links = document.querySelectorAll('.menu__link');
for(let link of links) {
    link.addEventListener('click', scrollToSecHandler);
}

// Open the nav
openNavBtn.addEventListener('click', openNavHandler);

// Close the nav
closeNavBtn.addEventListener('click', closeNavHandler);