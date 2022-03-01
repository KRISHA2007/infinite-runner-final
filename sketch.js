var background

function preload(){
background=loadImage("tower.png")
rocket=loadImage("rocket-removebg-preview.png")
meteor=loadImage("m-removebg-preview.png")
}

function setup() {
    createCanvas(600, 600);

    background = createSprite(300,300)
    background.addImage("background",background)
    background.velocityY=1
}

function draw() {
 drawSprites()
}