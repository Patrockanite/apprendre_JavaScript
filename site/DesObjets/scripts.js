//Création d'un objet
var compagny = new Object();
compagny.name="Facebook";
console.log(compagny);

//Meilleur méthode : l'objet littéral :

var facebook = {
    name: "Facebook",
    ceo: {
       firstname: "Mark", // on sépara avec des virgules (comma)
        favcolor: "blue"
    },
    "stock of compagny": 110
} ;
console.log(facebook);
console.log("Stock : "+facebook["stock of compagny"]); //ici on utilise les crochets car onj ne peut pas utiliser le point (dat)








/*************** Déclaration d'un objet littéral ************/
// var FreresSoeur = {
//     ainee : "Brigitte" , //attention les séparateurs sont des virgules
//     second : "Patrick" ,
//     troisieme : "Philippe",
//     quatrieme : "Thierry" 
// }; // point virgule à la fin
// document.write("Le troisième s'appelle " + FreresSoeur.troisieme+ "<br />")  ; // première méthode + un saut de ligne
// document.write("Le second s'appelle " + FreresSoeur['second'] + "<br />") ; // seconde méthode
// var premiere = FreresSoeur.ainee ;
// document.write("l'ainée est " + premiere + '<br />') ; //Pas trop d'intérêt
// document.write("Le quatrième est " + FreresSoeur['quatrieme']) ;
// for (var id in FreresSoeur){
//     alert(id +" : "+FreresSoeur[id]) ;
// }