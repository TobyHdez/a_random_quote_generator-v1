/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * 
 * This array will consist of quote objects inside the array.
***/

let quotes = [];

quotes = [{
  quote: "A man's mind, stretched by new ideas, may never return to its original dimensions.",
  source:"Oliver Wendell Holmes Jr.",
  citation:"",
  year:''
},
{
  quote: "He who opens a school door, closes a prison.",
  source:"Victor Hugo",
  citation:"",
  year:''
},
{
  quote: "The only person who is educated is the one who has learned how to learn …and change.",
  source:"Carl Rogers",
  citation:"",
  year:''
},
{
  quote: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.’",
  source:"Einstein, Albert",
  citation:"Alice Calaprice, The Ultimate Quotable Einstein, p. 100]",
  year:'2011'
},
{
  quote: `Keep away from people who try to belittle your ambitions. 
  Small people always do that, but the really great make you feel that you, too, can become great.`,
  source:"",
  citation:`Mark Twain at Your Fingertips”, Edited by Caroline Thomas Harnsberger, 
  Quote Page 354, Cloud, Inc., Beechhurst Press, Inc., New York. (Verified on paper) `,
  year:'1948'
}
];

/***
 * `getRandomQuote` function
 * 
 * This function creates a random number, and use that random number to return a random 
 * quote object from the quotes array.  
 * 
 * This function accepts one parameter, an array with objects, and returns a random 
 * selection from that list of objects.
***/

function getRandomQuote (arr) {

let random_pick;
random_pick = Math.floor(Math.random() * arr.length) + 1; //get the random number

return quotes[random_pick];
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);