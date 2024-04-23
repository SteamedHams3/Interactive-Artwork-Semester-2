let upperSky; // declares upperSky variable to store value of upperSky which will be used to creat the sky colour gradient
let lowerSky; // declares lowerSky variable  to store value of lowerSky which will be used to create the sky colour gradient 
let myCloud = new whiteCloud(600, 100); // calling a new instance of whiteCloud class
let myTree = new responsiveTree(); // calling a new instance of responsiveTree class
let myRain; // declares myRain variable that will be initialised in setup
let mouseIsClicked = 0; // sets mouseIsClicked variable to 0 when the code is first run
let mouseIsPressed = 0; // sets mouseIsPressed variable to 0 when the code is first run
let currentState = 0;  // sets currentState variable to 0 when the code is first run
let mySound; // declares mySound variable to store day state ambient sound file
let mySound2; // declares mySound2 variable to store night state ambient sound file
let myRainSound; // declares myRainSound variable to store rain sound file
let myMoonSound; // declares myMoonSound variable to store moon sound file
let myStarSound; // declares myStarSound variable to store star sound file
let mySunSound; // declares mySunSound variable to store sun sound file
let rainVolume = 0.3; // sets rainVolume to 0.3 out of 1 in order to make it quieter
let star; // declares star variable that will be initialised in setup
let r; // declares r value to store red value that will be initialised in setup
let g; // declares g value to store green value that will be initialised in setup
let b; // declares b value to store blue value that will be initialised in setup

function keyPressed() { // calls the p5 function keyPressed to test if the user is pressing a key, in this case either 1, 2 or 0
  if (key === "1") { 
    currentState = 1; // if statement that checks if the the user is pressing 1 and sets the currentState to 1 (day landscape)
  } else if(key === "2") {
    currentState = 2; // else if that checks if the the user is pressing 2 and sets the currentState to 2 (night landscape)
  }
    else if(key === "0") {
      currentState = 0; // else if that checks if the the user is pressing 0 and sets the currentState to 0 (menu screen)
  }
}

function mouseClicked() {  // calls the p5 function mouseClicked to test if the user is clicking their mouse
  if (mouseIsClicked === 0) { 
    mouseIsClicked = 1; // if statement that checks if mouseIsClicked is 0 and sets it to 1 when the user clicks the mouse anywhere on the canvas 
  } else {
   mouseIsClicked = 0; // else that sets the mouseIsClicked back to 0 when the user clicks the mouse anywhere on the canvas again 
  }
}

function mousePressed() { // calls the p5 function mousePressed to test if the mouse is pressed  
  mouseIsPressed = 1; // sets mouseIsPressed to 1 if the user presses the mouse
}

function mouseReleased() { // calls the p5 function mouseReleased to test if the mouse is released
  mouseIsPressed = 0; // sets mouseIsPressed to 0 if the user releases the mouse 
}

