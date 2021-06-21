require('../css/style.css');
require('../css/template.css');

const { historyRouterPush, initialRoutes } = require('./utils/router');

// DOM
const $main = document.querySelector('.main');
const $navToggle = document.querySelector('.nav-toggle');

initialRoutes($main);

$navToggle.addEventListener('change', e => {
  if (e.target.checked) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'visible';
});

window.onload = () => {
  const $historyLinker = document.querySelectorAll('.item > button');
  const $title = document.querySelector('.title');

  [...$historyLinker].forEach(el => {
    el.addEventListener('click', e => {
      const pathName = e.target.getAttribute('route');
      console.log(pathName);

      historyRouterPush(pathName, $main);
    });
  });

  $title.addEventListener('click', () => {
    historyRouterPush('/', $main);
  });
};
