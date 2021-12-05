// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");

  missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}" alt="${name}" />
  `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let readyStatus = null;
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(pilot.value) !== "Not a Number" ||
    validateInput(copilot.value) !== "Not a Number" || 
    validateInput(fuelLevel.value) !== "Is a Number" ||
    validateInput(cargoLevel.value) !== "Is a Number"
    
  ) {
    alert("Make sure to enter valid information for each field!");
  } else {
    list.style.visibility = "visible";
    pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch.`;
    copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch.`;

    if (fuelLevel.value < 10000) {
      fuelStatus.textContent = "There is not enough fuel for the journey.";
      readyStatus = false;
    } else {
      fuelStatus.textContent = "Fuel level high enough for launch";
      readyStatus = true;
    }

    if (cargoLevel.value > 10000) {
      cargoStatus.textContent = "There is too much mass for the shuttle to take off.";
      readyStatus = false;
    } else {
      cargoStatus.textContent = "Cargo mass low enough for launch";
      readyStatus = true;
    }

    if (readyStatus) {
      launchStatus.style.color = "green";
      launchStatus.textContent = "Shuttle is ready for launch";
    } else {
      launchStatus.style.color = "red";
      launchStatus.textContent = "Shuttle not ready for launch";
    }
  }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
  return (randomPlanet = Math.floor(Math.random() * planets.length));
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
