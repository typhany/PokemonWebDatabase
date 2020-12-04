const P = new Pokedex.Pokedex();
var all_pokemon = [];

async function getAllPokemons2(){
    var all_pokemon = [];



    const response = await P.getGenerationByName("generation-i");


    for(var i in response.pokemon_species){
        if(response.pokemon_species[i].name){
            all_pokemon.push(response.pokemon_species[i].name);
        }
        
    }
    //console.log(all_pokemon);
    return all_pokemon;

}

function createPokemonTableCells(pokemon_list){
	console.log(pokemon_list);

	pokemon_list.then(function(result) {
		for (var i in result) {
			console.log(result[i]);

			P.getPokemonByName(result[i]).then(response => {
				
				console.log(response.id, response.name);


			// var image = "<img src = " + response.sprites.front_default + " alt = " + response.name+  "></img><br>";
			// //$("#pokemon_table").append("<tr><td>" + result[i] + "</td></tr>");
			// $("#pokemon_table").after( "<tr><td>" + "<a href = 'pokemon_page.html'>" + 
   //          "<button onclick = 'accessPokemonPage(' " + response.id + " );' " +
   //           " id = " + response.id + " value = " +response.name + ">" + image +"</button><br></a>"+ response.name + " #" + response.id + " </td></tr>");
			})
		}
	})
	// console.log(all_pokemon[0]);
	// for (var i = 0; i < all_pokemon.length; i++) {
	// 	console.log(all_pokemon[i]);
	// }
}


// function getAllPokemons(){
    
//     var pokemon_list = [];
//     P.getGenerationByName("generation-i").then(response =>{
//         for(var i in response.pokemon_species){
//             pokemon_list.push(response.pokemon_species[i].name);
//         }
// 	})
// 	pokemon_list = all_pokemon;
// }


            //create buttons for each
            //var pokemon_name = response.pokemon_species

            //("#pokemon_table").append("<tr><td>" + response.pokemon_species[i].name + "</td><td>" + "</td></tr>");$
        //}
        //return all_pokemon;

       // return pokemon_list;

       //all_pokemon = response.pokemon_species.map(pokemon_name => pokemon_name.name);

   

    //all_pokemon = pokemon_list;
    //return all_pokemon;
// }


// 	// for (let i = 0; i < all_pokemon.length; i++)
// 	// {
// 	// 	//console.log(all_pokemon[i]);
// 	// 	P.getPokemonByName(i).then(response => {
// 	// 		console.log(response);
// 	// 		$("#pokemon_table").append("<tr><td>" + response[i].name + "</td><td>" + "</td></tr>");
        
// 	// 	})

		 
// 	// }

// }
















$(document).ready(function() {
	var pokemon_list = getAllPokemons2();
	createPokemonTableCells(pokemon_list);
	// getAllPokemons();
	// console.log(all_pokemon);
	// createPokemonTableCells();
	// console.log(getAllPokemons2());
	// console.log(all_pokemon);
	
});