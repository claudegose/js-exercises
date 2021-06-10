const movie = [
    `The Godfather`,
    `The Shawshank Redemption`,
    `Schindler's List`,
    `Raging Bull`,
    `Casablanca`,
    `Citizen Kane`,
    `Gone with the Wind`,
    `The Wizard of Oz`,
    `One Flew Over the Cuckoo's Nest`,
    `Lawrence of Arabia`,
];


document.write (`<ul>`);
for (let i = 0; i < movie.length; i++){
    document.write(`<li> ${movie[i]} </li>`);
}



document.write(`</ul>`)


