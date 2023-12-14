// Filename: advancedWebApp.js

// This code demonstrates a sophisticated web application that allows users
// to create posts, like posts, and add comments to posts.

// User data
const users = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', password: 'password' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', password: 'password' },
  { id: 3, name: 'Mike Johnson', email: 'mikejohnson@example.com', password: 'password' },
];

// Post data
let posts = [
  { id: 1, userId: 1, title: 'Hello World', content: 'Welcome to my blog!', likes: [] },
  { id: 2, userId: 2, title: 'JavaScript Tips', content: 'Here are some useful JavaScript tips!', likes: [] },
  { id: 3, userId: 3, title: 'CSS Tricks', content: 'Learn awesome CSS tricks and techniques!', likes: [] },
];

// Comment data
let comments = [
  { id: 1, postId: 1, userId: 2, content: 'Great article!', likes: [] },
  { id: 2, postId: 1, userId: 3, content: 'I found it really helpful.', likes: [] },
  { id: 3, postId: 2, userId: 1, content: 'Nice tips! Thanks for sharing.', likes: [] },
];

// Utility function to find a user by email
const findUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

// Utility function to find a post by ID
const findPostById = (postId) => {
  return posts.find((post) => post.id === postId);
};

// Utility function to find a comment by ID
const findCommentById = (commentId) => {
  return comments.find((comment) => comment.id === commentId);
};

// Utility function to generate a unique ID for new posts/comments
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

// Class representing a user
class User {
  constructor(name, email, password) {
    this.id = generateUniqueId();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Method to create a new post
  createPost(title, content) {
    const post = {
      id: generateUniqueId(),
      userId: this.id,
      title,
      content,
      likes: [],
    };

    posts.push(post);
    return post;
  }

  // Method to like a post
  likePost(postId) {
    const post = findPostById(postId);

    if (post) {
      if (!post.likes.includes(this.id)) {
        post.likes.push(this.id);
        return true;
      }
    }

    return false;
  }

  // Method to create a new comment
  createComment(postId, content) {
    const post = findPostById(postId);

    if (post) {
      const comment = {
        id: generateUniqueId(),
        postId,
        userId: this.id,
        content,
        likes: [],
      };

      comments.push(comment);
      return comment;
    }

    return null;
  }
}

// Class representing a post
class Post {
  constructor(userId, title, content) {
    this.id = generateUniqueId();
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.likes = [];
  }

  // Method to like a post
  likePost(userId) {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
      return true;
    }

    return false;
  }

  // Method to add a comment to the post
  addComment(userId, content) {
    const comment = {
      id: generateUniqueId(),
      postId: this.id,
      userId,
      content,
      likes: [],
    };

    comments.push(comment);
    return comment;
  }
}

// Class representing a comment
class Comment {
  constructor(postId, userId, content) {
    this.id = generateUniqueId();
    this.postId = postId;
    this.userId = userId;
    this.content = content;
    this.likes = [];
  }

  // Method to like a comment
  likeComment(userId) {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
      return true;
    }

    return false;
  }
}

// Example usage

// Create new users
const user1 = new User('John Doe', 'johndoe@example.com', 'password');
const user2 = new User('Jane Smith', 'janesmith@example.com', 'password');
const user3 = new User('Mike Johnson', 'mikejohnson@example.com', 'password');

// Create new posts
const post1 = user1.createPost('Hello World', 'Welcome to my blog!');
const post2 = user2.createPost('JavaScript Tips', 'Here are some useful JavaScript tips!');
const post3 = user3.createPost('CSS Tricks', 'Learn awesome CSS tricks and techniques!');

// Like posts
user2.likePost(post1.id); // Likes post1
user1.likePost(post1.id); // Already liked by user1, no effect
user3.likePost(post2.id); // Likes post2

// Add comments to posts
user2.createComment(post1.id, 'Great article!');
user3.createComment(post1.id, 'I found it really helpful.');
user1.createComment(post2.id, 'Nice tips! Thanks for sharing.');

// Like comments
findCommentById(1).likeComment(user1.id); // Likes comment1
findCommentById(1).likeComment(user1.id); // Already liked by user1, no effect
findCommentById(2).likeComment(user2.id); // Likes comment2

// Output current data
console.log(users);
console.log(posts);
console.log(comments);

// Further functionality can be added, such as editing posts/comments, deleting posts/comments, etc.

// ...rest of the code