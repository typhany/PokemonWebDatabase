const P = new Pokedex.Pokedex();

async function getAllPokemons(){
	//returns a promise that contains results (list of pokemon names & ids)
    
    const response = await P.getGenerationByName("generation-i");
    console.log(response);

    let ordered_response = response.pokemon_species.sort((a,b) => (
    	Number(a.url.split("/")[6]) > Number(b.url.split("/")[6])) ? 1 : -1);

    console.log(ordered_response);
    //return ordered_response;

    // for(var i in response.pokemon_species){
    //     if(response.pokemon_species[i].name){
    //         getPokemonData(response.pokemon_species[i].name);
    //     }    
    // }

    for (var i in ordered_response){
    	if (ordered_response[i].name)
    	{
    		console.log(ordered_response[i].name)
    		getPokemonData(ordered_response[i].name);

    	}
    }
}


async function getPokemonData(pokemon_species)
{
	//pokemon_data = [];
	const response = await P.getPokemonByName(pokemon_species);

	var pokemon_id = "#" + response.id;
	var pokemon_name = response.name;
	var pokemon_sprite = "<img src = " + response.sprites.front_default + " alt = " + response.name + " ></img>";

	$("#pokemon_table").append("<tr><td>" + pokemon_sprite + "<br>" + pokemon_id + "<br>" + pokemon_name +"</td></tr>");
}


$(document).ready(function() {
	getAllPokemons();
	
});


// const P = new Pokedex.Pokedex();

// async function getAllPokemons(){
// 	//returns a promise that contains results (list of pokemon names & ids)
//     var all_pokemon = [];
//     const response = await P.getGenerationByName("generation-i");

//     for(var i in response.pokemon_species){
//         if(response.pokemon_species[i].name){
//             all_pokemon.push(response.pokemon_species[i].name);
//         }
        
//     }
 
//     return all_pokemon;

// }

// function createPokemonTableCells(pokemon_list){
// 	//extracts promise results (list of pokemon names and ids) and saves in a dictionary


// 	pokemon_list.then(function(result) {
// 		for (var i in result) {
// 			//console.log(result[i]);
// 			//gen_one_pokemon.push(result[i]);
// 			P.getPokemonByName(result[i]).then(response => {
				
// 				//console.log(response.id, response.name);

				

// 			//var image = "<img src = " + response.sprites.front_default + " alt = " + response.name+  "></img><br>";
// 			$("#pokemon_table").append("<tr><td>" + response.name + "</td></tr>");
// 			//$("#pokemon_table").after( "<tr><td>" + "<a href = 'pokemon_page.html'>" + 
//             //"<button onclick = 'accessPokemonPage(' " + response.id + " );' " +
//              //" id = " + response.id + " value = " +response.name + ">" + image +"</button><br></a>"+ response.name + " #" + response.id + " </td></tr>");

// 			})

			
// 		}
		
// 	})
// }


// $(document).ready(function() {
// 	var pokemon_list = getAllPokemons();
// 	createPokemonTableCells(pokemon_list);
	

// });