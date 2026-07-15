const menuButton2 = document.querySelector('.menu-button');
const menu2 = document.querySelector('#menu');

menuButton2?.addEventListener('click', () => {
  const open = menu2.classList.toggle('open');
  menuButton2.setAttribute('aria-expanded', String(open));
  menuButton2.querySelector('span').textContent = open ? '×' : '+';
});

menu2?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu2.classList.remove('open');
  menuButton2.setAttribute('aria-expanded', 'false');
  menuButton2.querySelector('span').textContent = '+';
}));

document.querySelector('#year-2').textContent = new Date().getFullYear();
