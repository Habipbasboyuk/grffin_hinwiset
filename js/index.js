
const $body = document.getElementById('body');

const $hamburgerOpener = document.getElementById('hamburger-opener');
const $hamburgerCloser = document.getElementById('hamburger-closer');
const $hamburgerMenu = document.getElementById('hamburger-menu');


const $hamburgerContact = document.querySelector(".hamburger-contact");
const $hamburgerSocials = document.querySelector(".hamburger-socials");

$hamburgerOpener.addEventListener('click', () => {
  $hamburgerMenu.classList.add('activator');
  $hamburgerOpener.classList.add('deleter');
  $body.classList.add('overflower');
  
});

$hamburgerCloser.addEventListener('click', () => {
  $hamburgerMenu.classList.remove('activator');
  $hamburgerOpener.classList.remove('deleter');
  $body.classList.remove('overflower');
})

$hamburgerContact.addEventListener("click", () => {
  $hamburgerMenu.classList.remove('activator');
  $hamburgerOpener.classList.remove('deleter');
  $body.classList.remove("overflower");
});

$hamburgerSocials.addEventListener("click", () => {
  $hamburgerMenu.classList.remove('activator');
  $hamburgerOpener.classList.remove('deleter');
  $body.classList.remove("overflower");
});