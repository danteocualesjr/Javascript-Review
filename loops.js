// Repeating tasks manually

const vacationSpots = ['Los Angeles', 'New York', 'London'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// For loop that counts from 1-10

for (let counter = 0; counter <11; counter++) {
    console.log(counter);
  }

// For loop example

  for (let counter = 100; counter > 1; counter--) {
    console.log(counter);
  }

// Looping in reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0

  for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// Looping through arrays

const cualesFamily = ['Mommy', 'Daddy', 'Ahia', 'Shobe'];

for (let i = 0; i < cualesFamily.length; i++) {
  console.log(cualesFamily[i]);
}

// Another example of looping through arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Another example of looping through arrays

const cryptoCurrencies = ['Ether', 'Bitcoin', 'Shibu'];

for (let i = 0; i < cryptoCurrencies.length; i++) {
  console.log(cryptoCurrencies[i]);
}

// Another example

const cryptoCompanies = ['a16z', 'buildspace', 'makerDao'];

for (let i = 0; i < cryptoCompanies.length; i++) {
  console.log(cryptoCompanies[i]);
}

// Another example

const cryptoTopics = ['Defi', 'DeX', 'Dao', "Dapp" ];

for (let i = 0; i < cryptoTopics.length; i++) {
  console.log(cryptoTopics[i]);
}

// Another example

const web3Req = ['JavaScript', 'React', 'Solidity'];

for (let i = 0; i < web3Req.length; i++) {
  console.log(web3Req[i]);
}

// Nested loops

// Write your code below
let bobsFollowers = ['Tim', 'Cynthia', 'Rachel', 'Danny'];
let tinasFollowers = ['John', 'Rachel', 'Cynthia'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j])
      mutualFollowers.push(bobsFollowers[i]);                        
  }
}

// While loop

let counter = 1;
while (counter < 34) {
  console.log(counter);
  counter++
}

// Another while loop example

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
