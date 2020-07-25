class Ball {
    constructor(x,y) {
      var options = {
        isStatic:false,
		restitution:0.3,
		friction:0.5,
    density:1.2
      }
      this.body = Bodies.circle(x,y,5,options,0);

      this.img=loadImage("images/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      
      push();
     // var radius=this.body.radius;
      imageMode(CENTER);
      console.log(this.body);
      image(this.img,this.body.position.x,this.body.position.y);
      pop();
    }
  }
  