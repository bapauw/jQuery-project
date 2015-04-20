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
      width : 41,
      height : 79,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false,
      oldX: 0,
      oldY: 0
    },
    
    object = {
        x: 450,
        y: 275,
        
        width: 140,
        height: 90
    },
        
    keys = [],
    friction = 0.8,
    gravity = 0.2;

var OLDGRAVITY = 0.2;
 var collide = false;
canvas.width = width;
canvas.height = height;
 
function update(){
  // check keys
    
    document.getElementById("locX").innerHTML = "Player X: " + player.x + ", Object X:" + object.x;
    document.getElementById("locY").innerHTML = "Player Y: " + player.y + ", Object Y:" + object.y;
    
    if (keys[38] || keys[32])
    {
        // up arrow or space
        
        player.oldY = player.y;
        
        if (!player.jumping){
            player.jumping = true;
            player.velY = -player.speed * 2;
        }
    }
    
    if (keys[39])
    {
        // right arrow

        if (player.velX < player.speed) {
            player.oldX = player.x;
            player.velX++;         
        }
    }

    if (keys[37])
    {
        // left arrow

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
  
    if (player.y >= height-player.height - 55)
    {
        player.y = height - player.height - 55;
        player.jumping = false;
    }
 
    ctx.clearRect(0,0,width,height);
    
    ctx.drawImage(document.getElementById("mainChar"), player.x, player.y);
    ctx.drawImage(document.getElementById("objectHill"), object.x, object.y); 
    
    if (hitTestObject(player, object) && (keys[37] || keys[39]) && !player.jumping){
        stopMovementHor();
        player.velX = 0;
    }
    if(hitTestObject(player, object) && player.jumping){
        
        gravity = 0;
        player.velY = 0;
        //player.jumping = false;
    }
    
    if(!hitTestObject(player, object)){
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
 
window.addEventListener("load",function(){
    update();
});

function stopMovementHor(){
    player.x = player.oldX;
}

function stopMovementVert(){
      player.y = player.oldY;
}

function hitTestObject(object1, object2){    
    if(object1.x + object1.width < object2.x) return false;
    if(object1.x > object2.x + object2.width) return false;
    if(object1.y + object1.height < object2.y) return false;
    if(object1.y > object2.y + object2.height) return false;
    return true;
}
function verHitTestObject(object1, object2){
    if(object1.y + object1.height < object2.y) return false;
    if(object1.y > object2.y + object2.height) return false;     
    return true;
}