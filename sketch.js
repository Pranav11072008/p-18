var bananaImage, ObstacleImage
var obstaclesGroup,bananaGroup
var backGround, score
var backImage 
var player,player1
var banana,banana1,stone,stone1
var jungle1,jungle
var ground
var foodgroup, obstaclegroup


function preload(){
player = loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_09.png","Monkey_10.png")
banana = loadImage("banana.png")
jungle = loadImage("jungle.jpg")
stone = loadImage("stone.png")

}   

function setup() {
  createCanvas(400, 400);
   jungle1 = createSprite(10,300,10,10)
   jungle1.addImage(jungle)
   player1 = createSprite(50,310,10,10)
player1.addImage(player)
ground = createSprite(200,350,400,20)
 score = 0
 obstacleGroup=new Group()
 bananaGroup=new Group()
} 


function draw() {
  background(220);
player1.scale = 0.1

jungle1.velocityX = -10
ground.visible = true
player1.collide(ground)

if(jungle1.x<200){
  jungle1.x = jungle1.width/2
}
 player1.velocityY = player1.velocityY + 0.8;

if(keyDown("space") && player1.y >= 280){
      player1.velocityY = -12 ;
    }
foodGroup();
obstaclesGroup();
if(bananaGroup.isTouching(player1)){
  score=score+1
 }

if(obstacleGroup.isTouching(player1)){
  player1.scale = 0.2
}
drawSprites();
stroke("white")
textSize(20)
fill("white")
text("score:"+ score, 300,50)


}

function foodGroup(){
   if(World.frameCount % 90 === 0){
  banana1 = createSprite(300,210,10,10)
  banana1.addImage(banana)
  banana1.scale = 0.09
  banana1.velocityX = -3
  banana1.lifetime = 134;
bananaGroup.add(banana1)

  
}
}

function obstaclesGroup(){
  if(World.frameCount % 60 === 0){
    stone1 = createSprite(400,280,10,10)
    stone1.addImage(stone)
    stone1.scale = 0.1
    
    stone1.velocityX = -3 
    stone1.lifetime = 134
obstacleGroup.add(stone1)
  }
}