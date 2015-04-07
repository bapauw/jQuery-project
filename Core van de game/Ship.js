var speed = 2;
var ship;

function Ship(){
	this.x = 225;
	this.y = 10;
	this.width = 20;
	this.height = 20;
}

function createShip(){
	var ship = new Ship();
}

function updateShip(){

	context.fillStyle = "#000000";
	context.fillRect(ship.x - 5, ship.y - 5, 20, 20);
	ship.x += speed;

	if(ship.x > 540 || ship.x < 10){
		speed *= -1;
	}
}
setInterval(updateShip, 25);