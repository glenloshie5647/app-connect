/* 
   Filename: sophisticated_program.js
   Description: This code demonstrates a sophisticated and complex program in JavaScript.
   It is an e-commerce website that allows users to browse and purchase products.
*/

// Define Constants
const MAX_PRODUCTS = 100;
const MAX_CART_ITEMS = 10;
const SHIPPING_FEE = 5;

// Define Classes
class Product {
    constructor(name, price, description, stock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }

    reduceStock(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
            return true;
        } else {
            return false;
        }
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        if (this.items.length < MAX_CART_ITEMS) {
            const newItem = new CartItem(product, quantity);
            this.items.push(newItem);
            return true;
        } else {
            return false;
        }
    }

    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    calculateTotalPrice() {
        let total = 0;
        for (const item of this.items) {
            total += item.calculateTotalPrice();
        }
        return total;
    }
}

// Define Helper Functions
function generateProducts() {
    const products = [];

    for (let i = 0; i < MAX_PRODUCTS; i++) {
        const product = new Product(`Product #${i + 1}`, Math.random() * 100, `Description of Product #${i + 1}`, Math.floor(Math.random() * 10) + 1);
        products.push(product);
    }

    return products;
}

// Define Main Function
function main() {
    console.log("Welcome to our e-commerce website!");

    const products = generateProducts();
    const cart = new ShoppingCart();

    console.log("Available Products:");
    for (const product of products) {
        console.log(`- ${product.name} ($${product.price.toFixed(2)}) - ${product.description}`);
    }

    let isAddingProducts = true;
    while (isAddingProducts) {
        const productId = parseInt(prompt("Enter the ID of the product you want to add to the cart (or 0 to stop):"));
        if (productId === 0) {
            isAddingProducts = false;
        } else if (productId >= 1 && productId <= MAX_PRODUCTS) {
            const product = products[productId - 1];
            const quantity = parseInt(prompt(`Enter the quantity of ${product.name} you want to add to the cart:`));

            if (product.reduceStock(quantity) && cart.addItem(product, quantity)) {
                console.log(`Added ${quantity} ${product.name}(s) to the cart.`);
            } else {
                console.log(`Unable to add ${quantity} ${product.name}(s) to the cart.`);
            }
        } else {
            console.log("Invalid product ID.");
        }
    }

    console.log("Cart Summary:");
    for (let i = 0; i < cart.items.length; i++) {
        const item = cart.items[i];
        console.log(`- ${item.product.name} ($${item.product.price.toFixed(2)}) x ${item.quantity}`);
    }

    console.log(`Total Price: $${cart.calculateTotalPrice().toFixed(2)}`);

    if (cart.items.length > 0) {
        console.log(`Shipping Fee: $${SHIPPING_FEE.toFixed(2)}`);
        console.log(`Grand Total: $${(cart.calculateTotalPrice() + SHIPPING_FEE).toFixed(2)}`);
    }

    console.log("Thank you for shopping with us!");
}

// Execute the Main Function
main();