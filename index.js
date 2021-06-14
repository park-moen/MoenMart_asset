require('./css/style.css');
require('./css/template.css');

const { historyRouterPush } = require('./router');

const $main = document.querySelector('.main');

// $main.innerHTML = ItemList;

window.onload = () => {
  const historyLinker = document.querySelectorAll('.item > button');

  [...historyLinker].forEach(el => {
    el.addEventListener('click', e => {
      const pathName = e.target.getAttribute('route');

      historyRouterPush(pathName, $main);
    });
  });
};

const $navToggle = document.querySelector('.nav-toggle');

$navToggle.addEventListener('change', e => {
  if (e.target.checked) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'visible';
});
