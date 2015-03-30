var background1 = new $.gameQuery.Animation({imageURL: "background1.png"});
        var PLAYGROUND_WIDTH	= 700;
        var PLAYGROUND_HEIGHT	= 250;

        var background2 = new $.gameQuery.Animation({imageURL: "background2.png"});
        var background3 = new $.gameQuery.Animation({imageURL: "background3.png"});
        var background4 = new $.gameQuery.Animation({imageURL: "background4.png"});
        var background5 = new $.gameQuery.Animation({imageURL: "background5.png"});
        var background6 = new $.gameQuery.Animation({imageURL: "background6.png"});

        $("#background").
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