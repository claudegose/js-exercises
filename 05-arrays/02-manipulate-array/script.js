
var fruits = ["pomme", "poire", "fraise", "tomate", "orange", "mandarine", "durian", "pêche", "raisin", "cerise"];


function newClick () {
    fruits.shift();
    fruits.splice(9,1);
    fruits.unshift("banana");
    fruits.push("kiwi");
    console.log(fruits);
}






