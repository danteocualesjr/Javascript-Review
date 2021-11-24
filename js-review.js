// A. INTRODUCTION TO JAVASCRIPT

// CONSOLE

console.log(333);
comsole.log("Hello world");

// I am making a comment here

// COMMENTS

// Opening line
console.log('It was love at first sight.');

/*console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.'); */

// DATA TYPES

console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);

// ARITHMETIC OPERATORS

// My age when people will start living on Mars
console.log(40 + 3.5);
// Number of years since the Moon landing
console.log(2021 - 1969); 
// Division
console.log(65 / 240);
// Multiplication
console.log(0.2708 * 100);

// METHODS

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

// BUILT-IN OBJECTS

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// B. VARIABLES

/* var myName = 'Dante';
console.log(myName); */

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

/* let meal = 'Pasta';
console.log(meal);
meal = 'Salad';
console.log(meal); */

/* let price;
console.log(price);
price = 33;
console.log(price); */

let changeMe = true;
changeMe = false;
console.log(changeMe);

// MATHEMATICAL ASSIGNMENT OPERATORS

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// INCREMENT AND DECREMENT OPERATORS

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

// STRING CONCATENATION WITH VARIABLES

let favoriteAnimal = 'dog';
console.log('My favorite animal: ' + favoriteAnimal);

// STRING INTERPOLATION

let myName = 'Dante';
let myCity = 'Los Angeles';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);