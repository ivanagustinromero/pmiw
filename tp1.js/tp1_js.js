//Romero Ivan 119131/3
// comision 1
//https://youtu.be/hhckzsMMbV0

let imagenRefe;
let fuente;
let condicion = 0;

function preload() {
  imagenRefe = loadImage('data/imagen cubos.jpg');
  fuente = loadFont('data/letra.vlw');
}

function setup() {
  createCanvas(800, 400);
  imagenRefe.resize(400, 400);
  textFont(fuente);
  textSize(32); 
}

function draw() {
  if (condicion == 0) {
    background(85, 104, 51);
  } else {
    background(0);
    image(imagenRefe, 0, 0);
    
  }

  // Dibujo de los cubos
  for (let inicioY = 0; inicioY < height; inicioY += 55) {
    for (let inicioX = 0; inicioX < width; inicioX += 50) {
      dibujarCubo(inicioX, inicioY);
    }
  }
}

function dibujarCubo(posX, posY) {
  let valor1, valor2, valor3;
  let vertice2 = 0;
  let vertice1 = 0;

  if (condicion == 0) {
    // Botón inicio
    fill(0, 0, 0, 50); 
    rect(450, 332, 300, 68);
    fill(255);
    text("CLICK ACÁ", 470, 385);

    fill(52, 11, 25);
    noStroke();

    // Rombo violeta arriba
    beginShape();
    vertex(posX + 400, posY + 12.5);
    vertex(posX + 425, posY + 25);
    vertex(posX + 450, posY + 12.5);
    vertex(posX + 425, posY + 0);
    endShape(CLOSE);

    // Rombo violeta izquierda
    beginShape();
    vertex(posX + 400, posY + 12.5);
    vertex(posX + 400, posY + 42.5);
    vertex(posX + 425, posY + 55);
    vertex(posX + 425, posY + 25);
    endShape(CLOSE);

    // Rombo amarillo derecha
    fill(238, 179, 1);
    beginShape();
    vertex(posX + 425, posY + 25);
    vertex(posX + 425, posY + 55);
    vertex(posX + 450, posY + 42.5);
    vertex(posX + 450, posY + 12.5);
    endShape(CLOSE);

  } else {
    // Botón colores
    fill(0, 0, 0, 50); // Ajustado para hacer visible el texto
    rect(450, 332, 300, 68);
    fill(255);
    text("REINICIAR", 475, 385);

    // Colores random
    valor1 = random(255);
    valor2 = random(255);
    valor3 = random(255);

    vertice2 = fQueRetornaUnValor(vertice2, posY);
    vertice1 = fQueRetornaUnValor(vertice1, posX);

    fill(valor1, valor2, valor3);
    noStroke();

    // Rombo violeta arriba
    beginShape();
    vertex(vertice1 + 400, vertice2 + 12.5);
    vertex(vertice1 + 425, vertice2 + 25);
    vertex(vertice1 + 450, vertice2 + 12.5);
    vertex(vertice1 + 425, vertice2 + 0);
    endShape(CLOSE);

    // Rombo violeta izquierda
    beginShape();
    vertex(vertice1 + 400, vertice2 + 12.5);
    vertex(vertice1 + 400, vertice2 + 42.5);
    vertex(vertice1 + 425, vertice2 + 55);
    vertex(vertice1 + 425, vertice2 + 25);
    endShape(CLOSE);

    // Rombo amarillo derecha
    fill(238, 179, 1);
    beginShape();
    vertex(vertice1 + 425, vertice2 + 25);
    vertex(vertice1 + 425, vertice2 + 55);
    vertex(vertice1 + 450, vertice2 + 42.5);
    vertex(vertice1 + 450, vertice2 + 12.5);
    endShape(CLOSE);
  }
}

function fQueRetornaUnValor(valor, posY) {
  valor = mouseY - posY;
  return valor;
}

function mousePressed() {
  if (mouseX > 450 && mouseX < 750 && mouseY > 332 && mouseY < 400) {
    condicion = (condicion == 0) ? 1 : 0;
  }
}
