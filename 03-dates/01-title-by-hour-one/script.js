/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 18)
    greet = 'Hello';
else if (hrs >= 18)
    greet = 'Good Afternoon';


document.getElementById('labelChange').innerHTML = greet