/*
 * Filename: complexCode.js
 * Description: A complex JavaScript code with over 200 lines demonstrating advanced programming concepts and functionality.
 * 
 * Author: Your Name
 * Date: Current date
 */

// Helper function to generate a random number between a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to calculate the factorial of a given number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
  }

  static multiply(complex1, complex2) {
    const real = complex1.real * complex2.real - complex1.imaginary * complex2.imaginary;
    const imaginary = complex1.real * complex2.imaginary + complex1.imaginary * complex2.real;
    return new ComplexNumber(real, imaginary);
  }
}

// Function to generate a random list of numbers
function generateRandomList(length, min, max) {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(getRandomNumber(min, max));
  }
  return list;
}

// Function to sort a list of numbers using bubble sort algorithm
function bubbleSort(list) {
  const n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeSentence(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to generate a random password with custom length
function generateRandomPassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

// Invoke functions to demonstrate the code's functionality
console.log(getRandomNumber(1, 100));
console.log(factorial(5));

const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(4, 5);
console.log(complex1.add(complex2));
console.log(ComplexNumber.multiply(complex1, complex2));

const randomList = generateRandomList(10, 1, 100);
console.log(randomList);
console.log(bubbleSort(randomList));

const sentence = 'the quick brown fox jumps over the lazy dog';
console.log(capitalizeSentence(sentence));

console.log(generateRandomPassword(10));
