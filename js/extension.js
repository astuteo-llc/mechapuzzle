var extension_render_to = 'extension_js';

function render_extension() {
  document.getElementById(extension_render_to).innerHTML = '';

}

// function clue_common_strings() {
//     var puzdata = PUZAPP.puzdata;
//     var letters = [];
//     var clue_lists = [puzdata.across_clues, puzdata.down_clues];
// }

// ---------------------------
//  BUILD ACRONYMS FROM CLUES
// ---------------------------

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

const acronymExplorerHeading = document.createElement('h3');
const acronymExplorerText = document.createTextNode('Acronym Explorer:');
acronymExplorerHeading.appendChild(acronymExplorerText);
document.getElementById(extension_render_to).appendChild(acronymExplorerHeading);

var acronym_result = [];
var acronym_result = acronym("Significant Eastern City of North Dakota");
document.getElementById(extension_render_to).innerHTML += 'Full Entry Clue Here: ' + acronym_result.toUpperCase();


// -----------------------------
//  FIND SIMILAR PAIRS OF WORDS
// -----------------------------

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
var pair_matches = [];
for (const [word1, word2] of pairs) {
  pair_matches.push(`${word1.toUpperCase()} ${word2.toUpperCase()}`);
}
const verySimilarHeading = document.createElement('h3');
const verySimilarText = document.createTextNode('Very Similar Words:');
verySimilarHeading.appendChild(verySimilarText);
document.getElementById(extension_render_to).appendChild(verySimilarHeading);

if (pair_matches.length === 0) {
  const p = document.createElement('p');
  const text = document.createTextNode('No very similar words found');
  p.appendChild(text);
  document.getElementById(extension_render_to).appendChild(p);
} else {
  for (const pair of pair_matches) {
    const p = document.createElement('p');
    const text = document.createTextNode(pair);
    p.appendChild(text);
    document.getElementById(extension_render_to).appendChild(p);
  }
}