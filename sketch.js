var galaxy,galaxyImg;
var rocket,rocketImg;
var asteroid, asteroidImg, asteroidGroup;
var star, starImg, starGroup;
var endImg, gameEnd, restart, restartImg;
var gameState = PLAY;
var PLAY = 1;
var END = 0 ;
var gameState = END;
var distance = 0;
var score = 0;

function preload(){
    galaxyImg = loadImage("background.png");
    rocketImg = loadImage("player.png");
    asteroidImg = loadImage("obstacle.png");
    starImg = loadImage("points.png");
    endImg = loadImage("over.png");
   restartImg = loadImage("download.png");
  }



function setup() {
    createCanvas(600,600);
   
    galaxy = createSprite(300,300);
    galaxy.addImage("galaxy", galaxyImg);
    galaxy.velocityY =2;
    galaxy.scale =2;
  
   
 rocket = createSprite(510,510,10,20);
 rocket.addImage("rocket", rocketImg);
 rocket.scale =0.35;

 restart = createSprite(570,30,10,10);
 restart.addImage("restart",restartImg);
 restart.scale = 0.25;

 distance = 0;
 score =0;

 asteroidGroup = new Group();
 starGroup = new Group();
}

function draw() {
  drawSprites();
  background = 255;
  textSize(20);
  fill(255);
  text("Distance Travelled: "+ distance,10,20);
  textSize(20);
  fill(255);
  text("Score: "+ score,10,40);
    rocket.x = World.mouseX;
   
   
     spawnAsteroids();
      spawnStars();
     



     distance = distance + Math.round(getFrameRate()/25)
   
         if (galaxy.y > 400){
         galaxy.y = galaxy.width/2;
        
     }

         if (rocket.isTouching(starGroup)){
         starGroup.destroyEach();
         score = score+2;
     }
     
         if (rocket.isTouching(asteroidGroup)){
          galaxy.velocityY = 0;    
          asteroidGroup.velocityY = 0;
         starGroup.velocityY = 0;
          gameEnd = createSprite(300,300,10,10);
         gameEnd.addImage("gameEnd", endImg);
        

         gameEnd.scale = 0.5;
         distance = distance + 0;
         score = score + 0;
         
         var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: asteroidGroup.addImage(asteroidImg);
              break;
            }

            var rand = Math.round(random(1,6));
            switch(rand) {
              case 1: starGroup.addImage(starImg);
                      break;}
        
        }

       if(mousePressedOver(restart)) {
         reset();
        }
    
    
    
 }

function spawnAsteroids(){
    if (frameCount % 150 === 0) {
  var asteroid = createSprite(100,100,100,10);
  asteroid.addImage("asteroid", asteroidImg);
  asteroid.velocityY =8;
  asteroid.x = Math.round(random(10,590))
  asteroid.scale = 0.35;
   
  asteroidGroup.add(asteroid);

  
    }
    
}

function spawnStars(){
    if (frameCount % 250 === 0) {
 var star  =createSprite(100,100,100,10);
 star.addImage("star", starImg);
 star.velocityY =5;
 star.scale = 0.15;
 star.x = Math.round(random(10,590))
 
 starGroup.add(star);
}   
}


function reset(){
  draw();
}
