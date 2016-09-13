"use strict"
//
//
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('Tuliskan kata yang akan dijadikan pigLatin? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log('Menjadi:', answer.substring(1)+(answer.charAt(0)).concat('ay'));
//
//   rl.close();
// });

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join("")
}

// let kata =''
// console.log(kata +=`${word}`);

//   let nama = ""
  let kata = ""
// // Your CLI code here

process.argv.forEach((val, index, array) =>  {

  if(index > 1){
  (kata += `${val}`);
  }
});
 console.log(convert(kata));
 let situs = "hello"
  console.log(situs.substring(1)+(situs.charAt(0)).concat('ay'));
