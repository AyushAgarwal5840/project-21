var bullet1,bullet2,bullet3,bullet4;
var wall1;
var speed;
var weight1,weight2,weight3,weight4;
var thickness;
var bullet;
var LbuLLet , LwaLL;
var bulletRightEdge;
var wallLeftEdge;
var lbullet,lwall;



function setup() {
  createCanvas(900,900);
  //Car 1 Sprites.
  bullet1=createSprite(0, 200, 60, 20);
  
thickness=random(22,83);

  speed=random(50,90);
  bullet1.velocityX=speed;
  weight1=round(random(0,200));
  bullet1.setCollider("rectangle",0,0,60,60);
  //car1.debug=true;

  //Car 2 Sprites
  bullet2=createSprite(0, 400, 60, 20);
  speed=round(random(80,10));
  weight2=random(400,1500);
  bullet2.velocityX=speed;
  bullet2.setCollider("rectangle",0,0,60,60);

  //Car 3 Sprites
 bullet3=createSprite(0, 600, 60, 20);
  speed=round(random(50,100));
  weight3=random(400,1500);
  bullet3.velocityX=speed;
  bullet3.setCollider("rectangle",0,0,60,60);

  //Car 4 Sprites
  bullet4=createSprite(0, 800, 60, 20);
  speed=round(random(30,200));
  weight4=random(400,1500);
  bullet4.velocityX=speed;
  bullet4.setCollider("rectangle",0,0,60,60);

  wall1=createSprite(750,200,25,100);
  wall3=createSprite(750,600,25,100);
  wall2=createSprite(750,400,25,100);
  wall4=createSprite(750,800,25,100);
  
}

function draw() {
  background(0);  
  checkCollision(bullet1,speed,weight1,wall1);
  checkCollision(bullet2,speed,weight2,wall2);
  checkCollision(bullet3,speed,weight3,wall3);
  checkCollision(bullet4,speed,weight4,wall4);
  
  drawSprites();
}

function checkCollision(obj1,speed,weight,wall)
{
  if(wall.x-(obj1.x)<(wall.width/2+obj1.width/2))
  {
    obj1.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500.0;
    if(deformation>=180)
    {
      obj1.shapeColor="RED";
    }
    else if(deformation>=80 && deformation<180)
    {
      obj1.shapeColor="Yellow";
    }
    else
    {
      obj1.shapeColor="Green";
    }
  }
}

function hasCollided(LbuLLet,LwaLL){
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
  }
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}
