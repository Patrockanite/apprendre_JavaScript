// Closures
function faireMultiplication(facteur){
    function b(){ //Si il n'y a pas de variable facteur passé directement en argument de son environnement propre (lexical interne), la fonction va chercher dans son lexical externe ici : faireMultiplication et va récupérer facteur (c'est le fonctionnement de Javascript)
        console.log("Le facteur a est : "+facteur);
    }
    b();
    return(
        function(x){ //anonyme
            console.log("valeur de x : "+x);
            return facteur * x; // facteur est trouvé ici car le moteur conserve le lexical externe pour executer cette fonction même si faireMultiplication n'est plus dans la pile d'execution.
        }
    );
}
var doubler = faireMultiplication(2); // ici doubler va représenter la fonction (//anonyme) puisque le return renvoie cette fonction et que c'est doubler qui appelle ce return
// en invoquant la fonction faireMultiplication
console.log("son double = "+doubler(10));
console.log("son double = "+doubler(30));