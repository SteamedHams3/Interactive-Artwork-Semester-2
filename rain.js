let rainDrops = [];

class Rain {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, random(8, 11));
    this.length = random(20, 40);
    this.strength = random(255);
  }

  draw() {
    for (let i = 0; i < 5; i++) {
        let startX = random(550, 650);
        let startY = 150;
        rainDrops.push(new Rain(startX, startY));
      
    }
    
    for (let d of rainDrops) {
      d.show();
      d.update();
    }
  }

  show() {
    stroke(255, this.strength);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.length);
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.y > 375) {
      rainDrops.shift();
    }
  }
}


