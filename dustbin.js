class db{     //db=dustbin
    constructor(x,y,width,height){ 

        var box_options ={
            isStatic:true
        }
    
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        this.img=loadImage("images/dustbin.png");
        World.add(world,this.box); 
    }
    display(){
        push();
        rectMode(CENTER);
        fill("red");
    rect(900,900,0,0);
    image(this.img,this.box.position.x,this.box.position.y,this.width,this.height);
    pop();
    }
}