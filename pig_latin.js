"use strict"

//use readline to fix this challenge
const readline = require('readline');

function iteration_one(string){
  var vowel_char = ['A','I','U','E','O'];
  for(var i=0;i<vowel_char.length;i++){
    if(string[0].toLowerCase() == vowel_char[i].toLowerCase()){
      return string;
    }
  }

  var new_string = "";
  for(var i=0;i<string.length;i++){
    for(var y=0;y<vowel_char.length;y++){
      if(string[i].toLowerCase() != vowel_char[y].toLowerCase()){
        if(y == vowel_char.length - 1) new_string += string[i];
      } else {
        return string.substr(1) + new_string + "ay.";
      }
    }
  }
}

function iteration_two(sentences)
{
    var sentence = sentences.split(' ');
    var newsentence = '';

    for(var index=0;index<sentence.length;index++)
    {
        if(index == 0) newsentence = iteration_one(sentence[index]);
        else newsentence += " " + iteration_one(sentence[index]);
    }
    return newsentence;
}

var it_one_word = "hacktiveight";
console.log("Exercise - Iteration One");
console.log("Current String : " + it_one_word);
console.log("Result : " + iteration_one(it_one_word));
console.log("=============================");

var it_two_sentences = "budi pergi ke pasar";
var sentence_interation_two = iteration_two(it_two_sentences);

console.log("Exercise - Iteration two");
console.log("Current String : " + it_two_sentences);
console.log("Result : " + sentence_interation_two);
console.log("Words Converted : " + sentence_interation_two.split(" ").length);
console.log("=============================");
