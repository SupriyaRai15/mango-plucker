class BOY 
{
    constructor(x,y,width,height)
    {
        var options=
        {
           'isStatic' : true,
           'restitutions' : 0,
           'friction' : 1,
           'density' : 1.2 
        }
           
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.x = x;
     this.y = y;
     this.image = loadImage("Boy1.png");
     World.add(world,this.body);    

    }


    display()
    {
        push();
        stroke("white");
        strokeWeight(4);
        fill("Red");
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}