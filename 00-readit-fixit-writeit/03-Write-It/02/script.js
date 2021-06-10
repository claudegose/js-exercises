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


const wrapWithTag = (content, tagname) => {
    return `<${tagname}>${content}</${tagname}>`;
}

const parseTitle = title => {
    const lowerTitle = title.toLowerCase();
    const wrapped = wrapWithTag(lowerTitle, `ol`);
    document.write(wrapped);
};

document.write(`<ul>`);
movie.forEach(movie => parseTitle(movie));
document.write(`</ul>`);




document.write('</ul>')





