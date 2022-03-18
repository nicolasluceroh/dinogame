const dino = document.querySelector(".dino");
var board = document.querySelector(".board");
var floor = document.querySelector(".floor");
var score = document.querySelector(".score");

var dinoPosY = floorY;
var floorY = 22;

var jumping = false;
var still = false;


document.addEventListener("keydown", handleKeyDown);


function handleKeyDown(e) {
    if(e.keyCode == 32){
        dinoJump();
    }
}

function dinoJump() {
    if()
        dino.classList.replace("dino-run", "dino-jump");
        jumping = true;
}

function dinoStill(){
    if(jumping) {
        dino.classList.replace("dino-jump", "dino-run");
        still = true;
    }
}

function moveDino() {
    if(jumping) {
        dinoStill();
    }
    jumping = false;
}