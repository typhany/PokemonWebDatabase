

var current_pokemon = null;
var all_pokemon = [];




function findPokemon(){
    $('#error').empty();
    $('#results td').remove();

   
    var counter = 0;
    var pokemon = $('#searchpokemon').val();

    if(  parseInt(pokemon) - 1 in all_pokemon){
        getPokemonByName(all_pokemon[ parseInt(pokemon) - 1]);
        counter += 1;
    }

    for(var i = all_pokemon.length-1; i >=0; i--){
 
        if( all_pokemon[i].name.includes(pokemon)){
            if(counter == 4){
                $('#results tbody').before("<tr></tr>");
            }
            getPokemonByName(all_pokemon[i]);
            
            counter += 1;
        }
        
    }
    if(counter == 0){
        $('#error').text("Incorrect Search, Try Again");
    }
}

function accessPokemonPage(id){
    var current_pokemon = document.getElementById(id).value;
}




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

function getPokemonByName(pokemon){
    
   
   
	fetch(pokemon.url)
		.then(response => response.json())
		.then(function(pokemon_info) {
			var pokemon_id = pokemon_info.id;
			var pokemon_name = pokemon_info.name;
            var pokemon_sprite = pokemon_info.sprites.front_default;
            

            var image = "<img src = " + pokemon_sprite + " alt = " + pokemon_name+  "></img>";

            

            $('#results tr').last().after( "<td><form action = 'pokemon_page.html' >" + 
            "<button type = 'submit' onclick = 'accessPokemonPage(' " + pokemon_id + " );' " +
             " id = " + pokemon_id+ " value = " + pokemon_name + ">" + image + "<br>" +
             "#" + pokemon_id+ " " + pokemon_name+ "</button></form></td>");


     
        })
       
        
}




$(document).ready(function() {
    getAllPokemon();
});