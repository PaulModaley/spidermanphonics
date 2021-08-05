// Wait for the DOM to finish loading before running the game
//Display random image of a letter
    window.onload = choosePic;
    
    let myPixObj = {
      1: {
          "image": "images/a.png",
          "selection": "a",
      },
      2: {
          "image": "images/d.png",
          "selection": "d",
      },
      3: {
          "image": "images/m.png",
          "selection": "m",
      },
      4: {
          "image": "images/s.png",
          "selection": "s",
      },
      5: {
          "image": "images/t.png",
          "selection": "t",
      },
  };
  
  let activeSelection;
  
  function choosePic() {
      let randomNum = Math.floor(Math.random() * myPixObj.length);
      document.getElementById("letter").src = myPixObj[randomNum]["image"];
      activeSelection = myPixObj[randomNum]["selection"];
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

//audio for s
var s = document.getElementById("playAudio_S"); 

function playAudioS() { 
  s.play(); 
} 
//audio for t
var t = document.getElementById("playAudio_T"); 

function playAudioT() { 
  t.play(); 
} 
// function for selecting answers


/**
 * Gets the current score from the DOM and increments it by 1
 */
 function incrementScore() {

  let oldScore = parseInt(document.getElementById("scores").innerText);
  document.getElementById("scores").innerText = ++oldScore;
}