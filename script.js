// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let list = document.querySelector("#faultyItems");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (
            validateInput(pilot.value) === "Empty" ||
            validateInput(copilot.value) === "Empty" ||
            validateInput(fuelLevel.value) === "Empty" ||
            validateInput(cargoLevel.value) === "Empty"
          ) {
            list.style.visibility = "hidden";
            alert("All fields are required!");
          } else if (
            validateInput(pilot.value) !== "Not a Number" ||
            validateInput(copilot.value) !== "Not a Number" || 
            validateInput(fuelLevel.value) !== "Is a Number" ||
            validateInput(cargoLevel.value) !== "Is a Number"
            
          ) {
            list.style.visibility = "hidden";
            alert("Make sure to enter valid information for each field!");
          } 
        
        formSubmission(window.document, list, pilotName, copilotName, fuelLevel, cargoMass);
    });  

    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        let randomPlanet = pickPlanet(listedPlanets);

        console.log(`the random planet picked is ${randomPlanet}.`)

        addDestinationInfo(
            document,
            listedPlanets[randomPlanet].name,
            listedPlanets[randomPlanet].diameter,
            listedPlanets[randomPlanet].star,
            listedPlanets[randomPlanet].distance,
            listedPlanets[randomPlanet].moons,
            listedPlanets[randomPlanet].image
        );
    })

});