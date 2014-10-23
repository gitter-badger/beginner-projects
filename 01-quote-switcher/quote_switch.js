var quotes = [];

// put quotes into the following objects below. the "quote" contains the quote, and cite contains the citation.
quotes.push({"content": "Luck is what happens when preparation meets opportunity.", "cite": "Seneca"});
quotes.push({"content": "Begin at once to live, and count each separate day as a separate life.", "cite": "Seneca"});
quotes.push({"content": "It is a rough road that leads to the heights of greatness.", "cite": "Seneca"});
quotes.push({"content": "Don't cry because it's over, smile because it happened.", "cite": "Dr. Seuss"});
quotes.push({"content": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "cite": "Albert Einstein"});
quotes.push({"content": "If you tell the truth, you don't have to remember anything.", "cite": "Mark Twain"});

var randomQuote = function(){
  var random = Math.floor(Math.random() * quotes.length);
  // picks a random number based on the length of the quote array.
  // var random MUST be local, otherwise random value will be static and not dynamic to the click.
  $('blockquote').text("'" + quotes[random]['content'] + "'"); // sticks the content into the blockquote.
  $('cite').text("- " + quotes[random]['cite']); // sticks the citation into the cite.
};

setInterval(randomQuote, 10000);
