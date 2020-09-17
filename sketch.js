
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

function preload()
{
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png") 
}



function setup()
{
 createCanvas(400,400); 
 
  monkey=createSprite(100,315,50,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() 
{
background("white");
  
  ground=createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 
  if(keyDown("space")){
     monkey.velocityY=-14;
  }
  monkey.velocityY=monkey.velocityY+ 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  var survivalTime=0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50);
  
  drawSprites();
  
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(380,170,20,20)
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.scale=0.07;
    banana.velocityX=-3;
    banana.lifetime=-1;
    bananaGroup.add(banana);
    
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(380,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-5;
    obstacle.lifetime=-1;
    obstacleGroup.add(obstacle);
  }
}



