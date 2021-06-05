function askHello() {
    fetch("https://mockbin.com/request?greetings=salut") //Revoir l'adresse
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      document
          .getElementById("hello-result")
          .innerText = value.queryString.greetings;
    })
    .catch(function(err) {
        document.write("Erreur !") ;
      // Une erreur est survenue
    });
  }
  
  document
    .getElementById("ask-hello")
    .addEventListener("click", askHello);