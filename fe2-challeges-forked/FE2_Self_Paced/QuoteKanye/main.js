function fetchQuote() {
  let getData = fetch("https://api.kanye.rest/")
    .then((res) => {
      return res.json();
    })
    // .then((res) => addQuoteToDOM(res))
    .catch((error) => {
      throw new Error(error);
    });
  return getData;
}

function quoteKanye() {
  fetchQuote()
    .then((res) => addQuoteToDOM(res))
    .catch((error) => {
      throw new Error(error);
    });
}
quoteKanye();

// fetchQuote();

function addQuoteToDOM(data) {
  console.log(data);
  let root = document.getElementById("root");
  let saying = document.createElement("h2");
  saying.innerText = "Once Kanye Said";
  let quote = document.createElement("p");
  quote.textContent = data.quote;
  root.append(saying, quote);
}
