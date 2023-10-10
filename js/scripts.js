let pokemonRepository = (function(){
let pokemonList = [
  { name: "Bulbasar", height: 0.7, type: ["Monster", "grass"] },
  { name: "Charmeleon", height: 1.1, type: ["Monster", "Dragon"] },
  { name: "Squirtle", height: 0.5, type: ["water"] },
  { name: "Metapod", height: 0.7, type: ["bug"] },
  { name: "Rattata", height: 0.3, type: ["field"] },
];

  return {
    getAll: function(){
      return pokemonList;
    },
    add: function (item) {
        pokemonList.push(item);
  }
} 
})();


console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add({ name: "Rattata 2", height: 0.3, type: ["field"] }));


pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height > 1) {
        document.write(
          pokemon.name +
            "  " + 
            "(height:" +
            "  " +
            pokemon.height +
            " ) " +
            "- Wow. That's big!" +
            "<br>"
        ); //condition for pokemon with the height > 1
      } else {
        document.write(
          pokemon.name +
            "  " +
            "(height:" +
            "  " +
            pokemon.height +
            " ) " +
            "<br>"
        );
      }
    });
