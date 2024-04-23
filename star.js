class Star { // creates Star class
    constructor(x, y, width, height) { // constructor that initialises the x and y coordinates of the star
        this.x = x; // sets the x coordinate of the star  
        this.y = y; // sets the y coordinate of the star
    }


draw(){
    beginShape(); // begins shape function which starts drawing of my star custom shape that has an x value at the center of the canvas and a y value towards the top of the canvas, creating a centered star at the top of the sky 
    vertex(400, 25); // draws first vertex at with an x coordinate of 400 and a y coordinate of 25
    vertex(425, 75); // draws second vertex with an x coordinate of 425 and a y coordinate of 75
    vertex(475, 75); // draws third vertex with an x coordinate of 475 and a y coordinate of 75
    vertex(437.5, 112.5); // draws fourth vertex with an x coordinate of 437.5 and a y coordiante of 112.5
    vertex(450, 162.5); // draws fifth vertex with an x coordinate of 450 and a y coordinate of 162.5
    vertex(400, 137.5); // draws sixth vertex with an x coordinate of 400 and a y coordiante of 137.5
    vertex(350, 162.5); // draws seventh vertex with an x coordiante of 350 and a y coordiante of 162.5
    vertex(362.5, 112.5); // draws eight vertex with an x coordinate of 362.5 and a y coordinate of 112.5
    vertex(325, 75); // draws ninth vertex with an x coordinate of 325 and a y coordinate of 75
    vertex(375, 75); // draws tenth vertex with an x coordinate of 375 and a y coordinate of 75    
   endShape(CLOSE); // ends shape function 
}
}