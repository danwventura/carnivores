"use strict";

let Predator = (function () {
  let carnivores = [];

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
    }
  },

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





