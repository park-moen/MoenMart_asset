const mainViewTemplate = require('../../pages/mainView.hbs');
const itemListTemplate = require('../../pages/itemList.hbs');
const lookbookTemplate = require('../../pages/lookBook.hbs');

const data = [
  {
    id: 1,
    title: 'Algot',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b9023cd4f660d540f79a24b_Algot.png',
    price: '0.99',
  },
  {
    id: 2,
    title: 'Evert',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b9022747d535f99eba26e0e_William.png',
    price: '0.99',
  },
  {
    id: 3,
    title: 'Ingvar',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b9022747d535f6145a26e0d_Vilda.png',
    price: '0.99',
  },
  {
    id: 4,
    title: 'Roald',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b902274e41c3c3e9d489b58_Roald.png',
    price: '0.99',
  },
  {
    id: 5,
    title: 'William',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b9023cd4f660d540f79a24b_Algot.png',
    price: '0.99',
  },
  {
    id: 6,
    title: 'Harald',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b9023cd4f660d540f79a24b_Algot.png',
    price: '0.99',
  },
  {
    id: 7,
    title: 'Alva',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b9023cd4f660d540f79a24b_Algot.png',
    price: '0.99',
  },
  {
    id: 8,
    title: 'Vilda',
    img: 'https://uploads-ssl.webflow.com/5b63ff5acd934c35bc633385/5b9023cd4f660d540f79a24b_Algot.png',
    price: '0.99',
  },
];

fetch('http://localhost:8001/shop')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

const MainView = mainViewTemplate();
const ItemList = itemListTemplate(data);
const LookBook = lookbookTemplate();

const routes = {
  '/': MainView,
  '/shop': ItemList,
  '/lookbook': LookBook,
};

function initialRoutes(el) {
  renderHTML(el, routes['/']);
  window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
}

function historyRouterPush(pathName, el, data) {
  console.log(data);
  window.history.pushState({}, pathName, window.location.origin + pathName);
  console.log();

  renderHTML(el, routes[pathName]);
}

function renderHTML(el, route) {
  el.innerHTML = '';
  el.innerHTML += route;
}

module.exports = {
  historyRouterPush,
  initialRoutes,
};