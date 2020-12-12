
var pokemon = '';


$(document).ready(function(){
    pokemon = localStorage.getItem(localStorage.key(0));
    console.log(localStorage.getItem(localStorage.key(0)));
    localStorage.clear();
    console.log(pokemon);
});
