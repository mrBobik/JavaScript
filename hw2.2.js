const goods = {
    "Футболка": {
        id: 1,
        name: "Футболка",
        description: "Белая футболка",
        sizes: ["s", "m", "l",],
        price: 100,
        available: 1,
    },
    "Рубашка": {
        id: 2,
        name: "Рубашка",
        description: "Хлопок 100%",
        sizes: ["s", "m", "xl",],
        price: 200,
        available: 1,
    },
    "Шорты": {
        id: 3,
        name: "Шорты",
        description: "Хлопок 70%",
        sizes: ["s",],
        price: 120.25,
        available: 0,
    },
    "Брюки": {
        id: 4,
        name: "Брюки",
        description: "Хлопок 50%",
        sizes: ["s", "m", "xl",],
        price: 300,
        available: 1,
    },
    "Пиджак": {
        id: 5,
        name: "Пиджак",
        description: "Хлопок 100%",
        sizes: ["s", "m", "xl",],
        price: 500,
        available: 1,
    },
}

const basket = [
    {
        good: goods.Футболка.name,
        amount: 1,
    },
    {
        good: goods.Рубашка.name,
        amount: 3,
    },
    {
        good: goods.Шорты.name,
        amount: 1,
    },
]

function addBasket(good, amount) {
    basket.push({ good: good, "amount": Number(amount) });
    return basket;
}

function clearBasket() {
    // basket.length = 0;
    basket.splice(0, basket.length)
    return basket;
}

function delFromBasket(val) {
    for (i in basket) {
        if (basket[i].good === val) {
            basket.splice(basket.indexOf(basket[i]), 1)
            console.log(`Товар ${val} удален из корзины`)
        }
    }
    return basket;
}

function totalSum() {
    arr = [];
    arr2 = [];
    for (i in basket) {
        arr.push(basket[i].amount);
        if (basket[i].good in goods) {
            arr2.push(goods[basket[i].good].price * arr[i])

        }
    }
    add = function (arr) {
        return arr.reduce((a, b) => a + b, 0);
    };
    add2 = function (arr2) {
        return arr2.reduce((a, b) => a + b, 0);
    };

    let totalAmount = add(arr);
    let totalSumm = add2(arr2);

    return { totalAmount: totalAmount, totalSumm: totalSumm };
}


// console.log(addBasket(process.argv[2], process.argv[3]));       /*node JavaScript\hw2.2.js Шорты 5 */

// console.log(clearBasket());

// console.log(delFromBasket(process.argv[2]));                   /*node JavaScript\hw2.2.js Рубашка*/

console.log(totalSum());
