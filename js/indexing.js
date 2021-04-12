const chk = document.getElementById('chk');
const nav = document.querySelector('nav');
const canvis = document.querySelectorAll('.canvis');
const text1 = document.querySelector('#offcanvasScrollingLabel')
const but = document.querySelector('button');
const h3 = document.querySelector('h3');
const drop1 = document.querySelector('.dropdown-menu')
const p = document.querySelectorAll('p');


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    nav.classList.toggle('navbar-light');
    nav.classList.toggle('bg-light');
    nav.classList.toggle('navbar-dark'); 
    nav.classList.toggle('bg-dark');
    canvis[0].classList.toggle('bg-light'); 
    canvis[0].classList.toggle('bg-dark');
    canvis[1].classList.toggle('bg-light'); 
    canvis[1].classList.toggle('bg-dark');
    canvis[1].classList.toggle('lighttext');
    text1.classList.toggle('lighttext');
    h3.classList.toggle('lighttext');
    drop1.classList.toggle('dropdown-menu-dark');
    p[0].classList.toggle('darktext');
    p[0].classList.toggle('lighttext');
    p[1].classList.toggle('darktext');
    p[1].classList.toggle('lighttext');
    p[2].classList.toggle('darktext');
    p[2].classList.toggle('lighttext');
    p[3].classList.toggle('darktext');
    p[3].classList.toggle('lighttext');
    p[4].classList.toggle('darktext');
    p[4].classList.toggle('lighttext');
    p[5].classList.toggle('darktext');
    p[5].classList.toggle('lighttext');
    p[6].classList.toggle('darktext');
    p[6].classList.toggle('lighttext');
    p[7].classList.toggle('darktext');
    p[7].classList.toggle('lighttext');
    p[7].classList.toggle('darktext');
    p[8].classList.toggle('lighttext');
    p[8].classList.toggle('darktext');
    p[9].classList.toggle('lighttext');
    p[9].classList.toggle('darktext');
    p[10].classList.toggle('lighttext');
    p[10].classList.toggle('darktext');
    p[11].classList.toggle('lighttext');
    p[11].classList.toggle('darktext');
    p[12].classList.toggle('lighttext');
    p[12].classList.toggle('darktext');
});