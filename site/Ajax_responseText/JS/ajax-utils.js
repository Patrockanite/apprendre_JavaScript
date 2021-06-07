(function(global){
    //set up namespace for utility
    var ajaxUtils = {};
    /***************** Le code pourrait être simplifié mais il évite la course condition (course de données si plusieurs requêtes sont lancées)
     * dans les mêmes secondes et qui vont se marcher dessus car les requêtes son assychrones **************/ 
    /************** Créer un objet de requête HTTP avec une fonction ****************/
    function getRequestObject(){
        if(window.XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else if(window.ActiveXObject){
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("Ajax n'est pas supporté par ton navigateur !");
            return(null);
        }
    } // fin getRequestObject()

    /************ Créer un méthode attachée à AjaxUtils pour envoyer une requête *************/
    ajaxUtils.sendGetRequest = function(requestUrl, gestionnaireReponse){
        var request = getRequestObject(); //création de l'objet XMLHttpObject
        request.onreadystatechange = function(){
            gererLaReponse(request, gestionnaireReponse);
        };
        request.open("GET",requestUrl,true);

        /***** c'est cette ligne qui fait réellement la demande. au-dessus, il s'agit de paramétrage *******/
        request.send(null) ; // on envoie des arguement qu'en méthode POST
     }; // ; car c'est une expression (fin méthode sendGetRequest)

     /*************** gererLaReponse *********************/
     function gererLaReponse(request, gestionnaireReponse){
         if((request.readyState == 4) && (request.status == 200)){
             gestionnaireReponse(request);
         }
     }

     /************ Exposer l'objet au global scope ***********/
     global.$ajaxUtils = ajaxUtils ;


})(window);

// (function (global) {

//     // Set up a namespace for our utility
//     var ajaxUtils = {};
    
    
//     // Returns an HTTP request object
//     function getRequestObject() {
//       if (global.XMLHttpRequest) {
//         return (new XMLHttpRequest());
//       } 
//       else if (global.ActiveXObject) {
//         // For very old IE browsers (optional)
//         return (new ActiveXObject("Microsoft.XMLHTTP"));
//       } 
//       else {
//         global.alert("Ajax is not supported!");
//         return(null); 
//       }
//     }
    
    
//     // Makes an Ajax GET request to 'requestUrl'
//     ajaxUtils.sendGetRequest = 
//       function(requestUrl, responseHandler) {
//         var request = getRequestObject();
//         request.onreadystatechange = 
//           function() { 
//             handleResponse(request, responseHandler); 
//           };
//         request.open("GET", requestUrl, true);
//         request.send(null); // for POST only
//       };
    
    
//     // Only calls user provided 'responseHandler'
//     // function if response is ready
//     // and not an error
//     function handleResponse(request,
//                             responseHandler) {
//       if ((request.readyState == 4) &&
//          (request.status == 200)) {
//         responseHandler(request);
//       }
//     }
    
    
//     // Expose utility to the global object
//     global.$ajaxUtils = ajaxUtils;
    
    
//     })(window);
    