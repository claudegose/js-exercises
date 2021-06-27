
var fruits = ["pomme", "poire", "fraise", "tomate", "orange", "mandarine", "durian", "pêche", "raisin", "cerise"];




document.getElementById("run").addEventListener("click", () => {
    fruits.shift();  // Shift Removes First variable in array
    fruits.pop();     // Pop removes the last item in an array
    fruits.unshift("banana");  // Adds Banana as first variable in Array
    fruits.push("kiwi");  // Adds Kiwi as the last variable in an array
    console.log(fruits)

})






