document.addEventListener("DOMContentLoaded", function(e) {

let pets = [
   {
      name: "Rubby",
      type: "Dog",
      breed: "Corgi",
      bestTrick: "Tug of war",
      image: "pet-images/rubby.jpg"
   }, {
      name: "Howdy",
      type: "Dog",
      breed: "Mixed Breed",
      bestTrick: "Go find it!",
      image: "pet-images/howdy.jpg"
   }, {
      name: "KitKit",
      type: "Cat",
      breed: "American Shorthair",
      bestTrick: "Commanding his owner to feed him",
      image: "pet-images/kitkit.jpg"
   }, {
      name: "Lil' Miss",
      type: "Cat",
      breed: "Tabby",
      bestTrick: "Looking aloof",
      image: "pet-images/lilmiss.jpg"
   }, {
      name: "Happy",
      type: "Dog",
      breed: "Golden Retriever",
      bestTrick: "Refusing to retrieve!",
      image: "pet-images/happy.jpg"
   }, {
      name: "Piper",
      type: "Dog",
      breed: "Beagle",
      bestTrick: "Find it!  Dropped food edition!",
      image: "pet-images/piper.jpg"
   }, {
      name: "Spooky",
      type: "Cat",
      breed: "Mixed",
      bestTrick: "Gymnastics!",
      image: "pet-images/spooky.jpg"
   }
];

function createPetCard(pet) {
   return `
       <div class="col-md-4 mb-4">
           <div class="card">
               <img src="${pet.image}" class="card-img-top" alt="${pet.name} Image">
               <div class="card-body">
                   <h5 class="card-title">${pet.name}</h5>
                   <p class="card-text">Type: ${pet.type}</p>
                   <p class="card-text">Breed: ${pet.breed}</p>
                   <p class="card-text">Best Trick: ${pet.bestTrick}</p>
               </div>
           </div>
       </div>
   `;
}

// Function to append pet cards to the container
function appendPetCards(container, pets) {
   container.innerHTML = pets.map(createPetCard).join('');
}

// Get the pet container element
let petContainer = document.getElementById("petContainer");

// Append pet cards to the container
appendPetCards(petContainer, pets);
});