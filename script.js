class GoodsItem {
    constructor(img = "img", title = "title", price = 0, desc = "some text") {
        this.img = img;
        this.title = title;
        this.price = price;
        this.desc = desc;
    }
    render() {
        return `
    <div class="goods-item">
    <img scr=${this.img} width="250" height="250"/>
    <h3>${this.title}</h3>
    <p class="goods_price">${this.price}</p>
    <p class="goods_desc">${this.desc}</p>
    </div>
    `;
    }
}


class GoodsList {
    goods = [];
    fetchGoods() {
        this.goods = [
            { img: "img/j.jpeg", title: "Shirt", price: 150, desc: "Описание товара" },
            { img: "img/j.jpeg", title: "Socks", price: 50, desc: "Описание товара" },
            { img: "img/j.jpeg", title: "Jacket", price: 350, desc: "Описание товара" },
            { img: "img/j.jpeg", title: "Shoes", price: 250, desc: "Описание товара" },

            { img: "img/j.jpeg", title: "Shirt", price: 150, desc: "Описание товара" },
            { img: "img/j.jpeg", title: "Socks", price: 50, desc: "Описание товара" },
            { img: "img/j.jpeg", title: "Jacket", price: 350, desc: "Описание товара" },
            { img: "img/j.jpeg", title: "Shoes", price: 250, desc: "Описание товара" },
        ];
    }

    getCount() {
        let count = 0;
        this.goods.forEach(({ price }) => {
            count += price;
        })
        return count;
    }

    render() {
        const goodsList = this.goods.map(({ img, title, price, desc }) => {
            const goodsItem = new GoodsItem(img, title, price, desc);
            return goodsItem.render()
        });
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();


window.onload = () => {
    goodsList.render();
}





