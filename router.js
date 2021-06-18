const mainViewTemplate = require('./pages/mainView.hbs');
const itemListTemplate = require('./pages/itemList.hbs');
const lookbookTemplate = require('./pages/lookBook.hbs');

const render1 = require('./src/api/shop');

console.log(render1());

const MainView = mainViewTemplate();
const ItemList = itemListTemplate();
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

function historyRouterPush(pathName, el) {
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
