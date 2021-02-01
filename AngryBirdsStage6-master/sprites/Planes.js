class Planes extends BaseClass {
    constructor(x, y,i){
      super(x,y,190,150);
      if (i === 1){
        this.image = loadImage("sprites/plane 2_Wondershare.png");

      }
      if (i === 2){
        this.image = loadImage("sprites/plane 3_Wondershare.png")
      }
      if (i === 3){
        this.image = loadImage("sprites/plane_Wondershare.png")
      }
      this.Visiblity = 255;
    }
  
   display(){
    this.body.velocity.x = 2;
    this.body.velocity.y = 0;
     

   }
  
  
  
  };