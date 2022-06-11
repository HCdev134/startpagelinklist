// export? 

const quotes = [ "Hello Hello@Some Loser"];



// Original Page State

let rnum = Math.floor(Math.random() * quotes.length);
let startQuote = quotes[rnum];
let splitQuote = startQuote.split("@");
let finalQuote = splitQuote[0];
let finalAuthor = splitQuote[1];

document.getElementById('quote').innerHTML = finalQuote;
document.getElementById('author').innerHTML = finalAuthor;



let changeQuoteBtn = document.getElementById("changequote-btn");
let quoteSetTwoBtn = document.getElementById("quoteset-two-btn");

changeQuoteBtn.onclick = function(){
console.log("clicked btn")
     const quotes_arr = [ "Cringe Quotes are Okay if you Program Them Yourself @George Washington", "What i hate most in this life is a long night where no1 gives af yyyyyyyyyy@--HC the most awesome fren ", "I guess For Now we can add new ones everyday@HC","Hello World@Another Tutorial", "This used to be a stratpage tempalate@~Developer of site",  "i don't know@~doesnt matter",  "some things can be true sometimes.@~Iguess", "Evolution brings human beings. Human beings, through a long and painful process, bring humanity.@~Myspace.com", "The essence of honor lay in the moment of combat between equals.@~Dan Simmons", "Cliche Quotes Suck.@Albert Einstein"];
     console.log(quotes_arr); 

     let numrand = Math.floor(Math.random() * quotes_arr.length); 
    
     let beginQuote = quotes_arr[numrand];
     let seperatedQuote = beginQuote.split("@");
     let resultQuote = seperatedQuote[0];
     let resultAuthor = seperatedQuote[1];
     console.log(`Random Number index is ${numrand}`);

    

     document.getElementById("quote").innerHTML = resultQuote; 
     document.getElementById("author").innerHTML = resultAuthor;

}
quoteSetTwoBtn.onclick = function(){
    
    // document.getElementById("quote").innerHTML = ""; 
    // document.getElementById("author").innerHTML = "";
    const quotes_arr_two = [ "stuff ok @George Washington", "What i hate most in this life doesnt y@fren", "I guess For Now we can add new ones everyday@HC","Computer Is ok@I guess", "Very nice things i love that i tell what ya what@wesome person a", "and another thing is that@wesome person a", "and once again never and always never never i guess@wesome person a", "Cliche Quotes Suck.@Albert Einstein", "speaking english words@hcs' wesome person a", "i cant believe they did elsa like that in frozen@Very Esoteric Source"];
    console.log(quotes_arr_two); 

    let numrand_two = Math.floor(Math.random() * 10) + 1;
    let beginQuoteTwo = quotes_arr_two[numrand_two];
    let seperatedQuoteTwo = beginQuoteTwo.split("@");
   
    let resultQuoteTwo = seperatedQuoteTwo[0]; 
    let resultAuthorTwo = seperatedQuoteTwo[1]; 


    console.log(`Random Number Index set two is ${numrand_two} : Quotes ${resultAuthorTwo},${resultQuoteTwo}`);

    
    document.getElementById("quote").innerHTML = resultQuoteTwo; 
    document.getElementById("author").innerHTML = resultAuthorTwo;
}

// function fetchNewQuotes(){

// }

