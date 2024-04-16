let upperSky
let lowerSky
let myCloud = new whiteCloud(600, 100)
let myTree = new responsiveTree();
let myRain;
let mouseIsClicked = 0;
let currentState = 0;
let mySound;
let mySound2;

function keyPressed() {
  if (key === "1") {
    currentState = 1;
  } else if(key === "2") {
    currentState = 2;
  }
    else if(key === "0") {
      currentState = 0;
  }
}

function preload() {
  soundFormats('wav', 'mp3');
  mySound = loadSound('nature_ambient_daytime_state1');
  mySound2 = loadSound('nature_ambient_night_state2');
}





function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  myRain = new Rain();
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

    push(); // saves the current drawing state 
    translate(100, 90); // moves the origin to the centre of the ellipse (sun) so the lines can be rotated around it 
    for (let i = 0; i < 8; i++) { // for loop to draw 8 lines each rotated by 45 degrees around the ellipse (sun)
      strokeWeight(3); // sets a stroke weight of 3 for the lines
      rotate(45); // rotates each line by 45 degrees 
      line(0, -80, 0, -60); // draws the first line at this position using the translated coordinates established by translate (100, 90)
      }
    pop(); // restores the previous drawing state 


  if (mouseIsClicked == 1 && mouseX > 550 && mouseX < 650 && mouseY > 80 && mouseY < 120) {
    myRain.show(); 
    myRain.draw();
    myRain.update();
  }
 
  myCloud.draw();
  myTree.draw();
  
  break;

  case 2:
    mySound.stop();
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
    
      
 frameRate(30);
 noStroke();
 fill(5, 71, 42);
 rect(0, 400, width, 200);

 if (mouseIsClicked == 1 && mouseX > 550 && mouseX < 650 && mouseY > 80 && mouseY < 120) {
  myRain.show(); 
  myRain.draw();
  myRain.update();
}

myCloud.draw();
myTree.draw();
fill(246, 241, 213);
noStroke();
ellipse(-300, -280, 100, 100);


 


  break;
  



}
}



function mouseClicked() {
  if (mouseIsClicked === 0) {
    mouseIsClicked = 1;
  } else {
   mouseIsClicked = 0;
  }
  console.log(mouseIsClicked);
}

