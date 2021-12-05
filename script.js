// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let list = document.querySelector("#faultyItems");

    // for test GRADING DOM MANIPULATION TEST:  Launch CheckList is ready to go Launch CheckList is ready to go
    list.style.visibility = "hidden";

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
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