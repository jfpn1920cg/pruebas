<template>
<div>
    <header>
        <h1>Tienda de Vegetales</h1>
    </header>
    <div class="products-container">
        <div class="product" v-for="(product, index) in products" :key="index">
            <h3>{{ product.name }}</h3>
            <p class="price">$ {{ product.price.toFixed(2) }}</p>
            <button class="buy-btn" @click="buyProduct">Comprar</button>
            <button class="cart-btn" @click="addToCart(product)">Añadir al Carrito</button>
        </div>
    </div>
    <div id="cart">
        <h2>Carrito de Compras</h2>
        <ul id="cart-list">
            <li v-for="(item, index) in cart" :key="index">
                {{ item.name }} - ${{ item.price.toFixed(2) }}
                <button class="remove-btn" @click="removeFromCart(index, item.price)">Eliminar</button>
            </li>
        </ul>
        <p>Total: $<span id="cart-total">{{ total.toFixed(2) }}</span></p>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                { name: 'Vegetal 1', price: 5.99 },
                { name: 'Vegetal 2', price: 3.99 }
            ],
            cart: [],
            total: 0
        };
    },
    methods: {
        buyProduct() {
            alert('Producto comprado. Gracias por tu compra.');
        },
        addToCart(product) {
            const newItem = { name: product.name, price: product.price };
            this.cart.push(newItem);
            this.total += product.price;
            this.updateLocalStorage();
        },
        removeFromCart(index, price) {
            this.cart.splice(index, 1);
            this.total -= price;
            this.updateLocalStorage();
        },
        updateLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
            localStorage.setItem('total', this.total.toFixed(2));
        },
        loadLocalStorage() {
            const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
            this.cart = savedCart;
            this.total = parseFloat(localStorage.getItem('total')) || 0;
        }
    },
    mounted() {
        this.loadLocalStorage(); // Cargar información del localStorage al montar el componente
    }
};
</script>
<style>
header {
    padding: 15px 0;
    text-align: center;
    color: white;
    background-color: #4CAF50;
}
h1 {
    margin: 0;
}
.products-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.product {
    padding: 20px;
    margin: 15px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #ddd;
    background-color: white;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.product:hover {
    transform: scale(1.05);
}
.product img {
    max-width: 100px;
    border-radius: 50%;
}
.price {
    font-weight: bold;
    color: #4CAF50;
}
#cart {
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
#cart-list {
    padding: 0;
    list-style: none;
}
#cart-list li {
    margin-bottom: 10px;
}

#cart-total {
    font-weight: bold;
    color: #4CAF50;
}
</style>