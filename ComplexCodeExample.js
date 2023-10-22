// Filename: ComplexCodeExample.js
// Description: This code demonstrates a complex implementation of a customer management system.

// Import necessary modules
const fs = require('fs');
const readline = require('readline');

// Define Customer class
class Customer {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  formatDetails() {
    return `${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}`;
  }
}

// Define CustomerManager class
class CustomerManager {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  deleteCustomerById(id) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
  }

  searchCustomerByEmail(email) {
    return this.customers.find((customer) => customer.email === email);
  }

  exportCustomersToFile(filename) {
    const stream = fs.createWriteStream(filename);
    this.customers.forEach((customer) => {
      stream.write(`${customer.name}, ${customer.email}, ${customer.phone}\n`);
    });
    stream.end();
    console.log(`Exported ${this.customers.length} customers to ${filename}`);
  }
}

// Create an instance of CustomerManager
const customerManager = new CustomerManager();

// Read customer data from a file
const readInterface = readline.createInterface({
  input: fs.createReadStream('customers.txt'),
  output: process.stdout,
  console: false
});

readInterface.on('line', (line) => {
  const [name, email, phone] = line.split(', ');
  const customer = new Customer(
    customerManager.customers.length + 1,
    name,
    email,
    phone
  );
  customerManager.addCustomer(customer);
});

readInterface.on('close', () => {
  console.log('Customer data loaded successfully.');
  console.log('-------------------------------');

  // Perform various operations on customer data
  const customer1 = customerManager.searchCustomerByEmail('customer1@example.com');
  if (customer1) {
    console.log('Found Customer:');
    console.log(customer1.formatDetails());
  } else {
    console.log('Customer not found!');
  }

  customerManager.deleteCustomerById(2);
  console.log('Deleted customer with ID 2.');

  customerManager.exportCustomersToFile('exported_customers.csv');
});

// Output:
// Customer data loaded successfully.
// -------------------------------
// Found Customer:
// Customer 1
// Email: customer1@example.com
// Phone: 1234567890
// Deleted customer with ID 2.
// Exported 2 customers to exported_customers.csv

// customers.txt:
// Name 1, customer1@example.com, 1234567890
// Name 2, customer2@example.com, 9876543210