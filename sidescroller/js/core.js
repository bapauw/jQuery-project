(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
 
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 400,
    
    player = {
      x : width/2,
      y : height - 5,
      width : 41,
      height : 79,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false
    },
    
    object = {
        x: width / 2,
        y: height - 122,
        
        width: 30,
        height: 60
    },
        
    keys = [],
    friction = 0.8,
    gravity = 0.2;
 
canvas.width = width;
canvas.height = height;
 
function update(){
  // check keys
    
    if (keys[38] || keys[32]) {
        // up arrow or space
        
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
      }
    }
    
    if (keys[39]) {
        // right arrow
        
        if (player.velX < player.speed) {             
            player.velX++;         
         }     
    }   
    
    if (keys[37]) {         
        // left arrow   
        
        if (player.velX > -player.speed) {
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
  
    if (player.y >= height-player.height - 55){
        player.y = height - player.height - 55;
        player.jumping = false;
    }
 
    ctx.clearRect(0,0,width,height);
    
    ctx.drawImage(document.getElementById("mainChar"), player.x, player.y);
    ctx.drawImage(document.getElementById("objectHill"), object.x, object.y); 
    
    // ctx.fillStyle = "red";
    // ctx.fillRect(player.x, player.y, player.width, player.height);
 
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