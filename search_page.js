
const P = new Pokedex.Pokedex();


function findPokemon(){
    
    $('#results tr').remove();
    $('#error').empty();


        P.getPokemonByName($('#searchpokemon').val()).then(response =>{
            console.log(response);
            var image = "<img src = " + response.sprites.front_default + " alt = " + response.name+  "></img><br>"
            $('#results tbody').after( "<tr><td>" + image + response.name + " #" + response.id + " </td></tr>");
        })
    
        .catch( (err) =>{
            $('#error').text( "Incorrect Search, Try Again");
        });

   
}


function getAllPokemons(){
    var all_pokemon = [];
    P.getGenerationByName("generation-i").then(response =>{
        console.log(response.pokemon_species);
        for(var i in response.pokemon_species){
            all_pokemon.push(new Pokemon(response.pokemon_species[i].name));
        }
        
        console.log(all_pokemon);
        
    })
    console.log(all_pokemon);
}







// $(document).ready(function() {
//     // const options = {
//     //     protocol: "https",
//     //     cache: true,
//     //     timeout: 5 * 1000, // 5s
//     //     cacheImages: true
//     //   }
//     // const P = new Pokedex.Pokedex();
//     getAllPokemons();


// });