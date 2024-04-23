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

function setup() { // calls setup that runs once when the program is first run
  createCanvas(800, 600); // creates a canvas with a width of 800 pixels and a height of 600 pixels
  angleMode(DEGREES); // sets angles to degrees instead of radians
  myRain = new Rain(); // initialises rain class 
  star = new Star(); // initialises star class
  r = random(255); // initialises random red value and sets it to be between 0 and 255
  g = random(255); // initialises random red value and sets it to be between 0 and 255
  b = random(255); // initialises random red value and sets it to be between 0 and 255
}

function draw() { // calls draw that runs 60 times a second
  clear(); // clears all pixels on the canvas
  background(220); // sets background to 220 a light grey which will be used for state 0 (the menu screen)
  frameRate(30); // sets frame rate to 30 frames a second instead of the default 60

  switch (currentState) {  // switch case statement to switch between states
    case 0: // if 0 is pressed then it will run this code, making the state 0 (menu screen)
      textSize(30); // sets text size to 30
      textAlign(CENTER); // aligns text at the center of the canvas
      fill(0); // sets the text colour to black
      noStroke(); // removes stroke
      text('Press 1 and 2 to switch between states', 400, 300); // draws text with the x coordinate of 400 and y coordinate of 300 
      mySound.stop(); // stops ambient day sound from playing on the menu screen
      mySound2.stop(); // stops ambient night sound from playing on the menu screen
      break; // exits the code executed in case 0 if either 1 or 2 are pressed

    case 1: // if 1 is pressed then it will run this code, making the state 1 (day landscape)
      mySound2.stop(); // stops ambient night sound from playing on the day landscape
      myStarSound.stop(); // stops star sound from playing on the day landscape
      myMoonSound.stop(); // stops moon sound from playing on the day landscape
      if (!mySound.isPlaying()) { // if statement that plays loop of ambient day sound for state 1 as the exclamation mark makes it negative and loops mySound
        mySound.loop(); // loops ambient day sound once it is finished playing 
      }

      upperSky = color(135, 206, 235); // gives upperSKy a light blue rgb value
      lowerSky = color(140, 190, 214); // gives lowerSky a bluey-grey rgb value
      for (let y = 0; y < 400; y++) { // for loop for each line of canvas height between 0 and 400
        let range = map(y, 0, 400, 0, 1); // maps the y value between the scale of 0 and 1
        let sky = lerpColor(upperSky, lowerSky, range); // gradually blends upperSky and lowerSky colours together using lerpColor function
        stroke(sky); // sets stroke colour to the new blended colour which gradually transitions from light blue to a bluey-grey
        line(0, y, width, y); // draws a horizontal line from the left to the right of the canvas at the current y value
      }

      noStroke(); // removes stroke 
      fill(124, 252, 0); // sets fill to a light green
      rect(0, 400, width, 200); // draws a rectangle with the width of the canvas and a height of 200

      stroke(245, 187, 87); // sets stroke to orange
      fill(244, 128, 55); // sets fill to dark organge
      ellipse(100, 90, 100, 100); // draws the sun with an x coordinate of 100 and a y coordinate of 90 with a width and height of 100
      if (mouseIsPressed == 1 && mouseX > 50 && mouseX < 150 && mouseY > 40 && mouseY < 120) { // if statement that checks if the mouse has been pressed over the area of which the sun is drawn and changes the colour of the sun if the mouse is pressed
        fill(255, 150, 0); // if the mouse is pressed over sun, it sets the fill to a brighter orange
        ellipse(100, 90, 100, 100); // if the mouse is pressed over sun, it draws an ellipse at the same position of the sun, with the brighter orange fill, creating the visual effect of a colour change
        if (!mySunSound.isPlaying()) { // if the mouse is pressed over sun, new if statement that checks if the sun sound is not playing and plays the sound if it isn't, this is as the exclamation mark makes the code negative
          mySunSound.play(); // plays the sun sound if the mouse is pressed over the sun
        }
      }

      push(); // saves the current drawing state
      translate(100, 90); // moves the origin to the centre of the ellipse (sun) so the lines can be rotated around it
      for (let i = 0; i < 8; i++) { // for loop to draw 8 lines each rotated by 45 degrees around the ellipse (sun)
        strokeWeight(3); // sets strokeWeight to 3
        rotate(45); // rotates each line by 45 degrees
        line(0, -80, 0, -60); // draws the first line at this position using the translated coordinates established by translate (100, 90);
      }
      pop(); // restores the previous drawing state

      myRainSound.setVolume(rainVolume); // calls the previously established rainVolume of 0.3 to reduce the volume of the rain sound
      if (mouseIsClicked == 1 && mouseX > 550 && mouseX < 650 && mouseY > 80 && mouseY < 120) { // if statement that checks if the mouse is clicked over the area of which the cloud is drawn and runs rain animation if it is 
        myRain.show(); // calls show from rain class which displays each raindrop on the canvas (as a line)
        myRain.draw(); // calls draw from rain class which creates new raindrops and draws them on the canvas
        myRain.update(); // calls update from rain class which updates the position of each raindrop every frame
        if (!myRainSound.isPlaying()) { // if the mouse is pressed over cloud, new if statement that checks if the rain sound is not playing and plays the sound if it isn't, this is as the exclamation mark makes the code negative
          myRainSound.loop(); // loops the rain sound if the mouse is pressed over the sun
        }
      } else {
        myRainSound.stop(); // else that stops the rain sound if the mouse is no longer clicked over the positon of which the cloud is drawn
      }
    

      myCloud.draw(); // calls draw from whiteCloud class which draws a cloud towards the top right of the canvas
      myTree.draw(); // calls draw from responsiveTree class which draws the recursive tree centered horizontally with an x coordinate of width/2 and a y coordinate of 400

      break; // exits the code executed in case 1 if either 0 or 2 are pressed

    case 2: // if 2 is pressed then it will run this code, making the state 2 (night landscape)
      mySound.stop(); // stops ambient day sound from playing on the night landscape
      mySunSound.stop(); // stops sun sound from playing on the night landscape
      if (!mySound2.isPlaying()) { // if statement to play loop of ambient night sound for state 2 as the exclamation mark makes it negative and loops mySound 
        mySound2.loop(); // loops ambient night sound once it is finished playing 
      }

      upperSky = color(19, 24, 98); // gives upperSky a dark blue rgb value
      lowerSky = color(46, 68, 130); // gives lowerSky a darker blue rgb value
      for (let y = 0; y < 400; y++) { // for loop for each line of canvas height between 0 and 400
        let range = map(y, 0, 400, 0, 1); // maps the y value between the scale of 0 and 1
        let sky = lerpColor(upperSky, lowerSky, range); // sets stroke colour to the new blended colour which gradually transitions from light blue to a bluey-grey
        stroke(sky); // sets stroke colour to the new blended colour which gradually transitions from light blue to a bluey-grey
        line(0, y, width, y); // draws a horizontal line from the left to the right of the canvas at the current y value
      }

      fill(246, 241, 213); // sets rgb to a white/beige colour
      noStroke(); // removes stroke
      ellipse(100, 90, 100, 100); // draws an ellipse (moon) with an x coordinate of 100 and a y coordinate of 90 with a width and height of 100

      star.draw(); // calls draw from Star class which uses the p5 beginShape function to draw a star, drawing each vertex manually
      if (mouseIsPressed == 1 && mouseX > 350 && mouseX < 450 && mouseY > 40 && mouseY < 140) { // if statement that checks if the mouse is pressed over where the star is drawn on the canvas and changes colour if it is
        fill(r, g, b); // if mouse is pressed over star, the fill is changed to a random rgb value
        star.draw(); // calls draw from Star class again, this time with the new random rgb fill
        if (!myStarSound.isPlaying()) { // if the mouse is pressed over star, new if statement that checks if the star sound is not playing and plays the sound if it isn't, this is as the exclamation mark makes the code negative
          myStarSound.play(); // plays the star sound if the mouse is pressed over the star
        }
      }

      if (mouseIsPressed == 1 && mouseX > 50 && mouseX < 150 && mouseY > 40 && mouseY < 120) { // if statement that checks if the mouse is pressed over where the moon is drawn on the canvas and changes colour if it is
        fill(255, 255, 0); // if moon is pressed, changes fill to yellow rgb value
        noStroke(); // if moon is pressed, removes stroke
        ellipse(100, 90, 100, 100); // if moon is pressed, draws the moon with the new yellow rgb value 
        if (!myMoonSound.isPlaying()) { // if the mouse is pressed over the moon, new if statement that checks if the moon sound is not playing and plays the sound if it isn't, this is as the exclamation mark makes the code negative
          myMoonSound.play(); // plays the moon sound if the mouse is pressed over the moon
        }
      }

      fill(5, 71, 42); // sets the fill to a dark green rgb value
      noStroke(); // removes stroke
      rect(0, 400, width, 200); // draws rectangle with the width of the anvas and a height of 200

      myRainSound.setVolume(rainVolume); // calls the previously established rainVolume of 0.3 to reduce the volume of the rain sound
      if (mouseIsClicked == 1 && mouseX > 550 && mouseX < 650 && mouseY > 80 && mouseY < 120) { // if statement that checks if the mouse is clicked over the area of which the cloud is drawn and runs rain animation if it is 
        myRain.show(); // calls show from rain class which displays each raindrop on the canvas (as a line)
        myRain.draw(); // calls draw from rain class which creates new raindrops and draws them on the canvas
        myRain.update(); // calls update from rain class which updates the position of each raindrop every frame
        if (!myRainSound.isPlaying()) { // if the mouse is pressed over cloud, new if statement that checks if the rain sound is not playing and plays the sound if it isn't, this is as the exclamation mark makes the code negative
          myRainSound.loop(); // loops the rain sound if the mouse is pressed over the sun
        }
      } else {
        myRainSound.stop(); // else that stops the rain sound if the mouse is no longer clicked over the positon of which the cloud is drawn
      }

      myCloud.draw(); // calls draw from whiteCloud class which draws a cloud towards the top right of the canvas
      myTree.draw(); // calls draw from responsiveTree class which draws the recursive tree centered horizontally with an x coordinate of width/2 and a y coordinate of 400
      break; // exits the code executed in case 2 if either 0 or 1 are pressed
  }
}
