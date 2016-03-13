"use strict";

let Predator = (function () {
  let carnivores = [];

  return {
    loadCarnivores: function () {
      let loader = new XMLHttpRequest();


//Listen for when the load event is broadcast
//and execute an anonymous callback
      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        console.log("carnivores", carnivores );

        //List the carnivores in the DOM
        let list = document.getElementById("carnivores-list");

        for (let i = 0; i < carnivores.length; i++) {
          currentCarnivore = carnivores[i];

          //Build up DOM string
        }

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        // callback(carnivores);


      });
      loader.open("GET","carnivores.json");
      loader.send();
    }
  }
})();

Predator.loadCarnivores();