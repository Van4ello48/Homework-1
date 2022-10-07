"use strict"

const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GOODS = "/catalogData.json";
const url = `${URL}${GOODS}`;

//Почему то стоит подчеркивание у функции service, предлагает сделать её асинхронной, это важно?
function service(url) {
    return fetch(url).then((res) => res.json())
}

function init() {
    Vue.component('goods_item', {
        props: [
            'item'
        ],
        template: `
            <div class="goods-item">
                <div class="goods-item-img"></div>
                <h3>{{item.product_name}}</h3>
                <p>Цена товара: \${{item.price}}</p>
                <button class="addToCart">Добавить</button>
            </div>
        `
    });

    Vue.component('cart_button', {
        template: `
            <button class="cart-button" type="button" @click="$emit('click')">
                <slot></slot>
            </button>
        `
    });

    Vue.component('fixed_cart', {
        props: [
            'isVisibleCart'
        ],
        template: `
            <div class="fixed-cart-background">
                <div class="fixed-cart">
                    <div class="fixed-cart-header">
                        <h1 class="fixed-cart-name">basket card</h1>
                        <div class="fixed-cart-close" @click="openCart">x</div>
                    </div>
                </div>
            </div>
        `
    });
    

    const app = new Vue({
        el: '#root',
        data: {
            goods: [],
            search: "",
            isVisibleCart: false,
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
            openCart() {
                this.isVisibleCart = !this.isVisibleCart;
            },
        }
    })
}
init();