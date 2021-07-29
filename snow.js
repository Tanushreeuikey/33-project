class Snow
{
    constructor()
    {
        var option1=
	{    	
		isStatic:false,
		restitution:0,
		friction:0.001,
        frictionStatic:0.5,
        frictionAir:0.01,
        density:0.0001
    
    }
       this.body=Bodies.circle(random(0,1200),random(0,700),3,option1)
       this.image=loadImage("snow4.webp")

       World.add(world,this.body);
    }
     
    display()
    {
        var pos =this.body.position;
       
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(pos.x,pos.y,3)
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, 20, 20);

        if(pos.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,1200),y:-1})
        }
        
       
    }
}