$(document).ready(function() {
    document.getElementById("audioTheme").volume = 0.5;
});

function drawObject(img, flipH, flipV) {
    var width = player.width;
    var height = player.height;
    
    var scaleH = flipH ? -1 : 1,
        scaleV = flipV ? -1 : 1,
        posX = flipH ? (width * -1) - player.x : player.x,
        posY = flipV ? height * -1 : player.y;
    
    ctx.save();
    ctx.scale(scaleH, scaleV);
    ctx.drawImage(img, posX, posY, width, height);
    ctx.restore();
};

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 400,
    
    player = {
        x : 300,
        y : height - 5,
        width : 60,
        height : 60,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        oldX: 0,
        oldY: 0,
        sprite: document.getElementById("mainChar"),
        direction: "right",
    },
    
    object = {
        x: 450,
        y: 275,
        
        width: 150,
        height: 0
    },
        
    keys = [],
    friction = 0.8,
    gravity = 0.2;

    var OLDGRAVITY = 0.2;
    var collide = false;
    
    canvas.width = width;
    canvas.height = height;
 
function update() {
    $("#locX").text("Player X: " + player.x + ", Object X:" + object.x);
    $("#locY").text("Player Y: " + player.y + ", Object Y:" + object.y);
    
    ctx.clearRect(0,0, width,height);
    
    // drawObject(player.sprite, 0,0);
    // ctx.drawImage(document.getElementById("mainChar"), player.x, player.y);
    
    ctx.drawImage(document.getElementById("objectHill"), object.x, object.y);
    
    if (keys[38] || keys[32]) {
        // Omhoog, spatie
        
        player.oldY = player.y;
        
        if (!player.jumping) {
            player.jumping = true;
            player.velY = -player.speed * 2;
            
            var audio = new Audio('audio/jump.wav');
                audio.play();
        }
    }
    
    if (keys[39]) {
        // Rechts

        player.direction = "right";

        if (player.direction == "right")
            drawObject(player.sprite, 0,0);

        if (player.velX < player.speed) {
            player.oldX = player.x;
            player.velX++;    
        }
        
        
    }
    else if (keys[37]) {
        // Links
        
        player.direction = "left";

        if (player.direction == "left")
            drawObject(player.sprite, 1,0);

        if (player.velX > -player.speed){
            player.oldX = player.x;
            player.velX--;
        }
    }
    
    player.velX *= friction;
    player.velY += gravity;
 
    player.x += player.velX;
    player.y += player.velY;
 
    if (player.x >= width-player.width)
    {
        player.x = width-player.width;
    }
    else if (player.x <= 0)
    {         
        player.x = 0;     
    }
  
    if (player.y >= height-player.height - 80)
    {
        player.y = height - player.height - 80;
        player.jumping = false;
    }

    //if (hitTestObject(player, object)) {
    
    ctx.clearRect(0,0,width,height);

    drawObject(player.sprite, 0,0);
    //ctx.drawImage(document.getElementById("mainChar"), player.x, player.y);
    ctx.drawImage(document.getElementById("objectHill"), object.x, object.y);

    if (hitTestObject(player, object) && (keys[37] || keys[39]) && !player.jumping) {
        stopMovementHor();
        player.velX = 0;
    }

    if (hitTestObject(player, object) && player.jumping)
        stopMovementVert();

    if (hitTestObject(player, object) && player.jumping) {
        gravity = 0;
        player.velY = 0;

        //player.jumping = false;
    }

    if (!hitTestObject(player, object)) {
        gravity = OLDGRAVITY;   
    }

    requestAnimationFrame(update);
}
 
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
 
window.addEventListener("load",function() {
    update();
});

function stopMovementHor() {
    player.x = player.oldX;
}

function stopMovementVert() {
    player.y = player.oldY;
}

function hitTestObject(object1, object2) {
    console.log("player x: " + player.x);
    console.log("player oldX: " + player.oldX);
    console.log("object X: " + object.x);
    
    if (object1.x + object1.width < object2.x) return false;
    if (object1.x > object2.x + object2.width) return false;
    if (object1.y + object1.height < object2.y) return false;
    if (object1.y > object2.y + object2.height) return false;
    
    return true;
}

function stopMovementVert() {
    player.y = player.oldY;
}

function hitTestObject(object1, object2) {
    if (object1.x + object1.width < object2.x) return false;
    if (object1.x > object2.x + object2.width) return false;
    if (object1.y + object1.height < object2.y) return false;
    if (object1.y > object2.y + object2.height) return false;
    
    return true;
}
    
function verHitTestObject(object1, object2) {
    if (object1.y + object1.height < object2.y) return false;
    if (object1.y > object2.y + object2.height) return false;
    
    return true;
}