require('../css/style.css');
require('../css/shop.css');
require('../css/lookbook.css');

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
  const initialPathName = window.location.pathname;

  const initialData = await requireData.get(
    `http://localhost:8001${initialPathName}`
  );

  initialRoutes($main, initialPathName, initialData.data);

  const $historyLinker = document.querySelectorAll('.item > button');
  const $title = document.querySelector('.title');

  [...$historyLinker].forEach(el => {
    el.addEventListener('click', async e => {
      const pathName = e.target.getAttribute('route');

      // shop 링크 클릭
      if (pathName === '/shop') {
        const res = await requireData.get('http://localhost:8001/shop');
        historyRouterPush(pathName, $main, res.data);
      }
      // lookbook 링크 클릭
      else if (pathName === '/lookbook') {
        const res = await requireData.get('http://localhost:8001/lookbook');
        console.log(res.data);
        historyRouterPush(pathName, $main, res.data);
      }
      // 홈 링크 클릭
      else {
        historyRouterPush(pathName, $main);
      }
    });
  });

  $title.addEventListener('click', () => {
    historyRouterPush('/', $main);
  });
};
