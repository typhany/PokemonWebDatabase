// store all pokemons from gen I
var all_pokemon = [];


// searches for the pokemon from the input provided in the text box
function findPokemon(){
    // resets results
    $('#error').empty();
    $('#results').empty();

    var counter = 0;
    var pokemon = $('#searchpokemon').val();
    // if empty input display an incorrect search
    if(pokemon == ''){
        $('#error').text("Incorrect Search, Try Again");
        return;
    }

    // search for pokemon if given a pokemon id
    if(  parseInt(pokemon) - 1 in all_pokemon){
        getPokemonByName(all_pokemon[ parseInt(pokemon) - 1]);
        counter += 1;
    }

    // search for all pokemons that contain a partial matching input
    for(var i in all_pokemon){
        if( all_pokemon[i].name.includes(pokemon)){
            getPokemonByName(all_pokemon[i]);
            counter += 1;
        }
    }

    // if no matching input display an incorrect search
    if(counter == 0){
        $('#error').text("Incorrect Search, Try Again");
    }
}

// store the pokemon to storage to view in pokemon page
function accessPokemonPage(id){
    localStorage.setItem(document.getElementById(id).value, document.getElementById(id).value);    
}



// fetch from Web API to fill in pokemon array with all pokemons from gen I
function getAllPokemon(){
	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then(response => response.json())
		.then(function(pokemon_list) {
			for (var i in pokemon_list.results)
			{
                all_pokemon.push(pokemon_list.results[i]);
			}
        })    
}

// fetch from Web API to get pokemon by name
function getPokemonByName(pokemon){
	fetch(pokemon.url)
		.then(response => response.json())
		.then(function(pokemon_info) {
			var pokemon_id = pokemon_info.id;
			var pokemon_name = pokemon_info.name;
            var pokemon_sprite = pokemon_info.sprites.front_default;
            // create image tag
            var image = "<img src = " + pokemon_sprite + " alt = " + pokemon_name+  "></img>";
            // create pokemon button and the link to navigate to the page with pokemon info.
            $('#results').append( "<a href = 'pokemon_page.html' >" + 
            "<button type = 'submit' onclick = 'accessPokemonPage( " + pokemon_id + " );' " +
             " id = " + pokemon_id+ " value = " + pokemon_name + ">" + image + "<br>" +
             "#" + pokemon_id+ " " + pokemon_name+ "</button></a>");
        })
}



// store data for all pokemon
$(document).ready(function() {
    getAllPokemon();

});