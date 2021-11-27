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

// TYPEOF OPERATOR

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

let myName = 'Dante';
let myAge = 40;
console.log(`My name is ${myName} and I am ${myAge}.`);

console.log(typeof myAge);

// DOG YEARS PROJECT

// Variable that stores my age value
let myAge = 40; 
// Variable that stores the dog's early years
let earlyYears = 2;
// Multiplying the first 2 years by 10.5 and storing the value in earlyYears
earlyYears *= 10.5;
// Deducting the first 2 years from the rest of the years or laterYears
let laterYears = myAge - 2;
// Multiplying the later years by 4
laterYears *= 4

// Human age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// This string returns the string in lower case
let myName = 'Dante'.toLowerCase();

// Logging a statement about my name, human age, and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// C. CONDITIONALS

// IF STATEMENT

let sale = true;
sale = false;

if (sale) {
  console.log('Time to buy!');
}

// IF-ELSE STATEMENT

let sale = true;
sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

// COMPARISON OPERATORS

let hungerLevel = 2;

if (hungerLevel > 7) {
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}

// LOGICAL OPERATORS

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('Time to sleep');
} else {
  console.log('Not bed time yet');
}

// TRUTHY AND FALSY

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// TRUTHY AND FALSY ASSIGNMENT

let tool = '';
tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// TERNARY OPERATOR

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isWeekend = true;

if (isWeekend) {
  console.log('It\'s the weekend!');
} else {
  console.log('Work day, so work it!');
}

// Refactoring the first if-else statement above using a ternary operator:

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.')

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// Refactoring the second if-else statement above using a ternary operator:

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log("I love that!");
} else {
  console.log("I don't love that!");
}

// Refactoring the third if-else statement above using a ternary operator:

favoritePhrase === 'Love That!' ? console.log("I love that!") : console.log("I don't love that!");

// ELSE IF STATEMENTS

let season = 'winter';
//season = 'fall';
//season = 'summer'

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}
  else {
  console.log('Invalid season.');
}

// THE SWITCH KEYWORD

// Writing a Switch statement -- it's an alternative if there are too many else-if statements

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!');
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place' :
    console.log('You get the bronze medal!');
    break;
  default :
    console.log('No medal awarded.');
    break;
}

// Switch heyword practice

let engineeringJob = 'Web3 Developer';
  
switch (engineeringJob) {
  case 'Frontend Developer' : 
    console.log('You\'re now a Frontend Developer!');
    break;
  case 'Backend Developer' : 
    console.log('You\'re now a Backend Developer!');
    break;
  case 'Fullstack Developer' : 
    console.log('You\'re now a Fullstack Developer!');
    break;
  case 'Web3 Developer' : 
    console.log('You\'re now a Web3/Blockchain Developer!');
    break;  
  default :
    console.log('You didn\'t get the engineering Job.');
    break;
}

// MAGIC 8 BALL (NOT WORKING)

let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Will I become a werewolf tonight?';

console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

const eightBall = '';

switch (eightBall) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightball = 'It is decidedly so';
    break;
  case 2:
    eightball = 'Reply hazy, try again';
    break;
  case 3:
    eightball = 'Cannot predict now';
    break;
  case 4:
    eightball = 'Do not count on it';
    break;
  case 5:
    eightball = 'My sources say no';
    break;
  case 6:
    eightball = 'Outlook not so good';
    break;
  case 7:
    eightball = 'Signs point to yes';
    break;    
}

console.log(`The eight ball answered: ${eightBall}`);