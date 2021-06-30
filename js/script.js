/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
 * 
 * This array will consist of quote objects inside the array.  It is our data portion.
***/

let quotes = [];

quotes = [{
  quote: "A man's mind, stretched by new ideas, may never return to its original dimensions.",
  source:"Oliver Wendell Holmes Jr.",
  citation:"",
  year:'',
  tag:'education'
},
{
  quote: "He who opens a school door, closes a prison.",
  source:"Victor Hugo",
  citation:"",
  year:'',
  tag:'education'
},
{
  quote: "The only person who is educated is the one who has learned how to learn …and change.",
  source:"Carl Rogers",
  citation:"",
  year:'',
  tag:'education'
},
{
  quote: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.’",
  source:"Einstein, Albert",
  citation:"Alice Calaprice, The Ultimate Quotable Einstein, p. 100",
  year:'2011',
  tag:'education'
},
{
  quote: `Keep away from people who try to belittle your ambitions. 
  Small people always do that, but the really great make you feel that you, too, can become great.`,
  source:"",
  citation:`Mark Twain at Your Fingertips”, Edited by Caroline Thomas Harnsberger, 
  Quote Page 354, Cloud, Inc., Beechhurst Press, Inc., New York. (Verified on paper) `,
  year:'1948',
  tag:'education'
}
];

/***
 * `getRandomQuote` function
 * 
 * This function creates a random number, and uses that random number to index a random 
 * quote object from the quotes array.  
 * 
***/

function getRandomQuote () {

  let random_pick;
  random_pick = Math.floor(Math.random() * quotes.length) + 1; //get the random number

return quotes[random_pick];   //apply random number as index and return the random object
}

/***
 * `printQuote` function
 * 
 * The function displays the new quote each time the user clicks the "Show another quote" button.
***/

/***
 * `random_bg_color` function
 * 
 * The function gives me a random color to insert into the page after new quote
 * 
 * Code taken from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
***/

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
return bgColor;
}

function printQuote()  {
  
  let newQuote = getRandomQuote();
  let html = `<p class="quote"> ${newQuote['quote']} </p> 
              <p class="quote"> ${newQuote['source']}`;
  
  if (newQuote['citation'])  {                                         //if citation exists
    html += `<span class="citation"> ${newQuote['citation']} </span>`
  }
  if (newQuote['date'])  {                                             //if date exists
    html += `<span class="date"> ${newQuote['date']} </span>` 
  }
  if (newQuote['tag'])  {                                         //tagged
    html += `<span class="tag"> tag> ${newQuote['tag']} </span>`
  }
  html += `</p>`;
  
  document.body.style.background = random_bg_color();
  return document.getElementById('quote-box').innerHTML = html;   //sends final html code to page
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);

setInterval(printQuote, 4000);  //will automatically generate a new quote every 4? seconds
