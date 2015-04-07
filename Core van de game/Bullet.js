var bulletList = new Array();

function Bullet(x, y){
	this.x = x;
	this.y = y;
	this.width = 11;
	this.heigth = 11;
}

function createBullet(){
	var bullet = new Bullet(x, y);
	bulletList.push(bullet);
}

function updateBullets(){
	for(var i = 0; i < bulletList.length; i++){
		var bullet = bulletList[i];
		context.fillStyle = "#000000";
		context.fillRect(bullet.x-5, bullet.y-5, 11, 11);
		bullet.y = bullet.y -5;
	}
}