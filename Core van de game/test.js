var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x = 275;
var y = 380;

var key = [];

var ship = new Ship();
var bullet = new Bullet();

function onkey(e){
	e = e || window.event;
	key[e.keyCode] = (e.type == "keydown");
}
document.body.addEventListener("keydown", onkey, true);
document.body.addEventListener("keyup", onkey, true);
createShip();
function update(){
	context.fillStyle = "#ff0000";
	context.fillRect(0, 0, 550, 400);
	
	context.fillStyle = "#000000";
	context.fillRect(x-10, y-10, 21, 21);
	
	if(key[37]) x = x - 5;
	if(key[39]) x = x + 5;
	if(key[32]) createBullet();
	updateBullets();
	/*if(bullet != null){
		if(hitTestObject(bullet, ship)){
			alert("Bullet x: " + bullet.x + "Bullet y: " + bullet.y + "Ship x: " + ship.x + "Ship y: "+ ship.y);
			ship.speed = 0;
		}
	}*/
}
setInterval(update, 25);

function hitTestObject(object1, object2){
	if(object1.x + object1.width < object2.x) return false;
	if(object1.x > object2.x + object2.width) return false;
	if(object1.y + object1.height < object2.y) return false;
	if(object1.y > object2.y + object2.height) return false;
	return true;
}