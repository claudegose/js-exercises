/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


let a = prompt("What is your Age?", " ");
let b = prompt("What is your Gender?", " ");
let c = prompt("Which town do you live in?", "");


x = confirm(`You are ${a} years old, You are a ${b} and you live in ${c}`);

let isBos = confirm("Yes?")