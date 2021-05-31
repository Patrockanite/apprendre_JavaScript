
function sayBonjour(){
    //console.log("Bonjour " + document.getElementById("nom").value);


    // var message = "<h2>Bonjour " + document.getElementById("nom").value + " !</h2>";
    // document.getElementById("content").textContent = message ;

    //On va remplacer textContent par innerHTML qui va permettre d'interpréter le code HTML. Ainsi les balises ne sont plus considérées comme du texte mais comme du code.

    var message = "<h2>Bonjour " + document.getElementById("nom").value + " !</h2>";
    
    document
        .getElementById("content")
        .innerHTML = message; // On peut implémenter sous cette forme qui aurait pu être sur une ligne (attention au point virgule)

        if( document.getElementById("nom").value === "valeur"){
            //var title = document.getElementById("title");

            //On peut remplacer la métode getElementById() qui ne prend que des ID par querySelector() qui prend le sélecteur CSS

            var titre = document.querySelector("#title").textContent ;
            titre += "par valeur ou par référence ?" ;

            document.querySelector("#title").textContent = titre ;
        }
}