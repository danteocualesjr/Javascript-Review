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