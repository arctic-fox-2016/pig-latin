
//var depan = prompt("Please enter your word");
var depan = "";
var belakang = "";
var hasil = "";
var vowel = "";
var tampung = 0;
var kalimat = prompt("Please enter your word");
//
// var str = "1,2,3,4,5,6";
// var temp = new Array();
// // this will return an array with strings "1", "2", etc.
// temp = str.split(",");

var temp = new Array();
var temp2 = new Array();
temp = kalimat.split(" ");
console.log(temp)

for (var i = 0; i < temp.length; i++) {
  temp2 += pigLatin(temp[i]);
}
console.log("kalimat awal : " + kalimat);
console.log("hasil        : " + temp2);
console.log("jumlah kata yang di convert       : " + temp.length);



function pigLatin(depan) {
  if (!
     (depan.substring (0,1).includes("a") || depan.substring (0,1).includes("i") || depan.substring (0,1).includes("u") ||
     depan.substring (0,1).includes("e") || depan.substring (0,1).includes("o"))
    )
  {
    //  console.log("masuk sini");
    //  console.log(depan.indexOf("a"));
    //  console.log(depan.substring(0,depan.indexOf("a")));
    //  console.log(depan.substring(depan.indexOf("a"),depan.length))
    // console.log(depan.charAt(1).includes("i"));
    vowel = cariVowel(depan);
    // console.log(vowel);
    belakang = depan.substring(depan.indexOf(vowel),depan.length);
    depan = depan.substring(0,depan.indexOf(vowel));
    // console.log("depan : "+ depan);
    // console.log("sisa : "+belakang);
    depan = belakang+depan+'ay.';
    // console.log ("hasil :" + kata);

  }
  return depan+' ';
}


function cariVowel(kata){
  for (var i = 0; i < kata.length; i++) {
    //str.charAt(0)
    if (kata.charAt(i).includes("a")) {
        return kata.substring(kata.indexOf("a"),(kata.indexOf("a")+1));
    }
    else if (kata.charAt(i).includes("i")) {
        return kata.substring(kata.indexOf("i"),(kata.indexOf("i")+1));
    }
    else if (kata.charAt(i).includes("u")) {
        return kata.substring(kata.indexOf("u"),(kata.indexOf("u")+1));
    }
    else if (kata.charAt(i).includes("e")) {
        return kata.substring(kata.indexOf("e"),(kata.indexOf("e")+1));
    }
    else if (kata.charAt(i).includes("o")) {
        return kata.substring(kata.indexOf("o"),(kata.indexOf("o")+1));
    }

  }
  return kata;
}
