var PLAY = 1;
var END = 0;
var gameState = 1;
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameOver;
var gameOverImg;
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,450,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  boy.debug = true;
  
     treasureCollection = 0  

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
boyGroup=new Group();
}

function draw() {
  if(gameState === PLAY){
    
  
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/3.5;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
          treasureCollection = treasureCollection + 50
      cashG.destroyEach();
    }
    else if (diamondsG.isTouching(boy)) {
                treasureCollection = treasureCollection + 100
      diamondsG.destroyEach();
      
    }else if(jwelleryG.isTouching(boy)) {
                treasureCollection = treasureCollection + 70
      jwelleryG.destroyEach();
      
    }else{
      if(swordGroup.isTouching(boy)) {
                gameState = END;
        swordGroup.destroyEach();
        jwelleryG.destroyEach();
         diamondsG.destroyEach();
        cashG.destroyEach();
       
        gameOver = createSprite (200,200,10,10);
        gameOver.addImage (gameOverImg);
          gameOver.scale=0.9;

    }
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
    
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }
}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
