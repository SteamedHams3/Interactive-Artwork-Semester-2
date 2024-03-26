class whiteCloud
{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


draw()
{
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 50, 50);
    ellipse(this.x+30, this.y, 40, 40);
    ellipse(this.x-30, this.y, 40, 40);
}
}