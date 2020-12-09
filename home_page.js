

function getAllPokemon(){
	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then(response => response.json())
		.then(function(pokemon_list) {
            console.log(pokemon_list.results);
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