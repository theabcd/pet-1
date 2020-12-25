//Create variables here
var dog,dogImg,happydogImg,database,foodS,foodStock
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happydogImg=loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,350,10,60)
dog.addImage("normal",dogImg)
dog.scale=0.2
database=firebase.database();
foodStock=database.ref('Food')
foodStock.on("value",readStock)
foodStock.set(20)
}


function draw() {  
background("green")
if(foodS!==undefined){
text(20)
fill(250)
text("Note:Press UP_ARROW key to feed Drogo Milk")
text("food remaining:"+foodS,150,150)

}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImg)
}
if(keyWentUp(UP_ARROW)){
dog.addImage(dogImg)
}
if(foodS===0){
  foddS=20
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
database.ref('/').update({
  Food:x
})  
}


