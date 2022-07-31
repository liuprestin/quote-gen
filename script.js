// how to get the quotes 
// https://type.fit/api/quotes

let apiQuotes = [];

// show a new quote
function newQuote(){
    let index = Math.floor(Math.random() * apiQuotes.length)
    const quote = apiQuotes[index];
    console.log(quote);
    return quote;
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