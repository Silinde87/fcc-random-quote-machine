//Getting List of Quotes JSON from url
const urlQuotes = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const colors = [
    '#16a085', '#27ae60', '#2c3e50',
    '#f39c12', '#e74c3c', '#9b59b6',
    '#FB6964', '#342224', '#472E32',
    '#BDBB99', '#77B1A9', '#73A857'
  ];

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
    let currentQuote = quotesList.quotes[index].quote;
    let currentAuthor = quotesList.quotes[index].author;
    
    //Fade-in-out text and author
    $('#text,#author').animate({ opacity: 0 }, 400, function () {
        $(this).animate({ opacity: 1 }, 400);
        
        //Showing quote at p #text
        let quote = document.querySelector('#text');
        quote.innerHTML = '<i class="fa fa-quote-left"></i> ' + currentQuote;
        
        //Showing author at p #author
        let author = document.querySelector('#author');
        author.innerHTML = '- ' + currentAuthor;
    });

    //Tweet feature
    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );

    //Background color randomize
    let color = Math.floor(Math.random() * colors.length);
    $(':root').css("--main-color", colors[color]);
}

$(document).ready(newQuote());