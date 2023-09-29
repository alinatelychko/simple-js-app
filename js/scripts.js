let pokemonList = [
{name: 'Bulbasar', 
 height: 0.7, 
 type: ['Monster','grass']},
{name: 'Charmeleon', 
 height: 1.1,
 type: ['Monster','Dragon']},
{name: 'Squirtle',
 height: 0.5, 
type: ['water']},
{name: 'Metapod', 
height: 0.7, 
type: ['bug']},
{name: 'Rattata', 
height: 0.3, 
type: ['field']}
];


for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1)
   {document.write(pokemonList[i].name + "  " + "(height:"+ "  " +  pokemonList[i].height + " ) " + "- Wow. That\'s big!"+ "<br>"); //condition for pokemon with the height > 1 
} else {
document.write(pokemonList[i].name + "  " + "(height:"+ "  " +  pokemonList[i].height + " ) " + "<br>");}
}