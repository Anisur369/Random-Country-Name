const fs = require('fs');

const quotes = {};

quotes.allQuotes = () => {
  const fileContents = fs.readFileSync(__dirname + '/data/quotes.json', 'utf8');
  const arrayOfQuotes = JSON.parse(fileContents);
  return arrayOfQuotes;
};

module.exports = quotes;

