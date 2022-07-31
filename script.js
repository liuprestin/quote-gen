// how to get the quotes 
// https://type.fit/api/quotes

let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const  response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);

    } catch (err) {
        //handle err info if didn't get a response
    }
}

getQuotes();