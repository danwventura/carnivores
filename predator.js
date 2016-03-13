"use strict";

let Predator = (function () {
  let carnivores = [];
  let herbivores = [];

  return {
    loadCarnivores: function (callbackFunction) {
      let loader = new XMLHttpRequest();


//Listen for when the load event is broadcast
//and execute an anonymous callback
      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivores;
        callbackFunction(carnivores);
        
        // Invoke the callback function so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.callback(carnivores);
      });
      loader.open("GET","carnivores.json");
      loader.send();
    },


  loadHerbivores: function (callbackFunction) {
    let loader2 = new XMLHttpRequest();

    loader2.addEventListener("load", function (){

      herbivores = JSON.parse(this.responseText).herbivores
      callbackFunction(herbivores);

    });
    loader2.open("GET", "herbivores.json");
    loader2.send();
  }
 }
})();

function showCarnivores (carnivores){

  //List the carnivores in the DOM
  let list = document.getElementById("carnivores-list");
  let outputString = "";

  for (let i = 0; i < carnivores.length; i++) {
    let currentCarnivore = carnivores[i];

    //Build up DOM string
    outputString +=  `<h1>${currentCarnivore.name}</h1>`;
    outputString +=  `<h5>${currentCarnivore.family}</h5>`;

    list.innerHTML = outputString;
  }
};

function showHerbivores (herbivores){
 // List the herbivores in the DOM
  let list2 = document.getElementById("herbivores-list")
  let outputString2 = "";

  for (let i = 0; i < herbivores.length; i++) {
   let currentHerbivore = herbivores[i];
    // Build up the DOM string
    outputString2 += `<h1>${currentHerbivore.name}</h1>`;
    outputString2 += `<h5>${currentHerbivore.family}</h5>`;

    list2.innerHTML = outputString2;

  }
}





