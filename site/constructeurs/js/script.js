// Function constructors
function Circle (radius) {
  this.radius = radius;
}

//La fonction proto Circle est iplémentée à l'extérieur du constructeur pour éviter les consommation de ressources inutiles s'il y avait  une réaffectation à chaque création d'instance
Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10); //Comme en Java, le mot clef new appelle le constructeur qui se présent comme une fonction (ligne 2)
//Ne pas confondre avec var myCircle = new Object ;
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);





