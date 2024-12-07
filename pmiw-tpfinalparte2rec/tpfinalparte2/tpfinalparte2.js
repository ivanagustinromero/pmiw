// Lilo Ortiz - Ivan Romero - TP Final parte 2
// 93502/9 y 119131/3 - Comisión 1
// Link al video nuevo: https://youtu.be/7_eHcgXbSXM

//variables
let gameManager;

function preload(){
  //cargar sonido
  sonidoFondo = loadSound("data/audioFondo.mp3");
  //crear una instancia de la clase GameMaanger
  gameManager = new GameManager();
  
}

function setup() {
  createCanvas(640,480);
}


function draw() {
  background(0);
  
  //ejecutar método principal del gm
  gameManager.dibujar();
  
}

function mousePressed(mouseBu){
  
  gameManager.presMouse();
  
 
  if (!sonidoFondo.isPlaying()) {
        sonidoFondo.loop(true);
  }
}

function keyPressed(){
 
  gameManager.tecladoFlechas(keyCode)
}
