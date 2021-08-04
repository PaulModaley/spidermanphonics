// Wait for the DOM to finish loading before running the game
//Display random image of a letter
    window.onload = choosePic;

var myPix = new Array("images/a.png","images/d.png","images/m.png", "images/s.png", "images/t.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("letter").src = myPix[randomNum];
}
//audio for a

var a = document.getElementById("playAudio_A"); 

function playAudioA() { 
  a.play(); 
} 
//audio for d

var d = document.getElementById("playAudio_D"); 

function playAudioD() { 
  d.play(); 
} 

//audio for m
var m = document.getElementById("playAudio_M"); 

function playAudioM() { 
  m.play(); 
} 