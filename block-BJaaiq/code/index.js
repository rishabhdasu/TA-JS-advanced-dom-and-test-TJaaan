let allQuotes = document.querySelector(".allQuotes");



// function myFunction() {
//     while(true) {
//       // document bottom
//       let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
  
//       // if the user hasn't scrolled far enough (>100px to the end)
//       if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
  
//       // let's add more data
//       quotes.forEach((quot) => {
//         let quote = document.createElement("li");
//         quote.innerText = quot.quoteText;
//         let span = document.createElement("span");
//         span.innerText = quot.quoteAuthor;
//         quote.append(span);
//         allQuotes.append(quote);
//     })
//     }
//   }

let max = 3;
let index = 0;

function addQuotes() {
for(let i = 0; i < max; i++) {
    let quote = document.createElement("li");
    let blockQuote = document.createElement("blockquote");
    blockQuote.innerText = quotes[index].quoteText;
    let cite = document.createElement("cite");
    cite.innerText = quotes[index].quoteAuthor;
    quote.append(blockQuote, cite);

    allQuotes.append(quote);
    index++;
}

}


document.addEventListener(`scroll`, () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
        addQuotes();
    }
});

 window.addEventListener("DOMContentLoaded", () => {
     alert("DOM content loaded");
     addQuotes();
 });