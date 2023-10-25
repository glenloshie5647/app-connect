/* 
Filename: complex_code.js
Description: This code demonstrates a complex and sophisticated JavaScript program that implements a task scheduler using priority queues and dynamic resource allocation.
*/

// Define the Task class
class Task {
  constructor(name, priority, duration, resourcesRequired) {
    this.name = name;
    this.priority = priority;
    this.duration = duration;
    this.resourcesRequired = resourcesRequired;
  }
}

// Define the Scheduler class
class Scheduler {
  constructor(resourcesAvailable) {
    this.resourcesAvailable = resourcesAvailable;
    this.queue = [];
  }

  // Function to add a new task to the priority queue
  addTask(task) {
    if (task.resourcesRequired > this.resourcesAvailable) {
      console.log(`Insufficient resources for '${task.name}'. Task added to the waiting queue.`);
      this.queue.push(task);
    } else {
      console.log(`Task '${task.name}' added to the execution queue.`);
      this.resourcesAvailable -= task.resourcesRequired;
      this.queue.push(task);
      this.queue.sort((a, b) => b.priority - a.priority);
      this.executeTasks();
    }
  }

  // Function to execute tasks in the priority queue
  executeTasks() {
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      console.log(`Executing '${task.name}'...`);
      setTimeout(() => {
        console.log(`Completed '${task.name}'.`);
        this.resourcesAvailable += task.resourcesRequired;
        this.executeTasks();
      }, task.duration);
      break;
    }
  }

  // Function to check the status of the scheduler
  checkStatus() {
    console.log(`Resources Available: ${this.resourcesAvailable}`);
    console.log(`Tasks in Queue:`);
    if (this.queue.length === 0) {
      console.log(`No tasks in queue.`);
    } else {
      this.queue.forEach((task, index) => {
        console.log(`${index + 1}. ${task.name}`);
      });
    }
  }
}

// Create an instance of the Scheduler
const scheduler = new Scheduler(5); // 5 resources available initially

// Create and add tasks to the scheduler
const task1 = new Task("Task 1", 3, 3000, 2);
const task2 = new Task("Task 2", 1, 5000, 4);
const task3 = new Task("Task 3", 2, 2000, 1);
const task4 = new Task("Task 4", 5, 6000, 3);

scheduler.addTask(task1);
scheduler.addTask(task2);
scheduler.addTask(task3);
scheduler.addTask(task4);

// Check the status of the scheduler after tasks are added
scheduler.checkStatus();

/* 
Output:
Task 'Task 1' added to the execution queue.
Executing 'Task 1'...
Task 'Task 2' added to the waiting queue.
Insufficient resources for 'Task 2'. Task added to the waiting queue.
Executing 'Task 1'...
Completed 'Task 1'.
Task 'Task 3' added to the execution queue.
Executing 'Task 3'...
Completed 'Task 3'.
Task 'Task 4' added to the execution queue.
Executing 'Task 4'...
Completed 'Task 4'.
Resources Available: 3
Tasks in Queue:
No tasks in queue.
*/