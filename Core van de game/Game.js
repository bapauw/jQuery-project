//Load sprites
var mainChar = loadSprite("mainchar");
var enemy = loadSprite("enemy");

//Set sprites
mainchar.x = 275;
mainchar.y = 380;

function update(){
	if(key[37]) mainchar.turn(-2);
	if(key[39]) mainchar.turn(2);
	if(key[40]) mainchar.move(5, 0);
	if(key[38]) mainchar.move(-5, 0);
	
	//Draw everything
	clearScreen();
	mainchar.draw();
	enemy.draw();
	
	context.fillStyle = "#000000";
}

setInterval(update, 25);
