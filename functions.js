// Created two functions called getReminder() and greetInSpanish()

function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas Tardes.');
}

// Calling the functions

getReminder();

greetInSpanish();

// Creating and calling another function

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();

function sayHello() {
  console.log('Hello!');
}

sayHello();

// Parameters and arguments: Creating a function with a parameter and then calling that function

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

// Parameters and arguments: Creating a function with a parameter and then calling that function

function myFounder(name) {
  console.log(`My founder is ${name}.`);
}

myFounder();

// Parameters and arguments: Creating a function with a parameter and then calling that function

function myJob(job) {
  console.log(`My job title is ${job}.`);
}

myJob('Blockchain Developer');

// Default parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList(); // The default values will be logged
makeShoppingList('juice', 'veggies', 'fruits'); // The specified values will be logged

// The Return keyword

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

function computeRectangle(width, height) {
  return width * height;
}

console.log(computeRectangle);

// Helper functions

function monitorCount(rows, columns) {
  return rows * columns;
};

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
};

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Function expressions

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  }
  else return false;
}

console.log(plantNeedsWater('Tuesday'));

// Refactoring a regular function into an arrow function

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

const plantNeedsWater = (day) => {};

// Different ways to refactor arrow functions

// Zero parameters

const functionName = () => {};

// One parameter

const functionName = parameterOne => {};

// Multiple parameters

const functionName = (parameterOne, parameterTwo) => {};

// Refactoring an arrow function into a single line

const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// Blocks and Scope

const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return `The stars over the ${skyscraper} in ${city}`;
  console.log(logCitySkyline());
}

// Creating a function and then calling it

const companyName = () => {
  let name = 'Stripe';
  console.log(name);
}

companyName();

// Global Scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  return `Night Sky: ${satellite}, ${stars}, and ${galaxy}`;
}

console.log(callMyNightSky());

// Another example

let myName = 'Dante';
let myJob = 'Blockchain Developer';
let myCompany = 'Stripe';

const myProfile = () => {
  return `Hi, my name is ${myName} and I\'m a ${myJob} from ${myCompany}.`;
}

console.log(myProfile());

// Block scope

const logSkyColor = () => {
  let color = 'blue';
  console.log(color);
};

logSkyColor(); 

// Block scope: calling a variable outside the block

const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();
console.log(lightWaves);

// Scope pollution

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Practicing good scoping

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();