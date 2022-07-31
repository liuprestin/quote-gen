//create a constant for the HTML elements that will be modified 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// how to get the quotes 
// https://type.fit/api/quotes
let apiQuotes = [];

// show a new quote
function newQuote(){
    let index = Math.floor(Math.random() * apiQuotes.length)
    const quote = apiQuotes[index];
    console.log(quote);
    
    //make sure that there is an attributed author
    if (quote.author != null) {
        authorText.textContent = quote.author;
    } else {
        authorText.textContent = "Unknown";
    }

    quoteText.textContent = quote.text;
    //Checking quote length and adjust font size if necessary
    //see style.css to tweak .long-quote
    if (quote.text.length > 50){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
}

// show a new quote from local storage
function clientQuote(){
    let index = Math.floor(Math.random() * localQuotes.length);
    //where localQuotes is loaded from index.html
    const quote = localQuotes[index];
    console.log(quote);
    return quote;
}

// download quotes from remote
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const  response = await fetch(apiUrl);
        apiQuotes = await response.json();
        //console.log(apiQuotes[12]);
        newQuote();
    } catch (err) {
        //handle err info if didn't get a response
    }
}

getQuotes();