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