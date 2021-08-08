/*
This is my application and it does XYZ
Author Paul
Date: Today
*/

// Wait for the DOM to finish loading before running the game
//Display random image of a letter
window.onload = choosePic;

let myPix = new Array(
    "./assets/images/a.png",
    "./assets/images/d.png",
    "./assets/images/m.png",
    "./assets/images/s.png",
    "./assets/images/t.png"
);

function choosePic() {
    let randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("letter").src = myPix[randomNum];
}

//audio for Spider-Man Web SFX
let sfx = document.getElementById("playSFX"); 
function playSFX() { 
    sfx.play(); 
} 

//audio for a
let a = document.getElementById("playAudio_A"); 
function playAudioA() { 
    a.play(); 
} 

//audio for d
let d = document.getElementById("playAudio_D"); 
function playAudioD() { 
    d.play(); 
} 

//audio for m
let m = document.getElementById("playAudio_M"); 
function playAudioM() { 
    m.play(); 
} 

//audio for s
let s = document.getElementById("playAudio_S"); 
function playAudioS() { 
    s.play(); 
} 

//audio for t
let t = document.getElementById("playAudio_T"); 
function playAudioT() { 
    t.play(); 
} 



// Gets the current score from the DOM and increments it by 1
function incrementSpidermanScore() {
    let oldScore = parseInt(document.getElementById("spiderman-score").innerText);
    document.getElementById("spiderman-score").innerText = oldScore + 1;
}

function incrementGreenGoblinScore() {
    let oldScore = parseInt(document.getElementById("green-goblin-score").innerText);
    document.getElementById("green-goblin-score").innerText = oldScore + 1;
}


function whoHasWon() {
    let maxScore = 10;
    let spiderScore = parseInt(document.getElementById("spiderman-score").innerText);
    let goblinScore = parseInt(document.getElementById("green-goblin-score").innerText);
    if (spiderScore >= maxScore) {
        document.getElementById("spiderman-score").innerText = "Spider-Man Wins!";
        window.location.reload();
    }
    if (goblinScore >= maxScore) {
        document.getElementById("green-goblin-score").innerText = "Green Gobin Wins!";
        window.location.reload();
    }
}

// Main capture function
function captureAnswer(letter) {
    playSFX();
    
    // Get current letter to validate against
    let imgSrc = (document.getElementById("letter").src).toString();
    imgSrc = imgSrc.slice(-5, imgSrc.length);
    let validateLetter = imgSrc.slice(0, 1);
    
    // Letter validation
    if (letter == validateLetter) {
        // alert("Spidy increase");
        incrementSpidermanScore();
    } else {
        // alert("Goblin increase");
        incrementGreenGoblinScore();
    }

    // Game win-lose calculation
    whoHasWon();

    // Generate new letter
    choosePic();
}