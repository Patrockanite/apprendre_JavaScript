/* Ceci est à éviter : */
// var nom = "Patrock";
// function direBonjour(){
//     console.log("Bonjour "+nom);
// }

/*Ceci est à préférer */

var Patrock_OK = {};
Patrock_OK.nom = "Patrock";
Patrock_OK.direBonjour = function(){
    console.log("Bonjour "+Patrock_OK.nom);
}