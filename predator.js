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
        // Turning the JSON into an array of objects so Javascript can read it
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







