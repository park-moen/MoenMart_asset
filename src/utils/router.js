const mainViewTemplate = require('../../pages/mainView.hbs');
const itemListTemplate = require('../../pages/itemList.hbs');
const lookbookTemplate = require('../../pages/lookBook.hbs');

const MainView = mainViewTemplate;
const ItemList = itemListTemplate;
const LookBook = lookbookTemplate;

const routes = {
  '/': MainView,
  '/shop': ItemList,
  '/lookbook': LookBook,
};

function initialRoutes(el, pathName, data) {
  renderHTML(el, routes[pathName](data));
  window.onpopstate = () => {
    console.log('x');
    renderHTML(el, routes[window.location.pathname](data));
  };
}

function historyRouterPush(pathName, el, data = []) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  console.log(pathName);

  renderHTML(el, routes[pathName](data));
}

function renderHTML(el, route) {
  el.innerHTML = '';
  el.innerHTML += route;
}

module.exports = {
  historyRouterPush,
  initialRoutes,
};
