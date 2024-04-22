class Star {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
    }


draw(){
    beginShape();
    vertex(400, 25);    // Move to the center horizontally by setting x-coordinate to canvas width / 2
    vertex(425, 75);    // Move to the center horizontally by setting x-coordinate to canvas width / 2 + 25
    vertex(475, 75);    // Move to the center horizontally by setting x-coordinate to canvas width / 2 + 75
    vertex(437.5, 112.5);  // Move to the center horizontally by setting x-coordinate to canvas width / 2 + 37.5
    vertex(450, 162.5);    // Move to the center horizontally by setting x-coordinate to canvas width / 2 + 50
    vertex(400, 137.5);    // Move to the center horizontally by setting x-coordinate to canvas width / 2
    vertex(350, 162.5);    // Move to the center horizontally by setting x-coordinate to canvas width / 2 - 50
    vertex(362.5, 112.5);  // Move to the center horizontally by setting x-coordinate to canvas width / 2 - 37.5
    vertex(325, 75);     // Move to the center horizontally by setting x-coordinate to canvas width / 2 - 75
    vertex(375, 75);  
  endShape(CLOSE);
}
}