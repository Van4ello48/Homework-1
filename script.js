"use strict"

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    ];

const renderGoodsItem = ({title = "", price = 0}) => `
    <div class="goods-item">
        <div class="goods-item-img">
        </div><h3>${title}</h3>
        <p>Цена товара: $${price}</p>
        <button class="addToCart">Добавить</button>
    </div>
    `;

const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join("");
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);