class responsiveTree
{
    constructor() {
        this.angle = 0; // initialises the angle property of the tree that will store the angle in degrees for future branches
        this.trunkLength = 80; // initialises trunk length which will be used to scale the size of the tree trunk
        this.branchLength = 60; // / initialises branch length which will be used to scale the size of the branch
    }

    draw() {
         stroke(161, 102, 47); // sets the stroke colour to brown for drawing the tree trunk
         let angleDegrees = map(mouseX, 0, 800, 15, 90); // calculates the angle in degrees based on the mouseX position, which wil be used to add interactivity to the branches later, it also maps the mouseX movement to be constrained to within the canvas and creates a range for degrees movement between 15 and 90 degrees
         if (angleDegrees > 90) { // if statement to limit the trees movement to 90 degrees so it cannot go further, keeping the tree from deforming.
            angleDegrees = 90; // sets a limit of 90 degrees to the tree movement
         }
         this.angle = angleDegrees; // stores the calculated angle in the angle property so it can be used for interactive branches later
         translate(width/2, 400); // translates the point of origin to the center of the canvas and a height of 200
         line(0, 0, 0, -30); // draws a straight line (the trunk of the tree) wth a height of 30 pixles from the translated origin 
         translate(0, -30); // translates the point of origin 30 pixels upwards to prepare for drawing branches from the top of the tree trunk
         this.branch(30); // initialises the interactive/recursive drawing of branches that are impaced by the users mouseX position 
    }   
    
    branch(h) { // defines the branch function which recursively draws branches for the tree using the users mouseX position
        h*= 0.66; // reduces the length of each branch by a third each time
        if (h > 2) { // if statement to check if the length of each branch is 2 pixels or under (the exit condition of the recursive function)
            push(); // saves the current drawing state
            rotate(this.angle); // rotates the branch by the current angle calculated by the users mouseX position/width *90, granting the user control over the position of the branches
            line(0, 0, 0, -h); // draws the branch from the current origin point (on top of the trunk), going upwards 
            translate(0, -h); // moves the origin to the top of the first branch
            this.branch(h); // calls branch function recursively in order to draw the next branch
            pop(); // restores original drawing state
            
            push(); // saves the current drawing state
            rotate(-this.angle); // rotates the branch left this time, using the calculated angle by the users mouseX position/width *90, granting the user control over the position of the branches
            line(0, 0, 0, -h); // draws the branch from the current origin point (on top of the trunk), going upwards
            translate(0, -h); // moves the origin point to the top of the first left facing branch
            this.branch(h); // calls the branch function recursively in order to draw the next branch 
            pop(); // restores original drawing state
        }
    }
}