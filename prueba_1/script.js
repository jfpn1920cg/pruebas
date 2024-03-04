document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-btn");
    const cartButtons = document.querySelectorAll(".cart-btn");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    total = parseFloat(localStorage.getItem("total")) || 0;
    savedCart.forEach((item) => {
        const listItem = createCartItem(item.name, item.price);
        cartList.appendChild(listItem);
    });
    cartTotal.innerText = total.toFixed(2);
    buyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Producto comprado. Gracias por tu compra.");
        });
    });
    cartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = this.parentNode;
            const productName = product.querySelector("h3").innerText;
            const productPrice = parseFloat(
                product.querySelector("p").innerText.split("$")[1]
                );
                const listItem = createCartItem(productName, productPrice);
                cartList.appendChild(listItem);
                total += productPrice;
                cartTotal.innerText = total.toFixed(2);
                updateLocalStorage();
            });
        });
        function createCartItem(name, price) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
            ${name} - $${price.toFixed(2)}
            <button class="remove-btn">Eliminar</button>
            `;
            const removeButton = listItem.querySelector(".remove-btn");
            removeButton.addEventListener("click", function () {
                total -= price;
                cartTotal.innerText = total.toFixed(2);
                listItem.remove();
                updateLocalStorage();
            });
            return listItem;
        }
        function updateLocalStorage() {
            const cartItems = Array.from(cartList.children).map((item) => {
                const name = item.innerText.split(" - ")[0];
                const price = parseFloat(item.innerText.split("$")[1]);
                return { name, price };
            });
            localStorage.setItem("cart", JSON.stringify(cartItems));
            localStorage.setItem("total", total.toFixed(2));
        }
    });