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

// Calling and calling another function

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();

// Parameters and arguments: Creating a function with a parameter and then calling that function

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

// Parameters and arguments: Creating a function with a parameter and then calling that function

function myFounder(name) {
  console.log(`My founder is ${name}.`);
}

myFounder('Paul Graham');

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
