let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasar", height: 0.7, type: ["Monster", "grass"] },
    { name: "Charmeleon", height: 1.1, type: ["Monster", "Dragon"] },
    { name: "Squirtle", height: 0.5, type: ["water"] },
    { name: "Metapod", height: 0.7, type: ["bug"] },
    { name: "Rattata", height: 0.3, type: ["field"] },
  ];
  function showDetails(pokemon){
   console.log()
  }; 
  

  function addListItem(pokemon) {
    let element = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    element.appendChild(listItem);
    button.addEventListener('click', showDetails);
  };


  
  return {
    getAll: function () {
      return pokemonList;
    },
    add: function (item) {
      pokemonList.push(item);
    },
    addListItem,
  };
})();

console.log(pokemonRepository.getAll());
console.log(
  pokemonRepository.add({ name: "Rattata 2", height: 0.3, type: ["field"] })
);

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

