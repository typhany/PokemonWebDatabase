
// fetch from Web API to fill in pokemon array with all pokemons from gen 1
// Found by Tiffany: https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
function getAllPokemon(){
	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then(response => response.json())
		.then(function(pokemon_list) {
			console.log(pokemon_list.results);
			// for each pokemon found fetch that specific pokemon's data
			for (var i in pokemon_list.results)
			{
				getPokemonData(pokemon_list.results[i]);
			}
		})
}


// fetch from Web API to get pokemon by name
// Found by Tiffany: https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
function getPokemonData(pokemon){
	fetch(pokemon.url)
		.then(response => response.json())
		.then(function(pokemon_info) {
			var pokemon_id = pokemon_info.id;
			var pokemon_name = pokemon_info.name;
			var pokemon_sprite = pokemon_info.sprites.front_default;
			// create pokemon button and the link to navigate to the page with pokemon info.
			// Found by Tiffany: https://www.codegrepper.com/code-examples/delphi/how+to+append+image+in+javascript,
			// https://www.digitalocean.com/community/tutorials/css-css-grid-layout-fr-unit,
			// https://freshman.tech/css-grid-calculator/
			$("#pokemon_table").append( "<a href = 'pokemon_page.html' >" + 
				"<button type = 'submit' onclick = 'accessPokemonPage( " + pokemon_id + " );' " +
				" id = " + pokemon_id+ " value = " + pokemon_name + ">" +
				"<img src = " + pokemon_sprite + " alt = " + pokemon_name +  "></img><br>" +
				"#" + pokemon_id + " " + pokemon_name + "</button></a>");

		})
}


// store the pokemon to storage to view in pokemon page
// Found by Ashley: https://www.w3schools.com/html/html5_webstorage.asp
function accessPokemonPage(id){
	localStorage.setItem(document.getElementById(id).value, document.getElementById(id).value);    

}

// fetch all pokemon from the Web API
$(document).ready(function() {
	getAllPokemon();

});