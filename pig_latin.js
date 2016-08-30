"use strict"

//use readline to fix this challenge
const readline = require('readline');
var vowels = ["a","i","u","e","o"];
var sentence = prompt();
function pigword(word){
word = word.split("");
if(vowels.indexOf(word[0]) >= 0){
  word.push("-yay");
} else{
  var s = word[0];
  word[word.length] = s;
  word[0]="";
  word.push("-ay")
}
return word.join("")
}

function pigsentence(sentences) {
  words = sentences.split(" ")  
  return words.map(pigword).join("")
}
// words = words.split(" ");
// for(var word in words){
// word = word.split("");
// if(vowels.indexOf(word[0]) >= 0){
//   word.push("-yay");
//   word = word.join("")
// } else{
//   var s = word[0];
//   word[word.length] = s;
//   word[0]="";
//   word.push("-ay")
//   word = word.join("")
// }
// }
// console.log(words.join(""));


console.log(pigsentence(sentence));
