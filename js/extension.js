var extension_render_to = 'extension_js';

// function clue_common_strings() {
//     var puzdata = PUZAPP.puzdata;
//     var letters = [];
//     var clue_lists = [puzdata.across_clues, puzdata.down_clues];
// }


//
// Here is one possible way to write a JavaScript function that takes the first letter of each word in a sentence to form a new word:
//
function acronym(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
  
    // Create an empty array to store the acronym
    const acronym = [];
  
    // Loop through the words and get the first letter of each word
    for (const word of words) {
      acronym.push(word[0]);
    }
  
    // Join the letters in the acronym array and return the result
    return acronym.join("");
  }
  
  // Example usage
  const result = acronym("Significant Eastern City of North Dakota");
  console.log(result); // Output: SECOND
  




  
  //
  // Find similar pairs from a collection of words
  //

  function singleLetterPairs(words) {
    // Create an empty array to store the pairs
    const pairs = [];
  
    // Loop through the words and compare each word to every other word
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        // Check if the words are not the same word and have only one letter different
        if (i !== j && diff(words[i], words[j]) === 1) {
          // Add the pair to the array
          pairs.push([words[i], words[j]]);
        }
      }
    }
  
    // Return the array of pairs
    return pairs;
  }
  
  // Helper function to count the number of differences between two words
  function diff(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diff++;
      }
    }
    return diff;
  }
  
  // Example usage
  const words = ["tour", "force", "nom", "plume", "sour", "forte", "non", "plumb"];
  const pairs = singleLetterPairs(words);

  for (const [word1, word2] of pairs) {
    const pair = document.createElement('p');
    const text = document.createTextNode(`${word1.toUpperCase()} ${word2.toUpperCase()}`);
    pair.appendChild(text);
    document.getElementById(extension_render_to).appendChild(pair);
  }