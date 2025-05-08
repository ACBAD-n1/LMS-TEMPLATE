// Mobile menu

const menuToggle = document.querySelector('.mobile__menu-toggle');
const menu = document.querySelector('.mobile__menu');
const menuClose = document.querySelector('.mobile__menu-close');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});



menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  });
  