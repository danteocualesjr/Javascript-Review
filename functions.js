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