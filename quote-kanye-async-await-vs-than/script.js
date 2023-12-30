// --------------using then---------------
//function fetchQuote() {
//         /**
//          * API - https://api.kanye.rest/
//          * Return a promise from this function using fetch()
//          * The data should be in JSON format
//          * Catch the error, if any.
//          */
//         const jsonDataPromise = fetch("https://api.kanye.rest/")
//           .then((res) => res.json())
//           .catch((err) => new Error(err));
//         return jsonDataPromise;
//       }

//       function addQuoteToDOM(quote) {
//         const quotePara = document.getElementById("quote");
//         quotePara.textContent = `"${quote}"`;
//       }

//  function quoteKanye() {
//         /**
//          * Use fetchQuote and addQuoteToDOM() function
//          * To display the quote on the Page.
//          */
//         fetchQuote().then((jsonData) => {
//           let quote = jsonData.quote;
//           addQuoteToDOM(quote);
//         });
//       }

//       quoteKanye();

//---------------Solution using async/await------------------
async function fetchQuote() {
  /**
   * API - https://api.kanye.rest/
   * Return a promise from this function using fetch()
   * The data should be in JSON format
   * Catch the error, if any.
   */
  let res = await fetch("https://api.kanye.rest/");
  let data = await res.json();
  return data;
}

function addQuoteToDOM(quote) {
  const quotePara = document.getElementById("quote");
  quotePara.textContent = `"${quote}"`;
}

async function quoteKanye() {
  /**
   * Use fetchQuote and addQuoteToDOM() function
   * To display the quote on the Page.
   */
  let { quote } = await fetchQuote();
  addQuoteToDOM(quote);
}

quoteKanye();
