let allQuotes = document.querySelector(".allQuotes");



function myFunction() {
    while(true) {
      // document bottom
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
  
      // if the user hasn't scrolled far enough (>100px to the end)
      if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
  
      // let's add more data
      quotes.forEach((quot) => {
        let quote = document.createElement("li");
        quote.innerText = quot.quoteText;
        let span = document.createElement("span");
        span.innerText = quot.quoteAuthor;
        quote.append(span);
        allQuotes.append(quote);
    })
    }
  }
window.addEventListener(`scroll`, myFunction);

 