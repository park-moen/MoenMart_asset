const itemListTemplate = require('./pages/itemList.hbs');
const lookbookTemplate = require('./pages/lookBook.hbs');

const ItemList = itemListTemplate();
const LookBook = lookbookTemplate();

const routes = {
  '/shop': ItemList,
  '/lookbook': LookBook,
};

// function initialRoutes(el) {
//   renderHTML(el, routes['/show']);
//   window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
// }

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
  ItemList,
};
