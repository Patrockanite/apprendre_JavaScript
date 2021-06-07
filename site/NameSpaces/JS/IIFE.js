/* Immediately Invoked Function Expression */
var b = function(){
    console.log("Je ne suis pas une fonction invoquée immediately");
}
b();
/*************************** c *********************************/
var c = function(){
    console.log("Moi, c, Je suis une fonction invoquée par les () derrière l'accolade");
}();

/**************************** d ********************************/
var d = (function(){
    console.log("d, déclaré comme un objet(), Je suis invoquée par les () derrière l'accolade");
})();

/************************** IIFE ****************************/
(function(){
    console.log("Le var = c ne sert plus a rien si je suis utilisée une seule fois et je peux être invoquée immediatly, Je ne suis donc une IIFE");
})();

/***************************** Encapusler son code **** Un Fake NameSpaces ************************* */

/* encapusler le code dans une fonction permet de créer un contexte d'execution hors du global scope et surtout d'y implémenter tout ce qui concerne un objet.
Mais ceci a un incovéniant les méthodes ou attributs sont inconnus hors du contexte propre */
/*On peut parer à ce problème en passant l'objet global window en argument et en déclarant un objet qui sera une propriété de window (window.toto = Mon_objet;) ainsi, toto de mon objet pointera vers Mon_objet.*/ 

(function(window) {
 
    var Mon_objet = {}; // On crée l'objet 

    Mon_objet.dreamOn = function () { // On crée un objet dreamOn qui est une fonction
    console.log("I want to see the global scope! Let me out!");
    console.log("Je veux voir la global scope ! Laissez-moi sortir !");
    };

    window.toto = Mon_objet; // On passe mon objet par référence à toto (créer un objet qui pointe au même espace mémoire)
    

  })(window); // On passe window en argument lors de l'appel invoqué par les parenthèses

toto.dreamOn(); //sous entendu window.toto.dreamOn()