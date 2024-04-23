let rainDrops = []; // creates array to store rain drops

class Rain { // creates Rain class
  constructor(x, y) { // constructor that initialises properties for each raindrop 
    this.pos = createVector(x, y); // sets x and y coordinate for each raiondrop
    this.vel = createVector(0, random(8, 11)); // sets the velocity for each raindrop randomly betwen 8 and 11
    this.length = random(20, 40); // sets the length of each raindrop randomly between 20 and 40
    this.strength = random(255); // sets the strength of each raindrop randomly between 0 and 255
  }

  draw() { // draws raindrops
    for (let i = 0; i < 5; i++) { // for loop to create 5 raindrops each frame
        let startX = random(550, 650); // randomises starting x coordinate between 550 and 650 which, so that the raindrops are dispersed between the width of the cloud
        let startY = 150; // sets starting y coordinate at 150, so that the rain comes out from the bottom of the cloud
        rainDrops.push(new Rain(startX, startY)); // adds a new raindrop to the array
    }
    
    for (let d of rainDrops) { // for loop through all the raindrops inside the array
      d.show(); // displays each raindrop
      d.update(); // updates the position (x and y coordinates) of each raindrop
    }
  }

  show() { // displays each raindrop
    stroke(255, this.strength); // sets the stroke colour to white for each raindrop
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.length); // draws each raindrop as a line
  }

  update() { // updates the position (x and y coordinates) of each raindrop
    this.pos.add(this.vel); // moves each raindrop downthe canvas based on its velocity, previously established as random between 8 and 11
    if (this.pos.y > 375) { // if statement that checks if the raindrop has fallen below the y coordinate of 375 (the grass)
      rainDrops.shift(); // removes the raindrop from the array if it has fallen below the grass
    }
  }
}


