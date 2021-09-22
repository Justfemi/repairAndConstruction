let navbar = document.querySelector('.navbar');
let bars = document.querySelector('.hamburger');
let closeBtn = document.querySelector('.close');

bars.addEventListener('click', () => {
    navbar.classList.add('active');
    console.log('clicked');
});

navbar.addEventListener('click', () => {
    navbar.classList.remove('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});