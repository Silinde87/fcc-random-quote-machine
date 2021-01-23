//Getting List of Quotes JSON from url
const urlQuotes = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
//Storing it
var quotesList = JSON.parse(Get(urlQuotes));

//This function returns a random number between 0 and parameter-1
function randomNumber(max){
    return Math.floor(Math.random() * max);
}

//This function gets a random quote and prints it at html
function newQuote(){
    let index = randomNumber(quotesList.quotes.length);
    let quote = document.querySelector('#text');    
    quote.innerHTML = '<i class="fa fa-quote-left"></i> ' + quotesList.quotes[index].quote;
    let author = document.querySelector('#author');
    author.innerHTML = '- ' + quotesList.quotes[index].author;
    return;
}
