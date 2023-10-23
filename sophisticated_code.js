// Filename: sophisticated_code.js
// Description: This is a sophisticated and complex code that demonstrates various advanced concepts in JavaScript.

// Class representing a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Method to display person's details
  showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
  }
}

// Function to calculate the sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to find the average of numbers in the array
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Map of programming languages and their popularity
const languages = new Map();
languages.set("JavaScript", 1);
languages.set("Python", 2);
languages.set("Java", 3);
languages.set("C++", 4);

// Function to display programming language popularity
function displayLanguagePopularity() {
  languages.forEach((value, key) => console.log(`${key} is ranked ${value} in popularity.`));
}

// Recursive function to calculate factorial
function calculateFactorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * calculateFactorial(num - 1);
}

// Generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
}

// Class representing a Book
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  // Method to display book details
  showDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
}

// Create a person object
const person = new Person("John Doe", 30, "Male");
person.showDetails();

// Calculate and display the sum of two numbers
const sum = calculateSum(10, 20);
console.log(`Sum: ${sum}`);

// Calculate and display the average of numbers in the array
const average = calculateAverage(numbers);
console.log(`Average: ${average}`);

// Check if a number is prime
console.log(`Is 17 prime? ${isPrime(17)}`);

// Display programming language popularity
displayLanguagePopularity();

// Calculate and display factorial
console.log(`Factorial of 5: ${calculateFactorial(5)}`);

// Generate and display a random number
const randomNumber = getRandomNumber(1, 10);
console.log(`Random number: ${randomNumber}`);

// Check if a string is a palindrome
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`);

// Create a book object and display its details
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
book.showDetails();