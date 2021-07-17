class Game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    Update(state){
        database.ref("/").update({
            gameState : state,
        });
    }
    Start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(cari1);
        car2 = createSprite(300,200);
        car2.addImage(cari2);
        car3 = createSprite(500,200);
        car3.addImage(cari3);
        car4 = createSprite(700,200); 
        car4.addImage(cari4);
        cars = [car1,car2,car3,car4];
    }
    Play(){
        form.hide();
        textSize(30);
        // text("Game has Started", 120, 100);
        Player.getInfo();
        if(allPlayers !== undefined){
            background(ground);
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index = 0;
            var xPos = 200;
            var yPos;            
            for (var plr in allPlayers) {
               /*  if(plr === "Player" + player.index){
                    fill("red");
                }
                else fill("black");
                displayPos += 20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPos) */
                index+=1;
                xPos+=200;
                yPos = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = xPos;
                cars[index-1].y = yPos;
                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }    
        }
        if(keyDown("up")&&player.index !== null){
            player.distance += 50;
            player.update();
        }
        if(player.distance>3860){
            gameState=2;
        }
        drawSprites();
    }
    End(){
        console.log("GAME ENDED");
        
    }
}