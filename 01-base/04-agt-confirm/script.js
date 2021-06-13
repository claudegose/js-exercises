/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// Ask User input
let a = prompt("What is your name?", "");
let b = prompt("What town do you live in?", "")
let c = prompt("What is your Gender?", "")

// Ask for Confirmation
let infoCorrect = confirm(`Your name is ${a}, you live in ${b} and you are a ${c}`)
if (infoCorrect === false) {
    let a = prompt("What is your name?", "");
    let b = prompt("What town do you live in?", "")
    let c = prompt("What is your Gender?", "");
    infoCorrect = confirm("Is the info correct?");
}
