require('./css/style.css');

// File import

// DOM
const $container = document.querySelector('.container');
const $navToggle = document.querySelector('.nav-toggle');

$navToggle.addEventListener('change', e => {
  if (e.target.checked) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'visible';
});
