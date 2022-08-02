// You can use an input for the word
var word = "dad"

var rword = "";

var letters = [];

//Putting all the letters in the word into the array

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//reversing the words

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

//Now run the file
