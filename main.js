var dino = document.querySelector(".dino");
var board = document.querySelector(".board");
var floor = document.querySelector(".floor");
var score = document.querySelector(".score");
var obstacule = document.querySelector(".obstacule");
var obstacule2 = document.querySelector(".obstacule-2");
var gameOverText = document.querySelector(".gameover");
var restartBtn = document.querySelector(".restart-btn");
var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var c3 = document.querySelector(".c3");
var c4 = document.querySelector(".c4");
var c5 = document.querySelector(".c5");
var c6 = document.querySelector(".c6");


document.addEventListener("keydown", dinoJump);
dino.addEventListener("animationend", dinoStill);
document.addEventListener("keydown", startGame);
restartBtn.addEventListener("click", restartGame);

function randomClouds(){
    var cloudsR = Math.round(Math.random(0, 3));

    if (cloudsR == 0) {
        c2.style.animation = 'cloudsMovement 14s linear';
        c4.style.animation = 'cloudsMovement2 16s linear';
        c4.addEventListener('animationend', function(){
            c2.style.animation = 'none';
            c4.style.animation = 'none';
        })
    } else if (cloudsR == 1) {
        c1.style.animation = 'cloudsMovement 14s linear';
        c6.style.animation = 'cloudsMovement2 16s linear';
        c6.addEventListener('animationend', function(){
            c1.style.animation = 'none';
            c6.style.animation = 'none';
        })
    } else if (cloudsR == 2){
        c3.style.animation = 'cloudsMovement 14s linear';
        c5.style.animation = 'cloudsMovement2 16s linear';
        c5.addEventListener('animationend', function(){
            c3.style.animation = 'none';
            c5.style.animation = 'none';
        })
    }
}

function randomObstacules(){
    var obstaculeR = Math.round(Math.random(0, 2));

    if (obstaculeR == 0) {
        obstacule.style.animation = "obstaculeMovement 3.3s linear infinite";
        obstacule2.style.animation = "none";
    } else {
        obstacule2.style.animation = "obstaculeMovement 3.3s linear infinite";
        obstacule.style.animation = "none";
    }
}

function restartGame(){
    document.addEventListener("keydown", startGame);
    dino.classList.replace("dino-died", "dino");
    floor.style.animationPlayState = "paused";
    obstacule.style.animation = "none";
    obstacule2.style.animation = "none";
    c1.style.animation = 'none';
    c2.style.animation = 'none';
    c3.style.animation = 'none';
    c4.style.animation = 'none';
    c5.style.animation = 'none';
    c6.style.animation = 'none';
    score.innerHTML = "0000";
    gameOverText.style.display = "none";
    restartBtn.style.display = "none";
}


function startGame(e) {
    document.removeEventListener("keydown", startGame);
    if(e.keyCode == 32) {
    random = setInterval(() => {
        randomObstacules();
    }, 3300);
    ranClouds= setInterval(() => {
        randomClouds();
    }, 5000);
    dino.style.animationPlayState = "running";
    dinoJump(e);
    setTimeout(runningAnimations, 500);
    }
}

function runningAnimations(){
    dino.classList.add("dino-run");
    floor.style.animationPlayState = "running";
    var scoreUp = 0;
    scoreInt = window.setInterval(function(){
    score.innerHTML = ('0000'+scoreUp).slice(-4);
    scoreUp++;
},100);}

function dinoJump(e) {
    if (e.keyCode == 32 || e.keyCode == 38) {
        dino.classList.remove("dino-run");
        dino.classList.add("dino-jump");
    }
}

function dinoStill(){
    dino.classList.replace("dino-jump", "dino-run");
}

var checkDead = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let obstaculeLeft = parseInt(window.getComputedStyle(obstacule).getPropertyValue("left"));
    let obstacule2Left = parseInt(window.getComputedStyle(obstacule2).getPropertyValue("left"));


    if(obstaculeLeft < 116 && obstaculeLeft > 0 && dinoTop >= 170 || obstacule2Left < 116 && obstacule2Left > 0 && dinoTop >= 170){
        gameOver();
    }
    
    
}, 10);


    
function gameOver() {
    dino.classList.remove("dino-run");
    dino.classList.replace("dino", "dino-died");
    dino.style.animationPlayState = "paused";
    floor.style.animationPlayState = "paused";
    obstacule.style.animationPlayState = "paused";
    obstacule2.style.animationPlayState = "paused";
    c1.style.animationPlayState = 'paused';
    c2.style.animationPlayState = 'paused';
    c3.style.animationPlayState = 'paused';
    c4.style.animationPlayState = 'paused';
    c5.style.animationPlayState = 'paused';
    c6.style.animationPlayState = 'paused';
    clearInterval(scoreInt);
    clearInterval(random);
    clearInterval(ranClouds);
    gameOverText.style.display = "block";
    restartBtn.style.display = "block";

}




