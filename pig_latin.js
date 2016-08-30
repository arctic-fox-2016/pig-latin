"use strict"

//use readline to fix this challenge
const readline = require('readline');

let kalimat = "baju katak andrew"
let kalimatBaru = ""
let convert = function (para){
  let result = ""
  let endWord = ""
  let word = para
    if (word[0] == "a" ||word[0] == "i" ||word[0] == "u" ||word[0] == "e" ||word[0] == "o"){
      return word

    } else {
      while ((word.length >0) && (word[0] !== "a" && word[0] !== "i" && word[0] !== "u" && word[0] !== "e" && word[0] !== "o")){
        endWord = endWord.concat(word[0])
        word = word.substring(1,(word.length))
      }
    endWord = endWord.concat("ay");
    result = word.concat(endWord);
    }
  return result
}

let convertKalimat = function(parameter){
  let arrayKalimat = parameter.split(" ");
  for (let i=0; i<=(arrayKalimat.length)-1; i++){
    kalimatBaru = kalimatBaru + " " +convert(arrayKalimat[i])

  }
  return kalimatBaru
}

console.log(convertKalimat(kalimat))
