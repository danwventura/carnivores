"use strict";

function showCarnivores (carnivores){

  //List the carnivores in the DOM
  let list = document.getElementById("carnivores-list");
  let outputString = "";

  for (let i = 0; i < carnivores.length; i++) {
    let currentCarnivore = carnivores[i];

    //Build up DOM string
    outputString +=  `<h1>${currentCarnivore.name}</h1>`;
    outputString +=  `<h5>${currentCarnivore.family}</h5>`;

    list.innerHTML += outputString;
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


Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
