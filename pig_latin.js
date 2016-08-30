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
  var words = inputText.split(" ");
  var hasil = "";

  for (var i=0; i < words.length; i++) {
    hasil += pig_latin_1word(words[i]) + " ";

  }
  return hasil;
}


console.log("hello : " + pig_latin_1word("hello"));
console.log("jalan : " + pig_latin_1word("jalan"));
console.log("ayo : " + pig_latin("ayo jalan ke mall"));
