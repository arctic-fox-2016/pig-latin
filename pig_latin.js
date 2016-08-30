"use strict"

//use readline to fix this challenge
const readline = require('readline');

function iteration_one(string){
  var vowel_char = ["A", "I", "U", "E", "O"];
  var final_string = "";
  var first_vowel_flag = false;

  for(var idx = 0; idx < vowel_char.length; idx++){
    if(string.charAt(0).toLowerCase() == vowel_char[idx].toLowerCase()){
      final_string = string;
      first_vowel_flag = false;
      break;
    } else {
      first_vowel_flag = true;
    }
  }

  if(first_vowel_flag){
    for(var idx = 0; idx < string.length; idx++){
      var current_vowel_flag = false;
      for(var idy = 0; idy < vowel_char.length; idy++){
        if(string.charAt(idx).toLowerCase() == vowel_char[idy].toLowerCase()){
          current_vowel_flag = true;
          break;
        }
      }
      if(!current_vowel_flag) final_string += string.charAt(idx);
      else break;
    }
    final_string += "ay.";
  }
  return final_string;
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
