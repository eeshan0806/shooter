var player;
var angle = 30;
var zombieGroup;
var zombieCount = 0;
var bulletGroup;
var score = 0;

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  zombieGroup = createGroup();
  bulletGroup = createGroup();
  player = createSprite(displayWidth/2, displayHeight-50, 50, 50);
}

function draw() {
  background(0);
  angle = angle + 10;
  if(keyDown (LEFT_ARROW)){
    player.rotation = -angle;
  }
  if(keyDown (RIGHT_ARROW)){
    player.rotation = angle;
  }
  if(keyDown("space")){
    var bullet = createSprite(player.x,player.y,10,10);
    //bullet.rotation = player.rotation;
    bullet.velocityY = -5;
    //bullet.lifetime = 100;
    bulletGroup.add(bullet);
    
  }

  zombieSpawn();
    

  for(var i = 0; i<zombieCount; i++ ){
    if(bulletGroup.isTouching(zombieGroup[i])){
      score++;
      //zombieGroup[i].remove();
    }
  
  }
  text("score: "+score,width/2,100);

  drawSprites();
}

function zombieSpawn(){
  if(frameCount%50 === 0){
    var zombie = createSprite(random(0,width-20),random(0,height-60),20,20);
    zombie.velocityX = random(-3,3);
    zombie.velocityY = random(-3,3);
     zombie.lifetime = 100;

    zombieGroup.add(zombie);
    zombieCount++;

  
  }
  
}



/*function keyPressed(){
  
}*/
