const chk = document.getElementById('chk');
const nav = document.querySelector('nav');
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const p = document.querySelectorAll('p');
const path = document.querySelectorAll('path');
const drop1 = document.querySelector('.dropdown-menu')

console.log(path[1]);


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    nav.classList.toggle('navbar-light');
    nav.classList.toggle('bg-light');
    nav.classList.toggle('navbar-dark'); 
    nav.classList.toggle('bg-dark');
    h1.classList.toggle('darktext');
    h1.classList.toggle('lighttext');
    h2[0].classList.toggle('darktext');
    h2[0].classList.toggle('lighttext');
    h2[1].classList.toggle('darktext');
    h2[1].classList.toggle('lighttext');
    p[0].classList.toggle('darktext');
    p[0].classList.toggle('lighttext');
    p[1].classList.toggle('darktext');
    p[1].classList.toggle('lighttext');
    p[2].classList.toggle('darktext');
    p[2].classList.toggle('lighttext');
    
    drop1.classList.toggle('dropdown-menu-dark');
    path[1].classList.toggle('subola');
    
});


