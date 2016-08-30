"use strict"
var input = prompt ("isi dict");
var vowel = ["a","i","u","e","o"];
var word = [];


function pigLatin(word){
  if(vowel.indexOf(word[0]) == -1){
   return word.substring(1) + word[0] + "ay.";
   for ()
  }else{
    return word;
  }
}
// function jadikanKalimat(word){
//
// }
console.log(pigLatin ("kata"));
console.log(pigLatin ("bacanya"));
  //use readline to fix this challenge
  // const readline = require('readline');
