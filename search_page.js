
const P = new Pokedex.Pokedex();
var all_pokemon = [];
var current_pokemon = null;


function findPokemon(){
    
    $('#results tr').remove();
    // $('#pokemon_buttons').remove();
    $('#error').empty();


        P.getPokemonByName($('#searchpokemon').val()).then(response =>{
            console.log(response);
            
            // var table_row_max = 3;
            // for (let i = 0; i < table_row_max; i++)
            // {
            //     var btn = document.createElement("button");
            //     var image_link = response.sprites.front_default;
            //     var pokemon_name = document.createTextNode(response.name);
            //     console.log(pokemon_name);
            //     var pokemon_id = response.id;

            //     // btn.value = pokemon_name;
            //     // var btn2 = $('<button></button>').text(response.name);

            //     btn.appendChild(pokemon_name);
            //     console.log(btn);
            //     var div = document.getElementById("pokemon_buttons");
            //     console.log(div);
            //     div.innerHTML += btn;
            // }
            
            var image = "<img src = " + response.sprites.front_default + " alt = " + response.name+  "></img><br>";
            //$('.results ').after( "<button type = button>" + image + response.name + " #" + response.id + " </button>");

            $('#results tbody').after( "<tr><td>" + "<a href = 'pokemon_page.html'>" + 
            "<button onclick = 'accessPokemonPage(' " + response.id + " );' " +
             " id = " + response.id + " value = " +response.name + ">" + image +"</button><br></a>"+ response.name + " #" + response.id + " </td></tr>");
            // var button_val = $('.' + response.name).text();
        
            // var current_pokemon = document.getElementById(response.id).value;
            // console.log(val1);



            // var btn = document.createElement('a');
            // btn.href = "unknown.jpg"//response.sprites.front_default;
            // var spanBtn = document.createElement('span');
            // spanBtn.classList.add("buttonToPokemon");
            // btn.appendChild(spanBtn);
            // btn.insertAdjacentText('beforeend', "pokemon name goes here"); //response.name);
            
            // var buttonLocation = document.getElementById("pokemon_buttons");
            // $('#pokemon_buttons').after(btn);
            // buttonLocation.appendChild(btn);
        })
    
        .catch( (err) =>{
            $('#error').text( "Incorrect Search, Try Again");
        });

   
}

function accessPokemonPage(id){
    var current_pokemon = document.getElementById(id).value;
}


function getAllPokemons(){
    // var all_pokemon = [];
    P.getGenerationByName("generation-i").then(response =>{
        console.log(response.pokemon_species);
        for(var i in response.pokemon_species){
            all_pokemon.push(response.pokemon_species[i].name);
        }
        
        console.log(all_pokemon);
        // return all_pokemon;
        
    })
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
    getAllPokemons();
    console.log(all_pokemon);


});