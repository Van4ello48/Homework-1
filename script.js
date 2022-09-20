"use strict"

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

class GoodsItem {
    constructor ({title = "", price = 0}) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `
        <div class="goods-item">
            <div class="goods-item-img">
            </div><h3>${this.title}</h3>
            <p>Цена товара: $${this.price}</p>
            <button class="addToCart">Добавить</button>
        </div>
        `
    }
};

class GoodsList {
    list = [];
    fetchGoods() {
        this.list = goods;
    }

    render() {
        let resultList = this.list.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        }).join("");

        document.querySelector('.goods-list').innerHTML = resultList;
    };

    totalPrice() {
        console.log(this.list.reduce((sum, product) => sum + product.price, 0));
    }
};

const goodsList = new GoodsList;

goodsList.fetchGoods();
goodsList.render();
goodsList.totalPrice();