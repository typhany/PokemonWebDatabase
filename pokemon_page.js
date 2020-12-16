//to add perhaps if we're ambitious: evolution chain

var pokemon = '';

function getPokemonDetails(pokemon_name) {
	if (pokemon_name) {
		fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_name)
		.then(response => response.json())
		.then(function(pokemon_details) {
			var name = pokemon_details.name;
			var id = pokemon_details.id;
			var weight = (pokemon_details.weight * 0.220462).toFixed(1); //hectograms to lbs
			var height = (pokemon_details.height * 0.328084).toFixed(1); //decimeters to ft
			var image = pokemon_details.sprites.front_default;

			var type = pokemon_details.types; //returns an array of types
			var species = pokemon_details.species; //returns an array of species
			var abilities = pokemon_details.abilities; //returns array of abilities
			var moves = pokemon_details.moves; //returns array of moves		
			var stats = pokemon_details.stats; //returns array of stats

			//pokemon name, id, weight, height
			$("#poke_description").append("<h2> NAME: " + name + "</h2>");
			$("#poke_description").append("<h3> ID: " + id + "</h3>");
			$("#poke_description").append("<p> SPECIES:" + species.name + "</p>");
			$("#poke_description").append("<p> WEIGHT: " + weight + " LBS</p>");
			$("#poke_description").append("<p> HEIGHT: " + height + " FT</p>");

			//types
			$("#poke_description").append("<h3> TYPES: </h3>");
			for (var i in type) 
			{
				$("#poke_description").append("<p> >" + type[i].type.name + "</p>");
			}

			//species		
			$("#poke_description").append("<h3> ABILITIES: </h3>");
			for (var i in abilities) 
			{
				$("#poke_description").append("<p> >" + abilities[i].ability.name + "</p>");
			}

			//stats
			$("#poke_description").append("<h3> STATS: </h3");
			for (var i in stats)
			{
				$("#poke_description").append("<p> >" + stats[i].stat.name + "</p>");
			}

			//moves
			$("#moves_list").append("<h3> MOVES: </h3>");
			for (var i in moves) 
			{
				$("#moves_list").append("<p> >" + moves[i].move.name + "</p>");
			}

			//pokemon image
			$("#poke_pic").append("<img src=" + image + " src=" + name + "/>");
		});

	}

}


$(document).ready(function(){
	// Found by Ashley: https://www.w3schools.com/html/html5_webstorage.asp
    pokemon = localStorage.getItem(localStorage.key(0));
    localStorage.clear();
    getPokemonDetails(pokemon);
});