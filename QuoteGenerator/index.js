let quotes = [];

async function newQuote() {
  let quote = "";
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  $(".quote-text").text(quote["text"]);
  $(".quote-author").text(quote["author"]);
}

async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    let quote = "";
    const resp = await fetch(apiURL);
    quotes = await resp.json();
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);
    $(".quote-text").text(quote["text"]);
    $(".quote-author").text(quote["author"]);
  } catch (error) {}
}
$("#new-quote-btn").on("click", newQuote);
getQuotes();
