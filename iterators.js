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

  // ITERATORS -- forEach

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
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on smallNumbers below

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

// Using the .findeIndex method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(anim => {
  return anim[0] === 's';
});