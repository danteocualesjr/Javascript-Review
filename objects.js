// An empty object

let spaceship = {};

// Creating object literals

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

// Accessing properties: dot notation

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
  
// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

// Accessing properties: bracket notation

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
let propName =  'Active Mission';
  
// Write your code below
let isActive = spaceship['Active Mission'];
  
console.log(spaceship[propName]);

// Property assignments in objects

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};
  
// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 3;
delete spaceship['Secret Mission'];

// Object example

let myProfile = {
  Profession : 'Crypto Startup Founder',
  'Net Worth' : '3 Billion Dollars',
  Location: 'London'
};

console.log(myProfile['Net Worth']);

// Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat();
alienShip.takeOff();

// Nested objects

let spaceship = {
  passengers: [{
    'passenger 1' : 'felix'
  }, {
    'passenger 2' : 'alex'
  }, {
    'passenger 3' : 'babe'
  }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
let firstPassenger = spaceship.passengers[0];

// Passing objects by reference

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
  obj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

// Looping through objects

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
};

for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name} : ${spaceship.crew[crewMember].degree}`);
};

// The this keyword

const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  }
};

console.log(robot.provideInfo());

//

const cryptoStartupFounder = {
  name : 'dante cuales',
  startup : 'AmazeDAO',
  'net worth' : '$1 billion',
  faveLine() {
    return `Let\'s get it done!!!`;
  }
};

console.log(cryptoStartupFounder.faveLine());


// Arrow functions and this

const robot = {
  energyLevel: 100,
  checkEnergy () {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();