function preload() { // calls p5 function preload to ensure that all soundfiles are loaded before setup is run, ensuring no load times when the page is ran
  soundFormats('wav', 'mp3'); // sets accepted soundFormats to wav and mp3
  mySound = loadSound('nature_ambient_daytime_state1'); // uses loadSound to load night ambient sound
  mySound2 = loadSound('nature_ambient_night_state2'); // uses loadSound to load day ambient sound
  myRainSound = loadSound('Rain_Audio'); // uses loadSound to load rain sound effect
  myMoonSound = loadSound('Moon_Sound'); // uses loadSound to load moon sound effect
  myStarSound = loadSound('Star_Sound'); // uses loadSound to load star sound effect
  mySunSound = loadSound('Sun_Sound'); // uses loadSound to load sun sound effect
}

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  myRain = new Rain();
  star = new Star();
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
 clear();
 background(220);

    
      switch (currentState) {
        case 0:
          textSize(30);
          textAlign(CENTER);
          fill(0);
          noStroke();
          text('Press 1 and 2 to switch between states', 400, 300);
          mySound.stop();
          mySound2.stop();
          break;
        
        case 1: 


      mySound2.stop();
      myStarSound.stop();
      myMoonSound.stop();
      if (!mySound.isPlaying()){ // if statement to play loop of ambient background sound for state one as the exclamation mark makes it negative and loops mySound 
        mySound.loop();
      }

        
    

    upperSky = color(135, 206, 235);
    lowerSky = color(140, 190, 214);
      for(let y = 0 ; y < 400; y++) {
          range = map(y, 0, 400, 0, 1);
          let sky = lerpColor(upperSky, lowerSky, range)
          stroke(sky);
          line(0, y, width, y);
      }
    
      
 frameRate(30);
 noStroke();
 fill(124, 252, 0);
 rect(0, 400, width, 200);

 stroke(245, 187, 87);
 fill(244, 128, 55);
 ellipse(100, 90, 100, 100);

 if (mouseIsPressed == 1 && mouseX > 50 && mouseX < 150 && mouseY > 40 && mouseY < 120) {
  fill(255, 150, 0);
  ellipse(100, 90, 100, 100);
  if(!mySunSound.isPlaying()) {
    mySunSound.play();
  }
}1
 

    push(); // saves the current drawing state 
    translate(100, 90); // moves the origin to the centre of the ellipse (sun) so the lines can be rotated around it 
    for (let i = 0; i < 8; i++) { // for loop to draw 8 lines each rotated by 45 degrees around the ellipse (sun)
      strokeWeight(3); // sets a stroke weight of 3 for the lines
      rotate(45); // rotates each line by 45 degrees 
      line(0, -80, 0, -60); // draws the first line at this position using the translated coordinates established by translate (100, 90)
      }
    pop(); // restores the previous drawing state

   myRainSound.setVolume(rainVolume); // sets rain volume to 0.3 by calling the previously declared rainVolume function
  if (mouseIsClicked == 1 && mouseX > 550 && mouseX < 650 && mouseY > 80 && mouseY < 120) {
    myRain.show(); 
    myRain.draw();
    myRain.update();
    if (!myRainSound.isPlaying()){ 
      myRainSound.loop();
    }
  } else { 
    myRainSound.stop();
  }
    
  
  
 
  myCloud.draw();
  myTree.draw();
  
  break;


  


  case 2:
    mySound.stop();
    mySunSound.stop();
    if (!mySound2.isPlaying()){ // if statement to play loop of ambient background sound for state one as the exclamation mark makes it negative and loops mySound 
      mySound2.loop();
    }
  
    upperSky = color(19, 24, 98);
    lowerSky = color(46, 68, 130);
    for(let y = 0 ; y < 400; y++) {
      range = map(y, 0, 400, 0, 1);
      let sky = lerpColor(upperSky, lowerSky, range)
      stroke(sky);
      line(0, y, width, y);
    }
    fill(246, 241, 213);
    noStroke();
  
    ellipse(100, 90, 100, 100);
    
    star.draw();

    
    if (mouseIsPressed == 1 && mouseX > 350 && mouseX < 450 && mouseY > 40 && mouseY < 140) {
     fill(r, g, b);
     star.draw();
     if (!myStarSound.isPlaying()){ 
      myStarSound.play();
    }
  }
    



    if (mouseIsPressed == 1 && mouseX > 50 && mouseX < 150 && mouseY > 40 && mouseY < 120) {
      fill(255, 255, 0);
      noStroke();
      ellipse(100, 90, 100, 100);
      if (!myMoonSound.isPlaying()){ 
        myMoonSound.play();
      }
    }
    
    
   
    fill(255,205,165);
   
   
   
    frameRate(30);
    noStroke();
    fill(5, 71, 42);
    rect(0, 400, width, 200);
    
    myRainSound.setVolume(rainVolume);
    if (mouseIsClicked == 1 && mouseX > 550 && mouseX < 650 && mouseY > 80 && mouseY < 120) {
      myRain.show(); 
      myRain.draw();
      myRain.update();
      if (!myRainSound.isPlaying()){ 
        myRainSound.loop();
      }
    } else { 
      myRainSound.stop();
    }

  
    myCloud.draw();
    myTree.draw();
  
    
  
  
    break;




 


  break;
  



}
}



