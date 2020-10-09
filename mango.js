class MANGO 
{
    constructor(x,y,width,height)
    {
        var options=
        {
            'isStatic' : true,
            'restitution' : 0,
            'friction' : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("MANGO1.png");
        World.add(world,this.body);    
        
       }
   
   
       display()
       {
           push();
           stroke("white");
           strokeWeight(4);
           fill("Red");
           translate(this.body.position.x, this.body.position.y);
           rotate(this.body.angle);
           imageMode(CENTER);
           image(this.image,0,0, this.width, this.height);
           pop();
       }
    }
