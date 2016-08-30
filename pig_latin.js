"use strict"

//use readline to fix this challenge
const readline = require('readline');

// GET a sentence from user input
function pigLatinSentence(sentence){

    // Initialize variables
    var sentence = sentence.split(" ");
    var wordOutput = "";
    var sentenceOutput = "";
    var convertCount = 0;

    // FOR each word in the sentence
    for(var i = 0; i < sentence.length; i++) {

        // IF the word starts with a vowel, don't change it
        if(sentence[i][0] == "a" || sentence[i][0] == "e" || sentence[i][0] == "i" || sentence[i][0] == "o" || sentence[i][0] == "u") {
            wordOutput = sentence[i];

        // ELSE replace the word with its pig latin equivalent
        } else {

            // GET all of the consonants before the first vowel in the word
            for(var j = 0; j < sentence[i].length; j++) {
               if(sentence[i][j] == "a" || sentence[i][j] == "e" || sentence[i][j] == "i" || sentence[i][j] == "o" || sentence[i][j] == "u") {
                  break;
               }
            }

            // SET the consonants at the end of the woprd and add the suffix "ay"
            wordOutput = sentence[i].substr(j, sentence[i].length) + sentence[i].substr(0, j) + "ay";
            convertCount++;
        }

        // CONVERT single word
        sentenceOutput += wordOutput + " ";
    }

    // PRINT the converted sentence
    console.log(sentenceOutput);

    // DISPLAY the number of words converted
    console.log("Number of converted words: " + convertCount);
}

pigLatinSentence("halo nama saya lanang");
