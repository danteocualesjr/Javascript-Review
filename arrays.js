// Creating an array

let cualesFamily = ['Daddy', 'Mommy', 'Ahia', 'Shobe'];

console.log(cualesFamily);

const hobbies = ['Reading', 'Collecting books', 'Writing']

console.log(hobbies);

// Creating an array and then logging an element from that array

const hobbies = ['Reading', 'Writing', 'Collecting books'];

console.log(hobbies[2]);

// Creating a variable and logging an element from that variable

const greeting = 'Hai';

console.log(greeting[1]);

// Accessing elements in an array

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3])

// Updating elements in an array

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';
console.log(utensils);

// The .length property

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// The .push() method

const booksRead = ['Book 1', 'Book 2', 'Book3'];

booksRead.push('Book 3', 'Book 4');

console.log(booksRead);

// Another example

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook breakfast', 'sweep room');

console.log(chores);

// The .pop() method

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);

// More array methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

// console.log(groceryList);

groceryList.unshift('popcorn');

// console.log(groceryList);

// console.log(groceryList.slice(1, 4));

// console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);