class Ball {

constructor(x,y){
var Options={
  
  
    'friction':0,
    'density':7.8,
    }

    this.body=Bodies.circle(x,y,95,Options);
    this.image=loadImage("polygon.png");

    World.add(world,this.body);


   
}

display(){
push();
this.body.position.x = mouseX;
this.body.position.y = mouseY;
fill(176,219,83);
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,50,50);
this.body.position.x = mouseX;
this.body.position.y = mouseY;
pop();

}

};