var gameState = 0
var playerCount;
var database;
var player,game,form;
var allPlayers;
var cars;
var car1,car2,car3,car4;
var cari1,cari2,cari3,cari4;
var track;
var ground;

function preload(){
  cari1 = loadImage("images/car1.png");
  cari2 = loadImage("images/car2.png");
  cari3 = loadImage("images/car3.png");
  cari4 = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  track = loadImage("images/track.jpg");
}

function setup(){
  createCanvas(displayWidth-30,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.Start();
}

function draw(){
  if(playerCount === 4){
    game.Update(1);
  }

  if(gameState === 1){
    clear();
    game.Play();
  }
  if(gameState === 2){
    game.End();
  }
}