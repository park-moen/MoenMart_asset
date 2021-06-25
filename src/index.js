require('../css/style.css');
require('../css/template.css');

const { historyRouterPush, initialRoutes } = require('./utils/router');
const requireData = require('./utils/requestData');

// DOM
const $main = document.querySelector('.main');
const $navToggle = document.querySelector('.nav-toggle');

$navToggle.addEventListener('change', e => {
  if (e.target.checked) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'visible';
});

window.onload = async () => {
  initialRoutes($main);

  console.log(requireData);

  const res = await requireData.get('http://localhost:8001/shop');

  console.log(res.data);

  const $historyLinker = document.querySelectorAll('.item > button');
  const $title = document.querySelector('.title');

  [...$historyLinker].forEach(el => {
    el.addEventListener('click', e => {
      const pathName = e.target.getAttribute('route');
      console.log(pathName);

      historyRouterPush(pathName, $main, data);
    });
  });

  $title.addEventListener('click', () => {
    historyRouterPush('/', $main);
  });
};
