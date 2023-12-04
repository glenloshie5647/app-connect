Here's an example of a JavaScript code that meets your requirements. The code simulates a simple e-commerce website with multiple functionalities, including user authentication, product listing, and cart management.

```javascript
// Filename: ecommerce.js
// Description: Simulates an e-commerce website

// User authentication
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    // Perform login logic
    console.log(`User ${this.username} logged in`);
  }

  logout() {
    // Perform logout logic
    console.log(`User ${this.username} logged out`);
  }
}

// Product listing
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  displayProduct() {
    console.log(`Name: ${this.name} | Price: $${this.price} | Quantity: ${this.quantity}`);
  }
}

// Cart management
class Cart {
  constructor() {
    this.products = [];
  }

  addToCart(product) {
    this.products.push(product);
    console.log(`Added ${product.name} to cart.`);
  }

  removeFromCart(product) {
    const index = this.products.findIndex(p => p.name === product.name);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`Removed ${product.name} from cart.`);
    } else {
      console.log(`${product.name} not found in cart.`);
    }
  }

  checkout() {
    let total = 0;
    console.log(`--- Cart Items ---`);
    this.products.forEach(product => {
      console.log(`Name: ${product.name} | Price: $${product.price}`);
      total += product.price;
    });
    console.log(`--- Total: $${total} ---`);
  }
}

// Usage example
const user = new User("JohnDoe", "password123");
user.login();

const product1 = new Product("Shirt", 25.99, 5);
const product2 = new Product("Pants", 39.99, 3);
const product3 = new Product("Shoes", 69.99, 2);

const cart = new Cart();
cart.addToCart(product1);
cart.addToCart(product2);
cart.addToCart(product3);
cart.removeFromCart(product2);
cart.checkout();

user.logout();
```

Please note that this code is a simplistic example. In a real e-commerce website, these functionalities would be more complex and involve interactions with databases, APIs, and more advanced security measures.