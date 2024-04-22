class Star {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
    }


draw(){
    beginShape(); // beginShape function which starts drawing of my star custom shape that has an x value at the center of the canvas and a y value towards the top of the canvas, creating a centered star at the top of the sky 
    vertex(400, 25);  // draws first vertex at with an x value of 400 and a y value of 25
    vertex(425, 75);  
    vertex(475, 75); 
    vertex(437.5, 112.5); 
    vertex(450, 162.5); 
    vertex(400, 137.5);
    vertex(350, 162.5);  
    vertex(362.5, 112.5); 
    vertex(325, 75);
    vertex(375, 75);     
  endShape(CLOSE);
}
}