// Functions as data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  is2p2();
  
  console.log(is2p2.name);

  // Functions as parameters

  const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
  const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
      return firstTry
    } else {
        return 'This function returned inconsistent results';
    }
  };
  
  checkConsistentOutput(addTwo, 10);  

  // ITERATORS -- .forEach()

  const founder = ['Collisons', 'Musk', 'Sam Altman'];

  founder.forEach(founder => {
    console.log(founder + 'is one of my favorite founders.');
  });

  // Another example

  const colleagues = ['Cynthia McGillis', 'Tommy Collison', 'Zoe Ludwig', 'Kevin Morrill'];

  colleagues.forEach(colleagues => {
    console.log(colleagues + ' is a colleague of mine.');
  });

  // Another example

  const placesToTravel = ['London', 'New York', 'Switzerland', 'Austria', 'San Francisco'];

  placesToTravel.forEach(placesToTravel => {
    console.log(placesToTravel + 'are the places I want to visit after the pandemic');
  });

// Another example

const booksToRead = ['Sense and Sensibility', 'Emma', 'The History of Sir Charles Grandison'];

booksToRead.forEach(booksToRead => {
  console.log('I want to read this book:' + booksToRead);
})

// Yet another example

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits => {
  console.log('I want to eat a/an ' + fruits);
});

// ITERATORS -- .map()


const numbers = [1, 2, 3, 4, 5];
  
const squareNumbers = numbers.map(number => {
    return number * number;
  });

console.log(squareNumbers);

  // More examples of the .map() method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  return animals[0];  
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers / 100;
});

console.log(smallNumbers);

// The .filter() method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on smallNumbers below

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

// Using the .findIndex method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(anim => {
  return anim[0] === 's';
});

// The .reduce() method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ' + accumulator);
  console.log('The value of currentValue: ' + currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// Iterator documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
  return word.length > 5;
} ));

// Exercises: choosing the correct iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

/* 

Summary: The common iterators/methods:

.forEach()

.map()

.filter()

.findIndex()

.reduce()

*/

// More exercises below:

// .forEach()

const austensBooks = ['Sense and Sensibility', 'Pride and Prejudice', 'Northanger Abbey'];

austensBooks.forEach(austensBooks => {
  console.log(`I have read ${austensBooks}`);
});

// 

const myAssets = ['Eth', 'Bitcoin', 'Real Estates', 'Mutual Funds', 'Startups'];

myAssets.forEach(myAssets => {
  console.log('I own ' + myAssets);
});

// .map()

const numbers = [1, 2, 3, 4, 5];
  
const addNumbers = numbers.map(num => {
    return num + num;
  });

console.log(addNumbers);

// .filter()

const randomNum = [333, 512, 24, 73, 2500, 88, 5, 0.23, 85.2];

// Call .filter() on randomNumbers below
const largeNum = randomNum.filter(num => {
  return num > 100;
});

console.log(largeNum);

// .reduce()

const ranNumbers = [23, 333, 5, 70, 1, 8, 0, 45, 103];

const newSum = ranNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ' + accumulator);
  console.log('The value of currentValue: ' + currentValue);
  return accumulator + currentValue;
}, 33);

console.log(newSum);