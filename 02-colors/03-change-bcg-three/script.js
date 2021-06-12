/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var color = ["#d87cac", "#004f2d", "#8eaf9d", "#b9cdda", "#d7dae5", "#beffc7", "#ec368d", "#9893da", "#bbbdf6", "#d87cac", "#004f2d", "#8eaf9d", "#b9cdda", "#d7dae5", "#beffc7", "#ec368d", "#9893da", "#bbbdf6"];

var i = 0;
document.querySelector("button").addEventListener("click",
    function(){
    i=1 < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
    })