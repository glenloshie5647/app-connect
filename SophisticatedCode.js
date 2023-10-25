/*

File Name: SophisticatedCode.js

Description: This code demonstrates a complex and creative implementation of a web application that allows users to interact with a virtual pet. The pet's emotions, needs, and interactions are simulated using different JavaScript functionalities such as classes, async/await, event listeners, and DOM manipulation.

*/

// Pet Class Definition
class Pet {
  constructor(name, type, happiness = 50, hunger = 50) {
    this.name = name;
    this.type = type;
    this.happiness = happiness;
    this.hunger = hunger;
  }

  async feed() {
    this.hunger -= 10;
    await this.sleep(500);
    console.log(`${this.name} is now fed.`);
  }

  async play() {
    this.hunger += 8;
    this.happiness += 10;
    await this.sleep(1000);
    console.log(`${this.name} is now happily playing.`);
  }

  async sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
}

// UI Class Definition
class UI {
  constructor() {
    this.pet = null;
    this.petContainer = document.getElementById("pet-container");
    this.petInfo = document.getElementById("pet-info");
    this.petActions = document.getElementById("pet-actions");

    this.petForm = document.getElementById("pet-form");
    this.petNameInput = document.getElementById("pet-name");
    this.petTypeInput = document.getElementById("pet-type");

    this.feedButton = document.getElementById("feed-button");
    this.playButton = document.getElementById("play-button");

    this.statsInterval = null;
  }

  initialize() {
    this.petForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    this.feedButton.addEventListener("click", this.feedPet.bind(this));
    this.playButton.addEventListener("click", this.playWithPet.bind(this));
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    const name = this.petNameInput.value;
    const type = this.petTypeInput.value;

    this.pet = new Pet(name, type);
    this.updatePetUI();

    this.statsInterval = setInterval(() => {
      this.updatePetStats();
    }, 2000);

    await this.pet.sleep(200);
    this.petContainer.style.display = "block";
  }

  feedPet() {
    this.pet.feed();
  }

  playWithPet() {
    this.pet.play();
  }

  updatePetUI() {
    this.petInfo.innerHTML = `
      <h2>${this.pet.name}</h2>
      <p>Type: ${this.pet.type}</p>
    `;

    this.petActions.style.display = "block";
    this.petNameInput.value = "";
    this.petTypeInput.value = "";
  }

  updatePetStats() {
    if (this.pet.hunger === 0 || this.pet.happiness === 0) {
      clearInterval(this.statsInterval);
      this.petActions.style.display = "none";
      alert("Your pet ran away!");
      return;
    }

    this.pet.hunger--;
    this.pet.happiness--;
    this.petInfo.innerHTML += `
      <p>Hunger: ${this.pet.hunger}</p>
      <p>Happiness: ${this.pet.happiness}</p>
    `;
  }
}

// Initializing the Application
const app = new UI();
app.initialize();