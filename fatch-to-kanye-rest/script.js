function fetchQuote() {
  let myFatch = fetch("https://api.kanye.rest/")
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .catch(function (error) {
      console.error("Error fetching quote:", error);
    });

  return myFatch; //myFatch has response form the fatch req
}

function addQuoteToDOM(quote) {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quote;
}

function quoteKanye() {
  fetchQuote()
    .then((data) => {
      if (data && data.quote) {
        addQuoteToDOM(data.quote);
      } else {
        console.error("Invalid quote data:", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

quoteKanye();
