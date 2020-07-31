console.log('Fetch Joke API');




const url = "https://api.quotable.io/random";

function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; 
    
   })
 .catch(function(err) {
    console.log(err); 
    });
 }

generateQuote() ;
