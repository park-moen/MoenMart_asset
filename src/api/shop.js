const itemListTemplate = require('../../pages/itemList.hbs');

const ItemList = itemListTemplate();

function render1() {
  console.log(ItemList);
}

module.exports = render1;
