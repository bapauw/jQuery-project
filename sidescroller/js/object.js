var objectList = new Array();
var VERT_DISTANCE = 50;
var _startDISTANCE = 250;


function Object(x,y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 20;
    var image = new Image(100, 50);
    image.src = "img/plate.png";
    ctx.drawImage(image, x, y);
    
}

function createObject(){
    var x = Math.floor(Math.random() * canvas.width) + 1;
    var object = new Object(x,_startDISTANCE + (VERT_DISTANCE * objectList.length));
    alert('hello');
    objectList.push(object);
}

function createInitGameObjects(){
    for(var i = 0; i < 5; i++){
        var x = Math.floor(Math.random() * canvas.width) + 1;
        var object = new Object(x, _startDISTANCE - (VERT_DISTANCE * objectList.length));
        objectList.push(object);
    }
}

function recreateObject(){
    for(var i = 0; i < objectList.length; i++){
        var object = new Object(objectList[i].x, objectList[i].y);
    }
}