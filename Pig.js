class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    
    this.Visiblity=255
  }

  display(){

    console.log(this.body.speed);

    if(this.body.speed < 3){
      super.display();
    }

    else{

       //remove the pig from game
     World.remove(world,this.body);

      push();//store state of all objects
      this.Visiblity -= 5;
      // every time reduce the visiblity so that pig becomes transaparent
      //to make it transparent, we will the tint function ( 255 ,0)
      tint(255,this.Visiblity);
       //image(imagename,x,y,width,height)
      image(this.image,this.body.poistion.x,this.body.position.y,50,50);
      
      pop();
    }


  }

};