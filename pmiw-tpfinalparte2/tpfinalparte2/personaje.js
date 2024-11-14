class Personaje {
  constructor(posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.velocidad = 5; // Velocidad de movimiento
   
    this.adColor = color(200,0,0);
    this.vida=1;   // vida del personaje
  }

 
  
  
    tecladeFlechas(keyCode){
  
   
    if (keyCode == LEFT_ARROW) {
    this.moverIzquierda();
     
    
  
} else if(keyCode == RIGHT_ARROW){
  this.moverDerecha();

}
      
      
    }
    moverIzquierda(){
      this.posx  -= 10;
    
    }
    
    
    moverDerecha(){
      this.posx +=10;
      
      
      
    }
    // Limitar el movimiento dentro de los bordes de la pantalla
   


  dibujar(){
    fill(this.adColor); // Color del personaje (rojo)
    rect(this.posx, this.posy, 50, 50);
  }
  
  estadodeVida(){
    
  
  
  }
}
