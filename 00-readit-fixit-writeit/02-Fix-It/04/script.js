const movies = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];


const wrapWithTag = (content, tagname) => {
 return `<${tagname}>${content}</${tagname}>`;
};

const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};

document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
