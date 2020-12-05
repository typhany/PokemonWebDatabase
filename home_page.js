// const P = new Pokedex.Pokedex();

// async function getAllPokemons(){
	
//     var interval = {offset: 0, limit: 151};
//     const response = await P.getPokemonsList(interval);
//     console.log(response);
//     for(var i in response.results){
//         createPokemonTableCells(response.results[i].name);
//     }

// }

// async function createPokemonTableCells(pokemon){

// 	const response = await P.getPokemonByName(pokemon);
// 	var pokemon_name = response.name;
// 	var pokemon_img = response.sprites.front_default;
// 	var pokemon_id = response.id;

// 	$("#pokemon_table").append("<tr><td>" + 
// 	                        "<img src = " + pokemon_img + " alt = " + pokemon_name +  "></img><br>" +
// 	                        "#" + pokemon_id + " " + pokemon_name + "</td></tr>");


// }


// $(document).ready(function() {

// 	getAllPokemons();

// });


function getAllPokemon(){
	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then(response => response.json())
		.then(function(pokemon_list) {
			for (var i in pokemon_list.results)
			{
				getPokemonData(pokemon_list.results[i]);
			}
		})
}

function getPokemonData(pokemon){
	fetch(pokemon.url)
		.then(response => response.json())
		.then(function(pokemon_info) {
			var pokemon_id = pokemon_info.id;
			var pokemon_name = pokemon_info.name;
			var pokemon_sprite = pokemon_info.sprites.front_default;

			$("#pokemon_table").append("<button>" + //add function to get to pokmeon_page.html laters
				                        "<img src = " + pokemon_sprite + " alt = " + pokemon_name +  "></img><br>" +
				                        "#" + pokemon_id + " " + pokemon_name + "</button>");


		
		})
}

$(document).ready(function() {
	getAllPokemon();
});
