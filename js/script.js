function Player(node) {
    this.node = node;
    
    this.grace = false;
    this.replay = 3;
    this.respawnTime = -1;
    
    return true;
};

$(function(){
    var background1 = new $.gameQuery.Animation({imageURL: "img/background1.png"});
        var PLAYGROUND_WIDTH = 1000;
        var PLAYGROUND_HEIGHT = 400;
        var REFRESH_RATE = 30;
        var playerAnimation = new Array();

        var smallStarSpeed        = 1; //pixels per frame
        var mediumStarSpeed       = 3; //pixels per frame
        var bigStarSpeed          = 5; //pixels per frame

        var background2 = new $.gameQuery.Animation({imageURL: "img/background2.png"});
        var background3 = new $.gameQuery.Animation({imageURL: "img/background3.png"});
        var background4 = new $.gameQuery.Animation({imageURL: "img/background4.png"});
        var background5 = new $.gameQuery.Animation({imageURL: "img/background5.png"});
        var background6 = new $.gameQuery.Animation({imageURL: "img/background6.png"});

        $("#playground").playground({
            height: PLAYGROUND_HEIGHT, 
            width: PLAYGROUND_WIDTH, 
        keyTracker: true});

        $("#background").playground({height: PLAYGROUND_HEIGHT, width: PLAYGROUND_WIDTH})
           .addSprite("background1", {animation: background1,
                       width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
           .addSprite("background2", {animation: background2,
                       width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT,
                       posx: PLAYGROUND_WIDTH})
           .addSprite("background3", {animation: background3,
                      width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
           .addSprite("background4", {animation: background4,
                      width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT,
                      posx: PLAYGROUND_WIDTH})
           .addSprite("background5", {animation: background5,
                      width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
           .addSprite("background6", {animation: background6,
                      width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT,
                      posx: PLAYGROUND_WIDTH});

    // $().setLoadBar("loadingBar", 400);
    
    $("#startbutton").click(function(){
        $.playground().startGame(function(){
            $("#welcomeScreen").remove();
        });
    });

    $.playground().registerCallback(function() {
        /*$("#player")[0].player.update();
        
        if (jQuery.gameQuery.keyTracker[65]) { // Left (a)
            var nextpos = parseInt($("#player").css("left"))-5;
            
            if (nextpos > 0) {
              $("#player").css("left", ""+nextpos+"px");
            }
        }

        if (jQuery.gameQuery.keyTracker[68]) { // Right (d)
            var nextpos = parseInt($("#player").css("left"))+5;
            
            if (nextpos < PLAYGROUND_WIDTH - 100) {
              $("#player").css("left", ""+nextpos+"px");
            }
        }

        if (jQuery.gameQuery.keyTracker[87]) { // up (w)
            var nextpos = parseInt($("#player").css("top"))-3;
            
            if (nextpos > 0) {
              $("#player").css("top", ""+nextpos+"px");
            }
        }*/
        
        var newPos = (parseInt($("#background1").css("left")) - smallStarSpeed - PLAYGROUND_WIDTH)
                              % (-2 * PLAYGROUND_WIDTH) + PLAYGROUND_WIDTH;
        $("#background1").css("left", newPos);
        
        newPos = (parseInt($("#background2").css("left")) - smallStarSpeed - PLAYGROUND_WIDTH)
                         % (-2 * PLAYGROUND_WIDTH) + PLAYGROUND_WIDTH;
        $("#background2").css("left", newPos);

        newPos = (parseInt($("#background3").css("left")) - mediumStarSpeed - PLAYGROUND_WIDTH)
                         % (-2 * PLAYGROUND_WIDTH) + PLAYGROUND_WIDTH;
        $("#background3").css("left", newPos);
    }, REFRESH_RATE);
    
    playerAnimation["idle"] = new $.gameQuery.Animation({imageURL: "img/main.png"});
    
    $.playground().addGroup("actors", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
        .addGroup("player", {posx: 200, posy: 320,
             width: 50, height: 50})
        .addSprite("playerBody", {animation: playerAnimation["idle"], posx: 0, posy: 0, width: 50, height: 50});
});