
var garden,gardeni
var cat,cat_sitting,cat_walking,cat_finish;
var rat,rat_standing,rat_teasing,rat_finish;

function preload() {
    gardeni = loadImage("garden.png");
    cat_sitting = loadImage("cat1.png");
    cat_walking = loadAnimation("cat2.png","cat3.png");
    cat_finish = loadImage("cat4.png");
    rat_standing= loadImage("mouse1.png");
    rat_teasing= loadAnimation("mouse2.png","mouse3.png");
    rat_finish = loadImage("mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addAnimation("garden",gardeni);

    cat = createSprite(800,600);
    cat.addImage("sitting",cat_sitting);
    cat.addAnimation("walking",cat_walking);
    cat.addAnimation("finish",cat_finish);
    cat.scale = 0.09;
   

    rat = createSprite(150,600);
    rat.addImage("standing",rat_standing);
    rat.addAnimation("teasing",rat_teasing);
    rat.addAnimation("finish",rat_finish);
    cat.setCollider("rectangle",0,0,300,300)
    rat.setCollider("rectangle",0,0,300,300);
    rat.scale = 0.1;
}

function draw() {

    background(0);
    

    if(cat.x - rat.x < cat.width/2 + rat.width/2
       && rat.x - cat.x < cat.width/2 + rat.width/2
        && cat.y - rat.y < cat.height/2 + rat.height/2
        && rat.y - cat.y < cat.height/2 + rat.height/2){
    cat.changeAnimation("finish",cat_finish);
    rat.changeAnimation("finish",rat_finish);
    cat.velocityX = 0;
    if(keyWentDown("left_arrow")){
        cat.changeAnimation("finish",cat_finish);
        rat.changeAnimation("finish",rat_finish);
        cat.velocityX = -5;
    }
    if(keyWentUp("left_arrow")){
        cat.changeAnimation("finish",cat_finish);
        rat.changeAnimation("finish",rat_finish);
        cat.velocityX = 0;
    }
    }
keyPressed();
    drawSprites();
}


function keyPressed(){
if(keyWentDown("left_arrow")){
    cat.changeAnimation("walking",cat_walking);
    rat.changeAnimation("teasing",rat_teasing);
    cat.velocityX = -5;
}
if(keyWentUp("left_arrow")){
    cat.changeAnimation("sitting",cat_sitting);
    rat.changeAnimation("standing",rat_standing);
    cat.velocityX = 0;
}
}
