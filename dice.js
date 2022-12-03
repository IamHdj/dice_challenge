//document.querySelector("img")[0].setAttribute("src","images/dice1.png");

/*
document.querySelector("img").setAttribute("src","images\dice1.png");
*/

var randomnum1= Math.floor(Math.random()*6) +1;

var diceimage1= "dice" + randomnum1 + ".png";

var selecteddice1= "images/" + diceimage1;

var setimage1= document.querySelectorAll("img")[0];

setimage1.setAttribute("src",selecteddice1);


//for second image

var randomnum2= Math.floor(Math.random()*6) +1;

var diceimage2= "dice" + randomnum2 + ".png";

//var selecteddice2= "images/" + diceimage2;

var selecteddice2= "images/dice" + randomnum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",selecteddice2);

if (randomnum1<randomnum2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
}

else if (randomnum1>randomnum2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
}

else{
  document.querySelector("h1").innerHTML="🏳️ It's a TIE!! 🏳️"
}
