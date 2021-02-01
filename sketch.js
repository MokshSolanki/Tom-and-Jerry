
function preload() {
    //load the images here
    tomImage = loadImage("images/cat1.png");
    backGroundimg = loadImage("images/garden.png");
    jerryImage = loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600);
tom.addImage("tom",tomImage);
tom.scale = 0.3;
jerry = createSprite(200,600);
jerry.addImage("jerry",jerryImage);
jerry.scale = 0.15;
}

function draw() {

    background(backGroundimg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning");
 }


}
