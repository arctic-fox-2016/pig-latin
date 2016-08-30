"use strict"

//use readline to fix this challenge
const readline = require('readline');

function pig_latin_1word(inputText) {
  var vowel = ["a", "i", "u", "e", "o"];
  var firstLetter = inputText.slice(0,1);
  var isVowel = false;
  var i = 0;
  while ((i < vowel.length) ) {
    if (firstLetter == vowel[i]) {isVowel = true;}
    i++;
  }

  if (isVowel == false) {
    var hasil = inputText.slice(1,inputText.length) + firstLetter + "ay";
  } else { hasil = inputText;
  }
  return hasil;
}

function pig_latin(inputText){
  

}


console.log("hello : " + pig_latin_1word("hello"));
console.log("ayo jalan jalan : " + pig_latin_1word("jalan"));
console.log("ayo jalan jalan : " + pig_latin_1word("ayo"));
