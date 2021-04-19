class Bob
{
	constructor(x,y,r)
	{
		
		

		this.x=x;
		this.y=y;
		this.r=r;
		

		 this.body= Bodies.circle(this.x, this.y, this.r, options)
         var options = {

friction: 0.2,
density:1.2,
mass: 6

         }

		World.add(world, this.body);
       



		
	}
	display()
	{
       
       stroke("grey")
        ellipseMode(RADIUS); 
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
		 
        var Posbody =this.body.position;
			}
		}
