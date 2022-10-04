"use strict"

const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GOODS = "/catalogData.json";
const url = `${URL}${GOODS}`;

//Почему то стоит подчеркивание у функции service, предлагает сделать её асинхронной, это важно?
function service(url) {
    return fetch(url).then((res) => res.json())
}

const app = new Vue({
    el: '#root',
    data: {
        goods: [],
        search: "",
    },
    mounted() {
        setTimeout(() => {
            service(url).then((data) => {
                this.goods = data;
            })
        }, 2000)
    },
    computed: {
        totalPrice() {
            return this.goods.reduce((sum, product) => sum + product.price, 0);
        },
        filteredGoods() {
            return this.goods.filter((item) => {
                const regExp = new RegExp(this.search, 'gi');
                return regExp.test(item.product_name)
            })
        }
    },
    methods: {
        clickHandler() {
            console.log(1)
        }
    }
})
