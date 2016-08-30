"use strict"

//use readline to fix this challenge
const readline = require('readline');
let result = ""
let endWord = ""
let word = ""
let convert = function (word){

    if (word[0] == "a" ||word[0] == "i" ||word[0] == "u" ||word[0] == "e" ||word[0] == "o"){
      return word

    } else {
      while ((word.length >0) && (word[0] !== "a" && word[0] !== "i" && word[0] !== "u" && word[0] !== "e" && word[0] !== "o")){
        console.log("...",word[0])
        endWord = endWord.concat(word[0])
        console.log(">",endWord)
        word = word.substring(1,(word.length))
        console.log(word)
      }
    endWord = endWord.concat("ay");
    result = word.concat(endWord);
    }
  return result
}

console.log(convert("bhaju"))
