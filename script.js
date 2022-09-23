"use strict"

const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GOODS = "/catalogData.json";
const url = `${URL}${GOODS}`;

const service = function (url) {
    return new Promise((resolve) => {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        xhr.open("GET", url, true);
    
        xhr.timeout = 5000;
        xhr.ontimeout = function () {
            console.log("функция не выполнилась");
        }
    
        xhr.send();
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const result = JSON.parse(xhr.response);
                resolve(result);
            }
        }
    })
}

class GoodsItem {
    constructor ({product_name = "", price = 0}) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `
        <div class="goods-item">
            <div class="goods-item-img">
            </div><h3>${this.product_name}</h3>
            <p>Цена товара: $${this.price}</p>
            <button class="addToCart">Добавить</button>
        </div>
        `
    }
};

class GoodsList {
    list = [];
    fetchGoods(callback) {
        service(url).then((data) => {
            this.list = data;
            callback();
        });
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

goodsList.fetchGoods(() => {
    goodsList.render();
    goodsList.totalPrice();
});
