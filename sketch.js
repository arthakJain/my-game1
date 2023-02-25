function preload(){
bgimg=loadImage("bg1.jpg")
rocketImg=loadImage("rocket.png")
}

function setup() {
 createCanvas(400,400)
 bg=createSprite(200,200,400,400)
 bg.addImage(bgimg)
 bg.scale=2.2

 rocket=createSprite(150,200)
 rocket.addImage(rocketImg)
 rocket.scale=0.9
}

function draw() {
 background("black")
 drawSprites()
 

}