/*
   Filename: complex_program.js
   Description: This code demonstrates a complex and elaborate JavaScript program
   that implements a social media platform with user registration, login, and post functionality.
*/

// User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
  }

  addPost(title, content) {
    let post = new Post(title, content);
    this.posts.push(post);
  }

  viewPosts() {
    this.posts.forEach(post => {
      console.log(`Title: ${post.title}\nContent: ${post.content}\n`);
    });
  }
}

// Post class
class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

// Social media platform
class SocialMediaPlatform {
  constructor() {
    this.users = [];
  }

  registerUser(username, password) {
    let user = new User(username, password);
    this.users.push(user);
  }

  loginUser(username, password) {
    let user = this.users.find(user => user.username === username);
    if (user && user.password === password) {
      console.log(`Welcome back, ${username}!`);
      return user;
    } else {
      console.log(`Invalid username or password.`);
      return null;
    }
  }
}

// Usage example
let platform = new SocialMediaPlatform();

platform.registerUser("john_doe", "password123");
platform.registerUser("jane_doe", "password456");

let user1 = platform.loginUser("john_doe", "password123");
if (user1) {
  user1.addPost("My first post", "Hello world!");
  user1.addPost("Important announcement", "Something important...");
}

let user2 = platform.loginUser("jane_doe", "password456");
if (user2) {
  user2.addPost("Hello everyone!", "Nice to meet you all!");
  user2.addPost("Feeling happy today", "Having a great day!");
}

user1.viewPosts();
user2.viewPosts();
