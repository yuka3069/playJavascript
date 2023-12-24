let quotes = [];

async function newQuote() {
  loading();
  let quote = "";
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  $(".quote-text").text(quote["text"]);
  $(".quote-author").text(quote["author"]);
  complete();
}

async function getQuotes() {
  loading();
  const apiURL = "https://type.fit/api/quotes";
  try {
    let quote = "";
    const resp = await fetch(apiURL);
    quotes = await resp.json();
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    $(".quote-text").text(quote["text"]);
    $(".quote-author").text(quote["author"]);
    complete();
  } catch (error) {}
}

function loading() {
  $(".quote-container").hide();
  $(".loader").show();
}
function complete() {
  $(".quote-container").show();
  $(".loader").hide();
}

getQuotes();
$("#new-quote-btn").on("click", newQuote);
