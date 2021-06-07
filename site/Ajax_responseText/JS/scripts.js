//Gérer les événements
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Appel au serveur pour récupérer le nom
        $ajaxUtils
          .sendGetRequest("data/contenu.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#contenu")
                .innerHTML = "<h2>Bonjour " + name + " !</h2>";
            });

        
      });
  }
);