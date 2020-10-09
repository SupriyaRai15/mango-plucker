class TREE
{
    constructor()
    {
        var options=
        {
           'isStatic' : false,           
           'restitution' : 1,
           'friction' : 1,
           'density' : 1
        }
        
        this.image = loadImage("tree.png");
        this.width = 500;
        this.height = 500;
        this.body = Bodies.rectangle(this.x,this.y,width,height,options);

    }
    
    display()
    {
        push();
        stroke("DARKBROWN");
        strokeWeight(4);
        fill("Brown");
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 950, 450, this.width, this.height);
        pop();
    }

}