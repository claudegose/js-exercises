
 document.getElementById("run").onclick = () => {
     fetch('http://localhost:63342/js-exercises/_shared/api.json')
         .then(res => res.json)
         .then(data => console.log(data))

 }























 // Single line function


 //Data is the return