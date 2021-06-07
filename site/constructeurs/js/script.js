// Function constructors
// function Circle (radius) {
//   this.radius = radius;
// }

// //La fonction proto Circle est iplémentée à l'extérieur du constructeur pour éviter les consommation de ressources inutiles s'il y avait  une réaffectation à chaque création d'instance
// Circle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };


// var myCircle = new Circle(10); //Comme en Java, le mot clef new appelle le constructeur qui se présent comme une fonction (ligne 2)
// // Ne pas confondre avec var myCircle = new Object ;
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);


// Mot clef this dans un objet littéral
// var literalCircle = {
//   radius: 10,
//   getArea:function(){
//     console.log(this);
//     var augmenterRadius = function(){
//       this.radius=20;
//       console.log("valeur de radius dans la fonction augmenterRadius: "+this.radius);
//     };
//     augmenterRadius();
//     console.log("valeur de radius hors de la fonction augmenterRadius : "+this.radius);
//   return Math.PI * Math.pow(this.radius,2);
//   }
// };
// console.log(literalCircle.getArea());
// console.log(this); // On trouve radius dans l'objet global Window
// console.log("valeur de radius ici dans litteralCircle : "+literalCircle.radius);
// console.log("valeur de radius ici dans window.radius : "+this.radius);

// Utiliser Self pour contourner le problème
var literalAutreCercle = {
  rayon: 30,
  getPerimetre:function(){
    var toto = this; // self prend la valeur de this mais reste une variable (attribut) et pourra être utilisée comme telle
    var determiner_a_Cinq = function(){
      toto.rayon = 5;
    };
    determiner_a_Cinq();
    console.log(this.rayon);
    return Math.PI*this.rayon*2;

  } 
};
console.log(literalAutreCercle.getPerimetre());
//console.log(this.rayon); this.rayon n'existe pas
console.log(literalAutreCercle.rayon);