class whiteCloud // creates new whiteCLoud class
{
    constructor(x, y) { // constructor to initialise the x and y coordinates of the cloud
        this.x = x; // sets the x coordinate of the cloud
        this.y = y; // sets the y coordinate of the cloud
    }


draw() // draws the cloud
{
    noStroke(); // removes the stroke
    fill(255); // sets the fill colour to white
    ellipse(this.x, this.y, 50, 50); // draws the main ellipse to represent the center of the cloud
    ellipse(this.x+30, this.y, 40, 40); // draws smaller ellipse to the right
    ellipse(this.x-30, this.y, 40, 40); // draws smaller ellipse to the left
}
}