var extension_render_to = 'extension_js';

function render_extension() {
  document.getElementById(extension_render_to).innerHTML = '';
  acronym_finder();
  very_similar_words();
}

// ---------------------------
//  BUILD ACRONYMS FROM CLUES
// ---------------------------

// HELPER FUNCTION TO GET FIRST LETTER OF CLUE
function acronym(clueText) {
  const words = clueText.split(" ");
  const acronym = [];
  for (const word of words) {
    acronym.push(word[0]);
  }
  return acronym.join("");
}
 
function acronym_finder() {  
    var html = '';
    html += '<h3>Acronym Finder</h3>';
    
    var puzdata = PUZAPP.puzdata;
    var clue_lists = [puzdata.across_clues, puzdata.down_clues];

    for (var j = 0; j < clue_lists.length; j++) {
      var clues = clue_lists[j];
      for (var key in clues) {
        if (!clues.hasOwnProperty(key))
            continue;
        const acronym_result = acronym(clues[key]);
        html += '<p><strong>' + acronym_result.toUpperCase() + '</strong> – '+ clues[key] + '</p>';
      }
    }
    document.getElementById('extension0').innerHTML = html;
    return false;
}

// -----------------------------
//  FIND SIMILAR PAIRS OF WORDS
// -----------------------------

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

// Helper function to find pairs with a single letter difference
function singleLetterPairs(words) {
  const pairs = [];
  // Loop through the words and compare each word to every other word
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      // Check if the words are not the same word, have only one letter different, are the same length, and are in alphabetical order
      if (i !== j && diff(words[i], words[j]) === 1 && words[i].length === words[j].length && words[i] < words[j]) {
        // Add the pair to the array
        pairs.push([words[i], words[j]]);
      }
    }
  }
  return pairs;
}

function very_similar_words() {  

  var html = '';
  html += '<br><h3>Very Similar Words</h3>';

  var puzdata = PUZAPP.puzdata;
  var entry_lists = [puzdata.across_entries, puzdata.down_entries];

  for (var j = 0; j < entry_lists.length; j++) {

    // Convert the entries key/value object into an array of only words
    var entries = entry_lists[j];
    var values = Object.values(entries);
    var words = values.map(value => value);

    // Find similar pairs from the words array
    const pairs = singleLetterPairs(words);
    console.log(pairs);
    var pair_matches = [];
    for (const [word1, word2] of pairs) {
      pair_matches.push(`${word1.toUpperCase()} ${word2.toUpperCase()}`);
    }
  
    if (pair_matches.length === 0) {
      html += '<p>No very similar words found</p>';
    } else {
      for (const pair of pair_matches) {
        html += '<p>' + pair + '</p>';
      }
    }
  }
  document.getElementById('extension1').innerHTML = html;
  return false;
}
