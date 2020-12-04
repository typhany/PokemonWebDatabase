
const P = new Pokedex.Pokedex();
// var all_pokemon = [];
var current_pokemon = null;


function findPokemon(){
    
    $('#results tr').remove();
    // $('#pokemon_buttons').remove();
    $('#error').empty();


        P.getPokemonByName($('#searchpokemon').val()).then(response =>{
            console.log(response);

            
            var image = "<img src = " + response.sprites.front_default + " alt = " + response.name+  "></img>";
            $('#results tbody').after( "<tr class = 'pokemon'><td>" + "<a href = 'pokemon_page.html'>" + 
            "<button onclick = 'accessPokemonPage(' " + response.id + " );' " +
             " id = " + response.id + " value = " +response.name + ">" + image +"</button><br></a>"+ response.name + " #" + response.id + " </td></tr>");

        })
    
        .catch( (err) =>{
            $('#error').text( "Incorrect Search, Try Again");
        });

   
}

function accessPokemonPage(id){
    var current_pokemon = document.getElementById(id).value;
}


async function getAllPokemons(){
    var all_pokemon = [];
    // P.getGenerationByName("generation-i").then(response =>{
    //     console.log(response.pokemon_species);
    //     for(var i in response.pokemon_species){
    //         if(response.pokemon_species[i].name){
    //             all_pokemon.push(response.pokemon_species[i].name);
    //         }
            
    //     }
        
    //     console.log(all_pokemon);
    //     // return all_pokemon;
        
    // })
    // console.log(all_pokemon);


    const response = await P.getGenerationByName("generation-i");


    for(var i in response.pokemon_species){
        if(response.pokemon_species[i].name){
            all_pokemon.push(response.pokemon_species[i].name);
        }
        
    }
    // console.log(all_pokemon);

    return all_pokemon;



    // const golduck = await P.getPokemonByName("golduck");
    // all_pokemon.push(golduck);
    // console.log(all_pokemon);
}







$(document).ready(function() {
    // const options = {
    //     protocol: "https",
    //     cache: true,
    //     timeout: 5 * 1000, // 5s
    //     cacheImages: true
    //   }
    // const P = new Pokedex.Pokedex();
    console.log(getAllPokemons());
    // console.log( all_pokemon);


});