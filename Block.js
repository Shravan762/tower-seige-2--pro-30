class Block{
  constructor(x,y,width,height,options)  {
    var options = {

        restitution :0.4,
        friction :0.0,
  }

    this.image = loadImage("block.png");
    this.Visiblity = 255;
      
      this.body = Bodies.rectangle(x, y, width, height,);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
    }
else{

  World.remove(world, this.body);
  push();
  this.Visiblity = this.Visiblity - 5;
  tint(255,this.Visiblity);
  image(this.image, this.body.position.x, this.body.position.y,width, height);
  pop();
}

}


};