// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}
multiply.version = "v.1.0.0";// Comme une foction est un objet, on peut lui ajouter des attributs aussi simplement qu'à un objet.
console.log(multiply); // renvoie l'objet comme du texte car les objets embarquent la méthode toString() qui a été appelé dynamiquement 
console.log(multiply.toString()); // le résultat est le même
console.log(multiply(6,3));
console.log(multiply.version);



// // Function factory
// function makeMultiplier(multiplier) {
//    var myFunc = function (x) {
//      return multiplier * x;
//    };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));



// // Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);










