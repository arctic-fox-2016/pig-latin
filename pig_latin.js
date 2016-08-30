"use strict"

//use readline to fix this challenge
const readline = require('readline');


function pigLatin(userinput){
  var vowel = ["a","i","u","e","o"];
  var pecahKata = userinput.split("");
  var bodyVowel ="";
  var bodykata ="";
  for (var i=0;i<vowel.length;i++) {
    if (pecahKata[0]== vowel[i]){
      bodyVowel += userinput;

    }else{
      var kataPertama = pecahKata[0];
      for (var i=1;i<pecahKata.length;i++){
         bodykata += pecahKata[i];

      }
       var result = bodykata+kataPertama+"ay" ;
       return result;
    }

  }
}

function pigLatinSentences(sentences){
  let arrSentences = sentences.split(" ");
  let arrResult = [];
  for(let i=0; i < arrSentences.length; i++){
    //console.log(arrSentences[i]);
    arrResult.push(pigLatin(arrSentences[i]));

  }
  return arrResult.join(" ");

}

console.log(pigLatinSentences("ayam pergi ke ayam pasar"));
